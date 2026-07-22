import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rext.dev — A rare 4-letter .dev domain for sale" },
      {
        name: "description",
        content:
          "Rext.dev — a short, punchy, brandable 4-letter .dev domain for AI agents, developer tools, frameworks and next-gen products. Available now via secure transfer.",
      },
      {
        name: "keywords",
        content:
          "rext.dev, .dev domain for sale, 4 letter domain, premium domain, brandable domain, developer domain, AI startup domain, buy domain, domain marketplace",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "author", content: "Rext.dev" },

      // Open Graph
      { property: "og:site_name", content: "Rext.dev" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rext.dev/" },
      { property: "og:title", content: "Rext.dev — A rare 4-letter .dev domain for sale" },
      {
        property: "og:description",
        content:
          "Short. Memorable. Built for builders. Acquire the Rext.dev premium 4-letter .dev domain via secure transfer.",
      },
      { property: "og:locale", content: "en_US" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@rext_dev" },
      { name: "twitter:creator", content: "@rext_dev" },
      { name: "twitter:title", content: "Rext.dev — A rare 4-letter .dev domain for sale" },
      {
        name: "twitter:description",
        content:
          "Short. Memorable. Built for builders. Acquire the Rext.dev premium 4-letter .dev domain.",
      },
    ],
    links: [{ rel: "canonical", href: "https://rext.dev/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Rext.dev domain",
          category: "Domain Name",
          description:
            "Premium brandable 4-letter .dev domain for AI agents, developer tools, frameworks and next-gen products.",
          brand: { "@type": "Brand", name: "Rext.dev" },
          url: "https://rext.dev/",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "20000",
            availability: "https://schema.org/InStock",
            url: "https://www.namecheap.com/market/buynow/rext.dev/",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const DOMAIN = "Rext.dev";
const EMAIL = "owner@rext.dev";
const MAILTO = `mailto:${EMAIL}?subject=Offer%20for%20${DOMAIN}`;

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden text-foreground">
      {/* Background stack */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-40" />

      <Nav />
      <Hero />
      <Ticker />
      <Terminal />
      <UseCases />
      <Pricing />
      <Brandability />
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{ background: "oklch(0.11 0.015 260 / 0.6)", borderBottom: "1px solid var(--hairline)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold tracking-tight">{DOMAIN}</span>
          <span className="hidden rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[color:var(--primary)] sm:inline-block" style={{ borderColor: "var(--hairline-strong)" }}>
            For sale
          </span>
        </a>
        <nav className="hidden gap-7 text-sm text-[color:var(--muted-ink)] md:flex">
          <a href="#uses" className="hover:text-foreground transition">Vision</a>
          <a href="#price" className="hover:text-foreground transition">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href={MAILTO}
          className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--primary-foreground)] transition hover:scale-[1.03]"
          style={{ background: "var(--gradient-primary)", boxShadow: "0 8px 24px -10px oklch(0.88 0.19 142 / 0.5)" }}
        >
          Acquire →
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span
      className="grid h-9 w-9 place-items-center rounded-xl font-mono text-sm font-bold"
      style={{
        background: "var(--gradient-primary)",
        color: "var(--primary-foreground)",
        boxShadow: "0 6px 20px -6px oklch(0.88 0.19 142 / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.3)",
      }}
    >
      R
    </span>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
      {/* status pill */}
      <div className="flex items-center gap-3 font-mono text-xs">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5" style={{ borderColor: "var(--hairline-strong)", background: "oklch(1 0 0 / 0.03)" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "var(--primary)" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--primary)" }} />
          </span>
          <span className="text-[color:var(--muted-ink)]">$ status:</span>
          <span className="text-[color:var(--primary)]">AVAILABLE</span>
        </span>
        <span className="hidden text-[color:var(--muted-ink)] md:inline">· registered 2026 · clean history</span>
      </div>

      {/* headline */}
      <h1 className="mt-8 text-[15vw] font-bold leading-[0.92] tracking-[-0.04em] md:text-[8.5rem] lg:text-[10rem]">
        <span className="text-gradient">Rext</span>
        <span className="text-[color:var(--muted-ink)]">.dev</span>
      </h1>

      <p className="mt-2 max-w-2xl font-serif text-2xl italic leading-snug text-[color:var(--muted-ink)] md:text-4xl">
        the <span className="text-foreground not-italic font-sans font-semibold">next</span> name in dev.
      </p>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--muted-ink)] md:text-lg">
        Four letters. One syllable. Zero compromise. The kind of <span className="text-foreground">.dev</span> domain
        founders spend months searching for — perfect for frameworks, AI agents, and next-gen developer products.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={MAILTO}
          className="group relative overflow-hidden rounded-full px-7 py-4 text-base font-semibold transition hover:scale-[1.02]"
          style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}
        >
          <span className="relative z-10">Acquire this domain →</span>
          <span className="absolute inset-0 animate-shine" />
        </a>
        <a
          href="#price"
          className="rounded-full border px-7 py-4 text-base font-medium transition hover:bg-[color:var(--surface)]"
          style={{ borderColor: "var(--hairline-strong)" }}
        >
          View pricing
        </a>
      </div>

      {/* trust strip */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[color:var(--muted-ink)]">
        <TrustItem>🔒 Escrow.com secured</TrustItem>
        <TrustItem>⚡ 24h transfer</TrustItem>
        <TrustItem>🌐 Google .dev TLD · HTTPS enforced</TrustItem>
      </div>

      {/* big stat grid */}
      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-4" style={{ borderColor: "var(--hairline)", background: "var(--hairline)" }}>
        {[
          { k: "4", v: "letters", sub: "ultra short" },
          { k: ".dev", v: "TLD", sub: "Google-operated" },
          { k: "A+", v: "brandability", sub: "scored by humans" },
          { k: "∞", v: "use cases", sub: "AI / SaaS / OSS" },
        ].map((s) => (
          <div key={s.v} className="group relative bg-[color:var(--surface)] p-7 transition hover:bg-[color:var(--surface-2)]">
            <div className="text-4xl font-bold tracking-tight md:text-5xl" style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              {s.k}
            </div>
            <div className="mt-2 text-sm font-medium">{s.v}</div>
            <div className="mt-0.5 font-mono text-xs text-[color:var(--muted-ink)]">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5">{children}</span>;
}

/* ---------- TICKER ---------- */
function Ticker() {
  const words = [
    "AI Agents", "Developer Tools", "SaaS Platform", "DX Tooling",
    "Open Source", "Hero Products", "Dev Studio", "API Platform",
    "DevOps", "Indie Hacker", "Founder Brand", "Startup",
  ];
  const doubled = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y py-5" style={{ borderColor: "var(--hairline)", background: "oklch(0 0 0 / 0.2)" }}>
      <div className="flex w-max animate-marquee gap-12 font-mono text-sm text-[color:var(--muted-ink)]">
        {doubled.map((w, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-[color:var(--primary)]">◆</span>
            <span>{w}</span>
          </span>
        ))}
      </div>
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32" style={{ background: "linear-gradient(90deg, oklch(0.11 0.015 260), transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(270deg, oklch(0.11 0.015 260), transparent)" }} />
    </div>
  );
}

/* ---------- TERMINAL ---------- */
function Terminal() {
  const lines = [
    { p: "$", c: "whois rext.dev", out: null },
    { p: ">", c: null, out: "Domain:        REXT.DEV" },
    { p: ">", c: null, out: "Status:        AVAILABLE FOR ACQUISITION" },
    { p: ">", c: null, out: "Length:        4 characters" },
    { p: ">", c: null, out: "TLD:           .dev (Google)" },
    { p: ">", c: null, out: "Brandability:  ████████████ 97/100" },
    { p: ">", c: null, out: "Pronounceable: yes" },
    { p: ">", c: null, out: "Trademark:     clean · no conflicts" },
    { p: "$", c: "make_offer --domain rext.dev", out: null },
  ];
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCursor((c) => (c + 1) % lines.length), 800);
    return () => clearInterval(t);
  }, [lines.length]);

  return (
    <section className="mx-auto max-w-5xl px-6 pt-24">
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--hairline-strong)", background: "oklch(0.09 0.015 260)", boxShadow: "var(--shadow-card)" }}
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: "var(--hairline)" }}>
          <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.16_85)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.18_145)]" />
          <span className="ml-3 font-mono text-xs text-[color:var(--muted-ink)]">~/domains — rext.dev — zsh</span>
        </div>
        <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed md:p-8 md:text-sm">
          {lines.map((l, i) => (
            <div key={i} className="flex gap-3">
              <span className="select-none text-[color:var(--primary)]">{l.p}</span>
              {l.c && <span className="text-foreground">{l.c}{i === cursor && <span className="ml-0.5 inline-block h-4 w-2 animate-blink align-middle" style={{ background: "var(--primary)" }} />}</span>}
              {l.out && <span className="text-[color:var(--muted-ink)]">{l.out}</span>}
            </div>
          ))}
        </pre>
      </div>
    </section>
  );
}

