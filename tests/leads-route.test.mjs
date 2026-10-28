import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import { POST } from "../src/app/api/leads/route.ts";

const originalWebhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
const lead = {
  nome: " João da Silva ",
  razaoSocial: " Empresa Exemplo LTDA ",
  cnpj: "12.345.678/0001-90",
  telefone: "+55 (11) 99999-9999",
  email: " joao@empresa.com.br ",
};

const request = (body) => new Request("http://localhost/api/leads", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

beforeEach(() => {
  process.env.N8N_LEAD_WEBHOOK_URL = "https://n8n.example.test/receber-lead";
  // All requests are intercepted: tests never trigger the production workflow.
  mock.method(globalThis, "fetch", async () => new Response(null, { status: 204 }));
});

afterEach(() => {
  mock.restoreAll();
  if (originalWebhookUrl === undefined) {
    delete process.env.N8N_LEAD_WEBHOOK_URL;
  } else {
    process.env.N8N_LEAD_WEBHOOK_URL = originalWebhookUrl;
  }
});

test("sends the exact normalized payload with server-defined metadata", async () => {
  const response = await POST(request({ ...lead, idEmpresa: "malicious", idCampanha: "other" }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(fetch.mock.callCount(), 1);
  const [url, options] = fetch.mock.calls[0].arguments;
  assert.equal(url, process.env.N8N_LEAD_WEBHOOK_URL);
  assert.equal(options.method, "POST");
  assert.equal(options.headers["Content-Type"], "application/json");
  assert.equal(options.redirect, "error");
  assert.ok(options.signal instanceof AbortSignal);
  assert.deepEqual(JSON.parse(options.body), {
    idEmpresa: "001",
    empresa: "Daytrade",
    idProduto: "10",
    descricaoProduto: "Antecipação de Recebíveis",
    idCampanha: "1001",
    descricaoCampanha: "Google Ads",
    lead: {
      nome: "João da Silva",
      razaoSocial: "Empresa Exemplo LTDA",
      cnpj: "12345678000190",
      telefone: "5511999999999",
      email: "joao@empresa.com.br",
    },
  });
});

test("rejects missing or invalid fields without contacting n8n", async () => {
  for (const body of [
    null, [], {}, { ...lead, nome: "  " }, { ...lead, razaoSocial: 123 },
    { ...lead, cnpj: "123" }, { ...lead, telefone: "abc11999999999" },
    { ...lead, email: "invalid" },
  ]) {
    const response = await POST(request(body));
    assert.equal(response.status, 400);
    assert.equal(typeof (await response.json()).error, "string");
  }
  assert.equal(fetch.mock.callCount(), 0);
});

test("rejects malformed JSON", async () => {
  const response = await POST(new Request("http://localhost/api/leads", {
    method: "POST", body: "{",
  }));
  assert.equal(response.status, 400);
  assert.equal(fetch.mock.callCount(), 0);
});

test("fails safely if the webhook is not configured", async () => {
  delete process.env.N8N_LEAD_WEBHOOK_URL;
  const response = await POST(request(lead));
  assert.equal(response.status, 503);
  assert.equal(fetch.mock.callCount(), 0);
});

test("does not report success when n8n rejects the request or expose its response", async () => {
  fetch.mock.mockImplementation(async () => new Response("private upstream details", { status: 500 }));
  const response = await POST(request(lead));
  assert.equal(response.status, 502);
  const body = await response.json();
  assert.equal(body.success, undefined);
  assert.ok(!JSON.stringify(body).includes("private upstream details"));
  assert.equal(fetch.mock.callCount(), 1);
});

test("handles connection failures and timeouts without automatic retries", async () => {
  for (const error of [new TypeError("fetch failed"), new DOMException("timed out", "TimeoutError")]) {
    fetch.mock.mockImplementation(async () => { throw error; });
    const response = await POST(request(lead));
    assert.equal(response.status, 502);
    assert.equal((await response.json()).success, undefined);
  }
  assert.equal(fetch.mock.callCount(), 2);
});
