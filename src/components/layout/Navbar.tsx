"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "../../data/home";
import { FeedbackButton } from "../ui/FeedbackButton";

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<
    "DayTrade" | "Setores" | null
  >(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  const showNavigationFeedback = () => {
    setIsOpen(false);
  };

  const goToTop = () => {
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

  const navAction = (
    item: (typeof siteContent.navigation)[number],
    variant: "desktop" | "mobile" = "desktop",
  ) => {
    const linkClass =
      variant === "desktop" ? navLinkClass : mobileNavLinkClass;

    if (item.type === "menu" && variant === "desktop") {
      const menuKey = item.label === "Setores" ? "Setores" : "DayTrade";
      const isMenuOpen = openDesktopMenu === menuKey;
      const menuContent =
        menuKey === "Setores"
          ? {
              headline: "Soluções para o seu setor.",
              description:
                "Encontre caminhos financeiros alinhados aos desafios do seu mercado.",
              items: ["Indústria", "Construtora", "Agronegócio"],
            }
          : {
              headline: "Conheça a DayTrade.",
              description:
                "Conteudos e atalhos do menu serao definidos nesta area.",
              items: ["Sobre nós", "Parceiro indicador", "Área do cliente"],
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
            className={`${navLinkClass} ${isMenuOpen ? "bg-white/10" : ""}`}
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
                  {menuContent.items.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="w-fit text-left text-lg font-normal text-zinc-950 transition-colors hover:text-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
        className="mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between px-7 text-white sm:px-10 lg:h-24 lg:px-14"
        aria-label="Main"
      >
        <div className="flex items-center space-x-10 px-4 py-3">
          <button
            type="button"
            onClick={goToTop}
            tabIndex={isOpen ? -1 : undefined}
            className="flex h-full flex-none items-center rounded-md text-white ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="Return home"
          >
            <div className="flex w-40 items-center">
              <Image
                src={siteContent.brand.logo.src}
                alt={siteContent.brand.name}
                width={siteContent.brand.logo.width}
                height={siteContent.brand.logo.height}
                className="h-10 w-auto max-w-full brightness-0 invert"
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

        <div className="hidden items-center gap-4 text-[14px] font-light text-white md:flex">
          <FeedbackButton
            message={siteContent.feedback.navigation}
            className="inline-flex h-8 w-[60.5px] items-center justify-center rounded-md px-0 py-1 text-[12px] font-light text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {siteContent.actions.login}
          </FeedbackButton>
          <FeedbackButton
            message={siteContent.feedback.contact}
            className="inline-flex h-10 w-[96.98px] items-center justify-center rounded-md bg-black px-0 text-[13px] font-light text-white shadow-xl shadow-black/20 transition-colors hover:bg-zinc-900 focus:bg-zinc-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {siteContent.actions.primary}
          </FeedbackButton>
        </div>

        {!isOpen ? (
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
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
                src={siteContent.brand.logo.src}
                alt={siteContent.brand.logo.alt}
                width={siteContent.brand.logo.width}
                height={siteContent.brand.logo.height}
                className="h-10 w-auto brightness-0 invert"
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
              <FeedbackButton
                message={siteContent.feedback.contact}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-white px-5 text-base font-medium text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onActivate={closeMenu}
              >
                {siteContent.actions.primary}
              </FeedbackButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
const navLinkClass =
  "group inline-flex h-7 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-left text-[10px] font-light text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10";
const mobileNavLinkClass =
  "group inline-flex min-h-11 w-max items-center justify-center rounded-md bg-transparent px-2.5 py-1 text-left text-xl font-normal text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

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