/* ---------- USE CASES ---------- */
function UseCases() {
  const cases = [
    { tag: "rext.dev", title: "Next-gen framework", body: "A React/Next successor, a build tool, a runtime — a name that sounds like the future.", icon: "⚡" },
    { tag: "rext.dev/cli", title: "Developer tool", body: "A CLI, SDK, or edge platform. Short enough to type a hundred times a day.", icon: "🛠️" },
    { tag: "rext.dev/ai", title: "AI Agent platform", body: "Reactive agents, retrieval, execution. Rext = React + Next-step for AI-native workflows.", icon: "🤖" },
    { tag: "github.com/rext", title: "Open source", body: "Strong, ownable identity for a community-driven library or framework.", icon: "🌟" },
    { tag: "@rext", title: "Startup brand", body: "Four letters. Trademark-friendly. Impossible to misspell, easy to remember.", icon: "🚀" },
    { tag: "rext.dev/me", title: "Founder portfolio", body: "A senior engineer's personal brand — confident, minimal, premium.", icon: "👤" },
  ];
  return (
    <section id="uses" className="mx-auto max-w-6xl px-6 py-28">
      <SectionLabel>// brand vision</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Six ways to turn <span className="text-gradient">Rext.dev</span> into a brand worth remembering.
      </h2>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-[color:var(--primary)]"
            style={{ borderColor: "var(--hairline-strong)", background: "linear-gradient(180deg, var(--surface), oklch(0.13 0.018 260))" }}
          >
            <div className="flex items-start justify-between">
              <div className="text-3xl">{c.icon}</div>
              <span className="rounded-md px-2 py-1 font-mono text-[11px] text-[color:var(--primary)]" style={{ background: "oklch(0.88 0.19 142 / 0.1)" }}>
                {c.tag}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-ink)]">{c.body}</p>
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition group-hover:opacity-50" style={{ background: "var(--primary)" }} />
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const tiers = [
    {
      name: "Quick Buy",
      price: "$20,000",
      sub: "Instant checkout. No negotiation.",
      perks: ["Transfer within 24h", "Escrow.com secured", "Push to your registrar"],
      cta: "Buy now at $20k",
      link: "https://www.namecheap.com/market/buynow/rext.dev/",
      featured: false,
    },
    {
      name: "Fair Market",
      price: "$25,000",
      sub: "The realistic buyer price.",
      perks: ["Domain consultation call", "Logo concept included", "Escrow + DNS handover", "Listed on Afternic & Sedo"],
      cta: "Buy at fair market",
      link: "https://www.namecheap.com/market/buynow/rext.dev/",
      featured: true,
      badge: "Most popular",
    },
    {
      name: "Make an Offer",
      price: "$35k+",
      sub: "For funded startups & brands.",
      perks: ["Trademark assistance", "Full brand kit handover", "White-glove transfer", "Installments available"],
      cta: "Send your offer",
      link: MAILTO,
      featured: false,
    },
  ];
  return (
    <section id="price" className="mx-auto max-w-6xl px-6 py-28">
      <SectionLabel>// pricing</SectionLabel>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
          Three ways to <span className="text-gradient">own it.</span>
        </h2>
        <p className="max-w-sm text-[color:var(--muted-ink)]">
          Domains are appreciating assets. The right .dev name is rarer than a great GitHub handle.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={"relative flex flex-col rounded-3xl border p-8 transition " + (t.featured ? "md:-translate-y-4 md:scale-105" : "")}
            style={{
              borderColor: t.featured ? "var(--primary)" : "var(--hairline-strong)",
              background: t.featured
                ? "linear-gradient(180deg, oklch(0.88 0.19 142 / 0.12), var(--surface))"
                : "var(--surface)",
              boxShadow: t.featured ? "var(--shadow-glow)" : "var(--shadow-card)",
            }}
          >
            {t.badge && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider"
                style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}
              >
                ★ {t.badge}
              </div>
            )}
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]">{t.name}</div>
            <div className="mt-4 flex items-baseline gap-2">
              <span
                className="text-6xl font-bold tracking-tight"
                style={
                  t.featured
                    ? { background: "var(--gradient-text)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
                    : {}
                }
              >
                {t.price}
              </span>
              <span className="text-sm text-[color:var(--muted-ink)]">USD</span>
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted-ink)]">{t.sub}</div>
            <ul className="mt-7 flex-1 space-y-3 text-sm">
              {t.perks.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full text-[10px] font-bold"
                    style={{ background: t.featured ? "var(--gradient-primary)" : "oklch(0.88 0.19 142 / 0.15)", color: t.featured ? "var(--primary-foreground)" : "var(--primary)" }}
                  >
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.link}
              target={t.link.startsWith("http") ? "_blank" : undefined}
              rel={t.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-8 block rounded-full px-5 py-3.5 text-center text-sm font-semibold transition hover:scale-[1.02]"
              style={
                t.featured
                  ? { background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "0 10px 30px -10px oklch(0.88 0.19 142 / 0.6)" }
                  : { border: "1px solid var(--hairline-strong)", color: "var(--foreground)" }
              }
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-mono text-xs text-[color:var(--muted-ink)]">
        // also listed on Afternic · Sedo · Dan.com — best price direct from owner
      </p>
    </section>
  );
}

