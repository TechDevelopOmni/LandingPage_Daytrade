"use client";

import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export const WHATSAPP_SPECIALIST_URL =
  "https://wa.me/5515991269893?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações";

const openSpecialistContactEvent = "daytrade:open-specialist-contact";
const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

type SpecialistContactButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "type" | "onClick"
>;

export function SpecialistContactButton({
  children = "Fale com um especialista",
  ...props
}: SpecialistContactButtonProps) {
  return (
    <button
      {...props}
      type="button"
      onClick={() => window.dispatchEvent(new Event(openSpecialistContactEvent))}
    >
      {children}
    </button>
  );
}

export function SpecialistContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);

    window.addEventListener(openSpecialistContactEvent, openModal);

    return () => window.removeEventListener(openSpecialistContactEvent, openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    nameInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => !element.matches(":disabled"));

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappUrl = new URL(WHATSAPP_SPECIALIST_URL);

    whatsappUrl.searchParams.set(
      "text",
      "Olá, vim pelo site e gostaria de mais informações.",
    );

    window.location.assign(whatsappUrl.toString());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-zinc-950/75 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="specialist-modal-title"
        aria-describedby="specialist-modal-description"
        className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-white p-6 text-zinc-950 shadow-2xl shadow-black/30 sm:p-8"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <span className="sr-only">Fechar formulário</span>
          <span className="text-2xl leading-none" aria-hidden="true">×</span>
        </button>

        <p className="pr-12 text-sm font-medium uppercase tracking-[0.16em] text-blue-700">
          DayTrade Invest
        </p>
        <h2
          id="specialist-modal-title"
          className="mt-3 pr-10 text-3xl font-normal tracking-tight sm:text-4xl"
        >
          Fale com um especialista
        </h2>
        <p
          id="specialist-modal-description"
          className="mt-3 max-w-md text-sm leading-6 text-zinc-600 sm:text-base"
        >
          Conte um pouco sobre você. Ao enviar, abriremos uma conversa no WhatsApp com nossa equipe.
        </p>

        <form className="mt-7 grid gap-4" onSubmit={submitForm}>
          <label htmlFor="specialist-name" className="grid gap-1.5 text-sm font-medium text-zinc-800">
            Nome
            <input
              ref={nameInputRef}
              id="specialist-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={formInputClass}
            />
          </label>
          <label htmlFor="specialist-company" className="grid gap-1.5 text-sm font-medium text-zinc-800">
            Empresa
            <input
              id="specialist-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              className={formInputClass}
            />
          </label>
          <label htmlFor="specialist-phone" className="grid gap-1.5 text-sm font-medium text-zinc-800">
            Telefone
            <input
              id="specialist-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={formInputClass}
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[#00213d] px-5 text-sm font-medium text-white transition hover:bg-[#00345f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00213d]"
          >
            Continuar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

const formInputClass =
  "min-h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-base font-normal text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#00213d] focus:ring-2 focus:ring-[#00213d]/15";
