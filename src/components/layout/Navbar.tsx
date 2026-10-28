"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { siteContent } from "../../data/home";
import { FeedbackButton } from "../ui/FeedbackButton";

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

type NavbarProps = {
  variant?: "dark" | "light";
};

export function Navbar({ variant = "dark" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const submissionInProgressRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const isLight = variant === "light";
  const isHomePage = pathname === "/";
  const headerLogo = isHomePage
    ? {
        src: "/images/daytrade-logo-home.png",
        alt: "DayTrade",
        width: 515,
        height: 167,
      }
    : siteContent.brand.logo;
  const [openDesktopMenu, setOpenDesktopMenu] = useState<
    "DayTrade" | "Setores" | null
  >(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const clientModalRef = useRef<HTMLDivElement>(null);
  const clientNameInputRef = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  const showNavigationFeedback = () => {
    setIsOpen(false);
  };

  const openClientModal = () => {
    if (!submissionInProgressRef.current) {
      setIsFormSubmitted(false);
      setFormError(null);
    }
    setIsOpen(false);
    setIsClientModalOpen(true);
  };

  const closeClientModal = () => {
    setIsClientModalOpen(false);
  };

  const submitClientForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgressRef.current || isFormSubmitted) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    submissionInProgressRef.current = true;
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.get("name"),
          razaoSocial: formData.get("company"),
          cnpj: formData.get("cnpj"),
          telefone: formData.get("phone"),
          email: formData.get("email"),
        }),
      });
      const result = await response.json();

      if (!response.ok || result.success !== true) {
        setFormError(result.error || "Não foi possível confirmar o envio. Tente novamente em instantes.");
        return;
      }

      form.reset();
      setIsFormSubmitted(true);
    } catch {
      setFormError("Não foi possível confirmar o envio. Verifique sua conexão e tente novamente.");
    } finally {
      submissionInProgressRef.current = false;
      setIsSubmitting(false);
    }
  };

  const goToTop = () => {
    if (window.location.pathname !== "/") {
      router.push("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
    );
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
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

  useEffect(() => {
    if (!isClientModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    clientNameInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeClientModal();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = Array.from(
        clientModalRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
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
  }, [isClientModalOpen]);

  const navAction = (
    item: (typeof siteContent.navigation)[number],
    variant: "desktop" | "mobile" = "desktop",
  ) => {
    const linkClass =
      variant === "desktop"
        ? isLight
          ? lightNavLinkClass
          : navLinkClass
        : mobileNavLinkClass;

    if (item.type === "menu" && variant === "desktop") {
      const menuKey = item.label === "Setores" ? "Setores" : "DayTrade";
      const isMenuOpen = openDesktopMenu === menuKey;
      const menuContent =
        menuKey === "Setores"
          ? {
              headline: "Soluções para o seu setor.",
              description:
                "Encontre caminhos financeiros alinhados aos desafios do seu mercado.",
              items: [
                { label: "Agro", href: "/setores#agronegocio" },
                { label: "Indústria", href: "/setores#industria" },
                { label: "Construtora", href: "/setores#construtora" },
              ],
            }
          : {
              headline: "Conheça a DayTrade.",
              description:
                "Conteudos e atalhos do menu serao definidos nesta area.",
              items: [
                { label: "Sobre nós", href: "/sobre-nos" },
                { label: "Parceiro indicador", href: "/parceiro-indicador" },
                { label: "Área do cliente", href: "/area-do-cliente" },
              ],
            };

      return (
        <div
          className="relative"
          onMouseEnter={() => setOpenDesktopMenu(menuKey)}
          onMouseLeave={() => setOpenDesktopMenu(null)}
          onFocusCapture={() => setOpenDesktopMenu(menuKey)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setOpenDesktopMenu(null);
            }
          }}
        >
          <button
            type="button"
            className={`${linkClass} ${
              isMenuOpen ? (isLight ? "bg-black/5" : "bg-white/10") : ""
            }`}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            onClick={() => setOpenDesktopMenu(menuKey)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpenDesktopMenu(null);
                event.currentTarget.blur();
              }
            }}
          >
            {item.label}
            <ChevronDown isOpen={isMenuOpen} />
          </button>

          <div
            className={`absolute left-0 top-full z-50 pt-4 transition duration-150 ${
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-1 opacity-0"
            }`}
          >
            <div
              className="w-[min(760px,calc(100vw-7rem))] rounded-lg border border-black/10 bg-white p-8 text-zinc-950 shadow-2xl shadow-black/25"
              aria-label={`Menu ${menuKey}`}
            >
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-12">
                <div className="border-r border-zinc-200 pr-10">
                  <p className="text-sm font-medium text-zinc-500">{menuKey}</p>
                  <p className="mt-4 text-3xl font-normal leading-tight">
                    {menuContent.headline}
                  </p>
                  <p className="mt-4 max-w-sm text-base leading-7 text-zinc-600">
                    {menuContent.description}
                  </p>
                </div>

                <div className={`grid ${menuKey === "Setores" ? "gap-4" : "gap-6"}`}>
                  {menuContent.items.map((menuItem) =>
                    menuItem.href ? (
                      <Link
                        key={menuItem.label}
                        href={menuItem.href}
                        className={desktopDropdownItemClass}
                      >
                        {menuItem.label}
                      </Link>
                    ) : (
                      <button
                        key={menuItem.label}
                        type="button"
                        className={desktopDropdownItemClass}
                      >
                        {menuItem.label}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.label === "Setores") {
      return (
        <Link href="/setores" className={linkClass} onClick={showNavigationFeedback}>
          {item.label}
        </Link>
      );
    }

    if (item.type === "menu") {
      return (
        <FeedbackButton
          message={siteContent.feedback.navigation}
          className={linkClass}
          onActivate={showNavigationFeedback}
        >
          {item.label}
          <ChevronDown />
        </FeedbackButton>
      );
    }

    return (
      <FeedbackButton
        message={siteContent.feedback.navigation}
        className={linkClass}
        onActivate={showNavigationFeedback}
      >
        {item.label}
      </FeedbackButton>
    );
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        className={`mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between px-7 sm:px-10 lg:h-24 lg:px-14 ${
          isLight ? "text-zinc-950" : "text-white"
        }`}
        aria-label="Main"
      >
        <div className="flex items-center space-x-10 px-4 py-3">
          <button
            type="button"
            onClick={goToTop}
            tabIndex={isOpen ? -1 : undefined}
            className={`flex h-full flex-none items-center rounded-md ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isLight ? "text-zinc-950 focus-visible:outline-zinc-950" : "text-white focus-visible:outline-white"
            }`}
            aria-label="Return home"
          >
            <div className="flex w-40 items-center">
              <Image
                src={headerLogo.src}
                alt={headerLogo.alt}
                width={headerLogo.width}
                height={headerLogo.height}
                className={`h-10 w-auto max-w-full ${isHomePage || isLight ? "" : "brightness-0 invert"}`}
                fetchPriority="high"
              />
            </div>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
              <div className="relative">
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-center space-x-1"
                >
                  <li>{navAction(siteContent.navigation[0])}</li>
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center" />
            </nav>

            {siteContent.navigation.slice(1, 4).map((item) => (
              <div key={item.label}>{navAction(item)}</div>
            ))}

            <nav
              aria-label="Main"
              data-orientation="horizontal"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
              <div className="relative">
                <ul
                  data-orientation="horizontal"
                  className="group flex flex-1 list-none items-center justify-center space-x-1"
                >
                  <li>{navAction(siteContent.navigation[4])}</li>
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center" />
            </nav>

            {siteContent.navigation.slice(5).map((item) => (
              <div key={item.label}>{navAction(item)}</div>
            ))}
          </div>
        </div>

        <div className="hidden items-center md:flex">
          <button
            type="button"
            onClick={openClientModal}
            className={`inline-flex h-10 min-w-[112px] cursor-pointer items-center justify-center rounded-md bg-[darkblue] px-5 text-[13px] font-medium text-white shadow-xl shadow-black/20 transition-colors hover:bg-[#A8CF45] focus:bg-[#A8CF45] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isLight ? "focus-visible:outline-zinc-950" : "focus-visible:outline-white"
            }`}
          >
            Seja Cliente
          </button>
        </div>

        {!isOpen ? (
          <button
            ref={buttonRef}
            type="button"
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border backdrop-blur transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden ${
              isLight
                ? "border-black/20 bg-black/5 text-zinc-950 hover:bg-black/10 focus-visible:outline-zinc-950"
                : "border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
            }`}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition" />
              <span className="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition" />
              <span className="absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition" />
            </span>
          </button>
        ) : null}
      </nav>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden">
          <div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegacao"
            className="ml-auto flex min-h-dvh w-full max-w-sm flex-col bg-zinc-950 px-6 py-6 text-white shadow-2xl shadow-black"
          >
            <div className="flex items-center justify-between">
              <Image
                src={headerLogo.src}
                alt={headerLogo.alt}
                width={headerLogo.width}
                height={headerLogo.height}
                className={`h-10 w-auto ${isHomePage ? "" : "brightness-0 invert"}`}
              />
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={closeMenu}
              >
                <span className="sr-only">Fechar menu</span>
                <span className="relative h-5 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                  <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                </span>
              </button>
            </div>

            <div className="mt-12 flex flex-col items-start gap-5 text-xl font-normal">
              {siteContent.navigation.map((item) => (
                <span key={item.label}>{navAction(item, "mobile")}</span>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <button
                type="button"
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-md bg-[darkblue] px-5 text-base font-medium text-white transition hover:bg-[#A8CF45] focus:bg-[#A8CF45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={openClientModal}
              >
                Seja Cliente
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isClientModalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/75 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeClientModal();
            }
          }}
        >
          <div
            ref={clientModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="client-modal-title"
            aria-describedby="client-modal-description"
            className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-white p-6 text-zinc-950 shadow-2xl shadow-black/30 sm:p-8"
          >
            <button
              type="button"
              onClick={closeClientModal}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              <span className="sr-only">Fechar formulário</span>
              <span className="text-2xl leading-none" aria-hidden="true">×</span>
            </button>

            <p className="pr-12 text-sm font-medium uppercase tracking-[0.16em] text-blue-700">DayTrade Invest</p>
            <h2 id="client-modal-title" className="mt-3 pr-10 text-3xl font-normal tracking-tight sm:text-4xl">
              Seja cliente
            </h2>
            <p id="client-modal-description" className="mt-3 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
              Conte-nos um pouco sobre a sua empresa. Nossa equipe entrará em contato para entender o melhor caminho para você.
            </p>

            <form id="seja-cliente" className="mt-7 grid gap-4" onSubmit={submitClientForm} aria-busy={isSubmitting}>
              <fieldset className="contents" disabled={isSubmitting || isFormSubmitted}>
                <label htmlFor="client-name" className="grid gap-1.5 text-sm font-medium text-zinc-800">
                  Nome
                  <input
                    ref={clientNameInputRef}
                    id="client-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={formInputClass}
                  />
                </label>
                <label htmlFor="client-company" className="grid gap-1.5 text-sm font-medium text-zinc-800">
                  Razão Social
                  <input
                    id="client-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    className={formInputClass}
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label htmlFor="client-cnpj" className="grid gap-1.5 text-sm font-medium text-zinc-800">
                    CNPJ
                    <input
                      id="client-cnpj"
                      name="cnpj"
                      type="text"
                      required
                      className={formInputClass}
                    />
                  </label>
                  <label htmlFor="client-phone" className="grid gap-1.5 text-sm font-medium text-zinc-800">
                    Telefone
                    <input
                      id="client-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className={formInputClass}
                    />
                  </label>
                </div>
                <label htmlFor="client-email" className="grid gap-1.5 text-sm font-medium text-zinc-800">
                  E-mail
                  <input
                    id="client-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={formInputClass}
                  />
                </label>

              </fieldset>

              {formError ? (
                <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                  {formError}
                </p>
              ) : null}

              {isFormSubmitted ? (
                <p className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800" role="status">
                  Obrigado pelo interesse. Recebemos seus dados e retornaremos em breve.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting || isFormSubmitted}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[#00213d] px-5 text-sm font-medium text-white transition hover:bg-[#00345f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00213d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Enviando…" : isFormSubmitted ? "Solicitação enviada" : "Enviar solicitação"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </header>
  );
}
const navLinkClass =
  "group inline-flex h-7 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-left text-[10px] font-light text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10";
const lightNavLinkClass =
  "group inline-flex h-7 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-left text-[10px] font-light text-zinc-950 transition-colors hover:bg-black/5 focus:bg-black/5 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/5 data-[state=open]:bg-black/5";
const desktopDropdownItemClass =
  "inline-flex w-fit items-center rounded-md px-1 py-0.5 text-left text-lg font-normal text-zinc-950 transition-colors hover:bg-zinc-100 hover:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950";
const mobileNavLinkClass =
  "group inline-flex min-h-11 w-max items-center justify-center rounded-md bg-transparent px-2.5 py-1 text-left text-xl font-normal text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const formInputClass =
  "min-h-11 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-base font-normal text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-[#00213d] focus:ring-2 focus:ring-[#00213d]/15";

function ChevronDown({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
