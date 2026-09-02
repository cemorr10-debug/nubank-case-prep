# Requirements Spec — v0 (for collaboration)

**Deliverables:** (1) a slide deck, (2) a working prototype.
**Constraint:** 30 min present + 30 min Q&A. English. Send to Luciana Tavares 24h prior.
**Audience:** Diego Sierra (HM, ex Bank Account Core Experience), Oscar Vargas,
Amanda Legge, Ana Acosta, + Julia Bragança or João Avelino (Juca) — likely global.

> `[OPEN]` = still needed from you · `[LOCKED]` = decided · `[ASSUMPTION]` = stated, not sourced

---

## A. The one-sentence thesis  `[LOCKED v1]`

> **Nu México is not deposit-constrained. It is constrained by how much income it can
> *see*. The bank license doesn't just let us hold payroll — it lets us observe income.
> Observed income is what turns a 35% loan-to-deposit ratio into a 60% one.**

Corollary: *become the place income lands, and you earn the right to lend.*

Everything in the deck ladders to this. If a slide doesn't serve it, it goes to appendix.

### Why this framing and not "we're overpaying for deposits"
The simpler "negative carry" version is **wrong and Diego would catch it**. The honest math:

| | At today's 35% LDR | At 60% LDR |
|---|---|---|
| Marginal asset yield `(LDR × credit yield) + (1−LDR × CETES)` | 0.35×25% + 0.65×6.49% = **12.97%** | 0.60×25% + 0.40×6.49% = **17.60%** |
| Cost of that peso | 11.50% | 11.50% |
| **Marginal spread** | **~1.5pp** | **~6.1pp** |

`[ASSUMPTION]` 25% net credit yield; must be a live slider in the simulator so the panel
can push back and watch the conclusion hold or break.

The peso isn't unprofitable — it earns **a quarter of what it should**. That's a
deployment problem, not a pricing problem. Which is a far more interesting case answer,
and it reframes pricing, product, and AI as one problem instead of three.

## B. Three proof points the whole case rests on

1. **35% LDR** — the marginal yield-bought peso earns ~1.5pp of spread instead of ~6pp.
   Deposits are not the constraint; underwritable, observable income is.
2. **Deposit beta << 1** — the 15%→11.5% cut held >90% retention *with balance growth*,
   against 13%+ offers elsewhere. Rate is not what is holding the base. Something else is
   — and knowing what would be my first question on day 1.
3. **Portabilidad de nómina** — worker-initiated, legally free, 11 business days. The
   incumbent nómina moat is an HR relationship; portability routes around it with
   consumer pull. This is the license's one non-copyable asset until MP/Klar are licensed.

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

**`[LOCKED]` Track B is a co-equal pillar, not a Phase-2 extension.**

Rationale: a formal-only strategy addresses 44.6% of workers and reads as a conventional
banking play from a company whose mission is financial inclusion. More importantly, the
thesis is *observed income* — and for 33.1M informal workers, income must be **inferred
from behavior** rather than read off a payslip. That is the same capability, applied to a
different signal, and it is where the candidate's Tala experience is direct evidence
rather than assertion.

The two tracks share one underwriting spine:

```
        OBSERVED INCOME  →  benefit tier + credit line
       ┌──────────────┴──────────────┐
   Track A: payslip           Track B: inferred
   (22.76M formal,            (33.1M informal — remesas $30.8B H1,
    won via portabilidad)      gig payouts, recurring deposit rhythm)
```

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

### Option 3 — Informal income capture flow `[ADDED — locked in]`
The Track B counterpart: how Nu establishes an income signal for someone with no payslip.
Shows the consent moment, the signals used, and what the customer gets back for sharing.
This is where the Tala experience becomes visible product thinking rather than a CV line.

**`[LOCKED]` Build all three, as ONE hosted page with three tabs.** One link to send, one
thing to demo, and the tabs mirror the deck's own structure. Simulator leads (analytical
credibility), the two flows follow (craft credibility + the inclusion half).

**`[LOCKED]` Tech:** single self-contained hosted page. Works on any laptop, no install,
shareable link. PDF screenshots go in the deck appendix as an offline fallback in case
the room's wifi fails.

## F. Positioning for *your* background

You bring consumer-fintech PM + banking/FS. That is the ideal mix for this role, with one
risk: the JD explicitly prefers "tech-driven, product-centric" over "traditional or
consulting-style." So:

- **Lead with customer and product craft; back it with balance-sheet rigor.** Never open a
  section with balance-sheet language.
- Use the FS depth where it is unfair advantage: the pricing section, the regulatory
  sequencing, the model-risk answer under CNBV supervision.
- **Tala is the unfair advantage.** Inferring income for thin-file, informal-economy
  customers from behavioural data is exactly Track B. No other candidate will have shipped
  this. It should appear as *evidence*, not biography — one line in the Track B slide
  ("I've built this underwriting spine before, at Tala, for exactly this customer") and
  then let the product thinking carry it.
- `[PENDING]` Candidate sending Tala materials — fold into Track B slide + AI/fairness
  section (2.3) where alternative-data fairness is a real, lived problem, not a hypothetical.
- `[OPEN]` Still want 2 more specifics: a cross-team fight won without authority (for 2.2),
  and a launch under a regulatory deadline (for 2.1.2 sequencing). Without them those
  sections stay generic.

## G. Logistics  `[LOCKED]`

| | |
|---|---|
| **Presentation** | **Friday Sept 4, 8:00 AM** |
| **Send to Luciana** | **Thursday Sept 3, 8:00 AM** (24h prior) |
| Today | Wednesday Sept 2 — **~16 hours to the send deadline** |

### Build order under time pressure
1. **Prototype** (3-tab hosted page) — differentiator, and it forces the numbers to be real
2. **Deck** — the mandatory send-ahead deliverable
3. **Q&A drill sheet** — not sent; for Thursday/Friday rehearsal
4. Appendix depth — last, cut freely if time runs out

- Deck ships as **PDF** (safe to send) **+ .pptx** (editable).
- Spanish naming throughout the product layer (Cuenta Nómina, "Trae tu nómina") while
  presenting in English — signals thinking in the customer's language at near-zero cost.

---

## Working agreement
This file is the spec. Everything downstream (deck, prototype) is generated from it, so
changes land here first.
