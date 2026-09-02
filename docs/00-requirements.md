# Requirements Spec — v0 (for collaboration)

**Deliverables:** (1) a slide deck, (2) a working prototype.
**Constraint:** 30 min present + 30 min Q&A. English. Send to Luciana Tavares 24h prior.
**Audience:** Diego Sierra (HM, ex Bank Account Core Experience), Oscar Vargas,
Amanda Legge, Ana Acosta, + Julia Bragança or João Avelino (Juca) — likely global.

> `[OPEN]` markers = decisions still needed from you.

---

## A. The one-sentence thesis

> **Nu México spent five years buying deposits with rate. The bank license is the
> chance to start earning them with relationship — and we have roughly 12 months
> before anyone else can copy it.**

Everything in the deck ladders to this. If a slide doesn't serve it, it goes to appendix.

## B. Three proof points the whole case rests on

1. **35% LDR** — over-funded, under-lent. The marginal deposit peso earns ~CETES (6.49%)
   and some of it cost ~11.5%. Negative carry at the margin.
2. **Deposit beta << 1** — the 15%→11.5% cut held >90% retention *with balance growth*.
   Rate is not what is holding the base. Something else is, and we should find out what.
3. **Portabilidad de nómina** — worker-initiated, free, 11 business days. The incumbent
   nómina moat is an HR relationship; portability routes around it with consumer pull.

## C. "Holistic" strategy architecture

Per your call, we do **not** do a single narrow product deep-dive. Instead: one integrated
value proposition, with nómina as the **keystone** that makes the rest structurally work.

```
                    CORE VALUE PROPOSITION
        "The account your money arrives in, not the one it sits in"

   ANCHOR              ENGINE                MULTIPLIER
   Income lands here → Relationship-priced → Credit + protection
   (nómina, remesas,   yield ladder          unlocked by verified,
    gig, recurring)    (spread over CETES)   observed income
   ────────────────────────────────────────────────────────────
   fixes: acquisition  fixes: cost of funds  fixes: 35% LDR
```

Two tracks, because 55.1% of workers are informal:
- **Track A — Nómina real:** 22.76M IMSS formal workers, won via portability.
- **Track B — Nómina sintética:** the same benefit tier *earned by observed recurring
  income* (remittances $30.8B H1, gig payouts, consistent deposits) rather than by an
  employment contract. This is the inclusion-aligned, on-mission, "outside the box" half.

`[OPEN]` Do you want Track B as a co-equal pillar, or as a Phase-2 extension? Co-equal is
more on-mission and more differentiated; Phase-2 is easier to defend on feasibility.

## D. Deck structure — mapped to the case's own sections

The case has 4 numbered topics. The deck should answer them **in their order** so the panel
can follow along, but open with the reframe so we control the frame.

| # | Slide | Serves | Time |
|---|---|---|---|
| 0 | Title | — | — |
| 1 | **The reframe** — the license is done (Aug 6). The window is the asset. | context | 2m |
| 2 | **Diagnosis: 35% LDR** — the number that should be running the roadmap | context | 3m |
| 3 | **Core value proposition** — one sentence + the anchor/engine/multiplier model | 2.1.1 | 3m |
| 4 | **Bundle architecture** — what mass-market bundles actually are, tiering logic | 2.1.1 | 3m |
| 5 | **24-month sequencing** — 3 horizons, with the "why now" for each | 2.1.2 | 4m |
| 6 | **Pricing framework** — spread-not-number, relationship-not-balance | 2.1.3 | 3m |
| 7 | **The pricing decision, live** — → *prototype #1* | 2.1.3 | 3m |
| 8 | **The keystone product** — nómina: value prop + plan to win → *prototype #2* | 2.1.4 | 4m |
| 9 | **Team & org design** — how I'd staff this, and the 3 org calls I'd make | 2.1.5 | 2m |
| 10 | **Alignment without authority** — the operating contract w/ Card + GBA | 2.2 | 3m |
| 11 | **Responsible AI & personalization** — the one-line policy + the guardrails | 2.3 | 2m |
| 12 | **First 6 months: top 3** + how Mexico wins global airtime | 2.4 | 3m |
| 13 | **Assumptions & what I'd want to know on day 1** | credibility | 1m |
| A1–An | Appendix: unit economics, cohort math, risks, org chart, competitor teardown, sources | Q&A | — |

`[OPEN]` 14 slides + appendix for 30 min is ~2 min/slide. Comfortable. Confirm you want
this density vs. fewer/denser slides.

## E. The working prototype `[OPEN — main decision]`

The case says: *"including the actual trade-offs and data you'd use to make a pricing
decision, **not just the strategic principles behind it**."* That is an explicit invitation
to bring something real. Nobody else will. Two candidates:

### Option 1 — Pricing & Funding Simulator (recommended primary)
An interactive model the panel can watch you drive live:
- Inputs: headline yield (abs % or spread over CETES), Banxico path, deposit beta by
  segment, nómina attach rate, LDR ceiling, credit yield, loss rate.
- Outputs: cost of funding, NIM, deposits retained, LDR, contribution margin, and the
  **breakeven attach rate** at which nómina pays for the yield premium.
- The moment that lands: drag the yield slider down 200bps and show that at beta 0.3,
  you keep ~90% of balances and save $X — *then* show the same slider under beta 0.8 to
  prove you know where the model breaks.

Why this wins: it answers the single hardest question in the case, it is Diego's home
turf so it has to be rigorous, and it demonstrates the "analytical mindset, comfortable
making data-informed decisions on pricing" the JD asks for — by doing it, not claiming it.

### Option 2 — Cuenta Nómina switch flow (recommended secondary)
A clickable mobile flow: worker opens Nu → "trae tu nómina" → portability request →
confirmation → benefit tier unlocks. Proves the wedge is a real product, not a slide,
and shows product craft (which this panel cares about a lot).

`[OPEN]` My recommendation: **build both, lead with #1.** #1 earns the analytical
credibility; #2 earns the craft credibility. Together they cover the two halves of the JD.
Confirm, or pick one.

`[OPEN]` Prototype tech: I'd build both as a single hosted interactive page (works on any
laptop, no install, shareable link, no dependency on their wifi if we also export a PDF
fallback). Confirm that's fine vs. Figma.

## F. Positioning for *your* background

You bring consumer-fintech PM + banking/FS. That is the ideal mix for this role, with one
risk: the JD explicitly prefers "tech-driven, product-centric" over "traditional or
consulting-style." So:

- **Lead with customer and product craft; back it with balance-sheet rigor.** Never open a
  section with balance-sheet language.
- Use the FS depth where it is unfair advantage: the pricing section, the regulatory
  sequencing, the model-risk answer under CNBV supervision.
- `[OPEN]` I need 2–3 specific things you've personally shipped or decided — a pricing
  change you made, a cross-team fight you won without authority, a product you launched
  under a regulatory deadline. These become the "I've done this before" beats in sections
  2.1.3, 2.1.5 and 2.2. Without them those sections are generic.

## G. Open logistics

- `[OPEN]` **Presentation date?** Determines how much we can build and when the 24h
  send-ahead deadline lands.
- `[OPEN]` Deck output format for sending: PDF is safest. Also want .pptx to edit?
- `[OPEN]` Any Spanish-language moments? You present in English, but the product is for
  Mexican mass market — naming things in Spanish (Cuenta Nómina, "trae tu nómina") signals
  you are thinking in the customer's language. Low cost, good signal.

---

## Working agreement
This file is the spec. Everything downstream (deck, prototype) is generated from it, so
changes land here first.