/* ---------- BRANDABILITY ---------- */
function Brandability() {
  const points = [
    { n: "01", t: "Short & sharp", d: "4 letters, 1 syllable. Easy to say on a podcast, impossible to mistype on mobile." },
    { n: "02", t: ".dev is premium", d: "Google-operated TLD with built-in HTTPS. Signals developer-first instantly." },
    { n: "03", t: "Future-facing sound", d: "‘Rext’ echoes React, Next, and Rex — modern, technical, forward-motion energy." },
    { n: "04", t: "Trademark friendly", d: "Coined word, no generic conflicts. Clean basis for a global product brand." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionLabel>// why this name</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        Strong by every metric brand designers care about.
      </h2>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2" style={{ borderColor: "var(--hairline)", background: "var(--hairline)" }}>
        {points.map((p) => (
          <div key={p.n} className="group relative bg-[color:var(--surface)] p-10 transition hover:bg-[color:var(--surface-2)]">
            <div className="font-mono text-sm text-[color:var(--primary)]">{p.n}</div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.t}</h3>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--muted-ink)]">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- COMPARISON ---------- */
function Comparison() {
  const rows = [
    { feat: "Length", a: "4 letters", b: "12+ letters", aGood: true },
    { feat: "Pronounceable", a: "Yes", b: "Hyphenated / numeric", aGood: true },
    { feat: "TLD", a: ".dev (Google)", b: ".xyz / .io fallback", aGood: true },
    { feat: "Trademark risk", a: "Clean coined word", b: "Generic / conflicting", aGood: true },
    { feat: "Brand feel", a: "Modern · technical", b: "Random / generic", aGood: true },
  ];
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionLabel>// the alternative</SectionLabel>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
        Rext.dev vs. the domain you'd settle for.
      </h2>
      <div className="mt-10 overflow-hidden rounded-2xl border" style={{ borderColor: "var(--hairline-strong)", background: "var(--surface)" }}>
        <div className="grid grid-cols-3 border-b font-mono text-xs uppercase tracking-wider text-[color:var(--muted-ink)]" style={{ borderColor: "var(--hairline)" }}>
          <div className="p-4">Criteria</div>
          <div className="p-4 text-[color:var(--primary)]">Rext.dev</div>
          <div className="p-4">The compromise</div>
        </div>
        {rows.map((r, i) => (
          <div key={r.feat} className={"grid grid-cols-3 text-sm " + (i % 2 ? "bg-[oklch(1_0_0_/_0.015)]" : "")}>
            <div className="border-t p-4 text-[color:var(--muted-ink)]" style={{ borderColor: "var(--hairline)" }}>{r.feat}</div>
            <div className="border-t p-4 font-medium text-foreground" style={{ borderColor: "var(--hairline)" }}>
              <span className="mr-2 text-[color:var(--primary)]">✓</span>{r.a}
            </div>
            <div className="border-t p-4 text-[color:var(--muted-ink)] line-through decoration-[oklch(0.65_0.2_25_/_0.6)]" style={{ borderColor: "var(--hairline)" }}>
              {r.b}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "How does the purchase work?", a: "Pay via Escrow.com or wire. Once funds clear, the domain is pushed to your registrar within 24 hours. No drama." },
    { q: "Are there ongoing fees?", a: "No. After transfer you only pay your registrar's annual renewal (~$15/yr for .dev)." },
    { q: "Can I pay in installments?", a: "Yes — for offers above $2,000 we can structure 3–6 month installments via Dan.com." },
    { q: "Will you negotiate?", a: "Reasonable offers above the Quick Buy price are always considered. Lowballs are politely ignored." },
    { q: "What if I want a logo too?", a: "The Fair Market tier includes a logo concept. Custom brand identity is available on request." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-28">
      <SectionLabel>// FAQ</SectionLabel>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Questions, answered.</h2>
      <div className="mt-10 space-y-3">
        {items.map((it) => (
          <details
            key={it.q}
            className="group rounded-2xl border p-6 transition hover:border-[color:var(--primary)]"
            style={{ borderColor: "var(--hairline-strong)", background: "var(--surface)" }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
              {it.q}
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full text-xl text-[color:var(--primary)] transition group-open:rotate-45" style={{ background: "oklch(0.88 0.19 142 / 0.12)" }}>
                +
              </span>
            </summary>
            <p className="mt-4 text-[color:var(--muted-ink)]">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28">
      <div
        className="relative overflow-hidden rounded-[2rem] border p-10 md:p-20"
        style={{
          borderColor: "var(--hairline-strong)",
          background:
            "radial-gradient(ellipse at 80% 0%, oklch(0.68 0.22 290 / 0.25), transparent 60%), radial-gradient(ellipse at 10% 80%, oklch(0.88 0.19 142 / 0.3), transparent 60%), var(--surface)",
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--primary)]">// final word</div>
          <h2 className="mt-5 text-5xl font-bold leading-[1] tracking-tight md:text-7xl">
            Be the one who owns{" "}
            <span className="text-gradient">Rext.dev</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--muted-ink)]">
            Domains like this don't come back on the market. Lock it in before someone else builds the product you wanted to build.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={MAILTO}
              className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}
            >
              <span className="relative z-10">Contact the owner →</span>
              <span className="absolute inset-0 animate-shine" />
            </a>
            <a href={`mailto:${EMAIL}`} className="font-mono text-sm text-[color:var(--muted-ink)] hover:text-foreground">
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl animate-float" style={{ background: "var(--primary)" }} />
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--hairline)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[color:var(--muted-ink)] md:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold text-foreground">{DOMAIN}</span>
          <span className="font-mono text-xs">© 2026</span>
        </div>
        <div className="font-mono text-xs">
          // inquiries: <a className="text-foreground hover:text-[color:var(--primary)]" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--primary)]">
      <span className="h-px w-10" style={{ background: "var(--primary)" }} />
      {children}
    </div>
  );
}