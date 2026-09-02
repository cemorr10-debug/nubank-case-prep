# Research Brief — Nu México, as of Sept 2, 2026

All figures below are **public data**. Anything marked `[ASSUMPTION]` is inferred, not sourced.
The case explicitly asks us to separate facts from assumptions — this file is the fact base.

---

## 1. The license already happened

| Fact | Source |
|---|---|
| CNBV granted Nu México final authorization to operate as a commercial bank | July 10, 2026 |
| Nu México began operating as a full bank | **August 6, 2026** |
| Conversion path | SOFIPO → full banking institution (30-day completion window under regulation) |
| Deposit insurance change | SOFIPO ceiling ~US$12,614/person → IPAB guarantee ~US$201,000 (**~16x**) |
| Investment commitment in Mexico | US$4.2B through 2030 |

**Implication for the case:** the prompt says "as Nubank transitions into a licensed bank."
That transition is ~4 weeks old. The strategic question is not *how to prepare* — it is
*what to do with the window before competitors are licensed too*.

## 2. Where Nu México stands (Q2 2026)

> **Sourcing caveat.** The Q2 2026 figures below come from search summaries of the 13 Aug
> 2026 earnings release. `sec.gov` and `nubank.com.br` are both blocked by this
> environment's egress proxy, so the primary document could not be opened. Reproduced
> consistently across independent searches, but **verify the 35% LDR against the actual
> release or investor deck before presenting it.**

| Metric | Value |
|---|---|
| Customers (Mexico) | 15.8M at Q2; **16M as of July 2026** (~16.5% of adult population) |
| Deposits (Mexico) | **US$5.7B** — declined modestly QoQ, deliberately |
| **Loan-to-deposit ratio (Mexico)** | **35%** `[SECOND-HAND — VERIFY]` |
| Profitability | **Broke even Q1 2026** — ~2 years faster than Brazil did |
| Market position | 3rd largest financial institution in market; leading issuer of *new* credit cards |
| ARPAC (consolidated) | US$17.10, +22% YoY FX-neutral |
| ARPAC (Mexico, stage-matched) | US$12.30 vs Brazil's US$5.60 at the equivalent expansion stage (Q2 2020) |
| Consolidated cost of deposits | 88% of interbank rates, ‑3pp YoY |
| Consolidated | 139M customers; quarterly net income passed US$1B for the first time |

**The load-bearing number is the 35% LDR.** Nu México is over-funded and under-lent.

## 3. The actual rate card — VERIFIED, and it changes the case

Published rates, calculated 10 Aug 2026, in force to 7 Oct 2026:

| Product | Rate | Conditions |
|---|---|---|
| **Cajita 24/7** (default liquid savings) | **6.50%** | none. **CETES 28d is 6.49% — the base tier is already at the risk-free rate.** |
| **Cajita Turbo** | **13.00%** annual fixed | **capped at MX$25,000**; requires **≥1 card purchase per month** (credit or debit, no minimum). Immediate liquidity, daily accrual, auto-reinvested. |
| **Ahorro Congelado** (term) | 6.80% / 6.70% / 6.60% / 6.55% | by term |

All IPAB-guaranteed to 400,000 UDIs.

### Rate history
- Cajita Turbo launched at **15%**.
- Cut to **13%**, effective **5 January 2026**, cap held at MX$25,000.
- Secondary reporting describes blended deposit cost falling ~15% → ~11.5% with **>90%
  retention and continued balance growth**, against 13%+ offers elsewhere.
  `[ASSUMPTION]` the 11.5% blended figure is second-hand and may not reconcile cleanly to
  the published rate card — treat the *direction* as solid and the level as unverified.

### ⚠️ The implication that must not be missed
**Nu México already prices by tier, already caps the premium, and already gates it on a
behaviour.** Any recommendation to "cap the premium tier" or "make the premium behavioural
rather than balance-based" is describing what exists. Diego owned this product. The value
has to be in *which gate and which cap*, not in the idea of having them.

What is genuinely open:
1. **The gate is weak.** One card purchase a month proves the customer is alive, not that
   they bank with Nu. It is close to costless to satisfy and carries almost no information.
2. **The cap is flat.** MX$25,000 for everyone means an identical yield subsidy regardless
   of what relationship the customer brings.
3. **The rate is quoted as an absolute number.** "13% fija" forces Nu to *announce* every
   cut. The January 2026 cut produced exactly the predicted press: Expansión, "Nu ajusta los
   rendimientos… ganarás menos por tus ahorros"; Xataka, "Pésimas noticias para clientes Nu
   México." A spread over CETES reprices silently as Banxico moves.

### Why Nu pays for deposits at all
1. **The rate was the acquisition channel** — incumbents pay ~0–1% on savings.
2. **It was a trust premium** for a SOFIPO with ~US$12.6K of insurance. **This expired on
   6 August 2026**: IPAB now covers ~US$201K. The risk-compensation rationale is gone.
3. **SOFIPO rate competition** — Klar, Finsus, Stori.
4. **Deposits fund the credit book**, cheaper than wholesale debt — though 13% against
   CETES 6.49% is expensive funding on any measure.
5. **The design is a real product** — daily accrual, no minimum, instant liquidity.

Reasons 1 and 2 have both weakened. But further cuts have diminishing returns and a real
brand cost, so the move is to change **what the premium is attached to**, not its size.

## 3b. Product teardown — what Nu México has already built

Checked against Nu's own help pages and blog, Sept 2026.

### Credit card autopay — **yes, it exists**
| Feature | Detail |
|---|---|
| Product | *Pago automático de la Tarjeta de Crédito Nu* |
| Funding source | **Only** the Nu debit account balance |
| Timing | Customer chooses: on the **fecha de corte** (statement close) or the **fecha límite de pago** (due date) |
| Default mode | "Pago para no generar intereses" — the amount that avoids interest |
| Notifications | On payment made, **and on insufficient balance** |
| Cancellation | Any time |
| Grace period | 10 days after cut-off |
| **Due date** | **Customer-selectable** ("puedes escoger la fecha límite de pago… con la Moradita") |
| Also | External services (utilities, streaming) can be *domiciliados* to the Nu card, set up with the provider directly |

### Nu+ rewards — launched May 2025 in Mexico
| Feature | Detail |
|---|---|
| Cost | **Free.** No membership fee, no usage minimum, no lock-up |
| Earns on | Credit **and debit** card purchases — including MSI purchases |
| Headline rate | "**3% en puntos**" on credit and Garantizada cards |
| Point value | **1 point = MX$0.10**; minimum MX$33.34 purchase to earn a point |
| **Effective cashback** | **≈0.3%** — 3 points per MX$100, worth MX$0.30 |
| Redemption | Apply to card balance · transfer to debit · **move into a Cajita (where it then earns yield)** · withdraw as cash |
| Expiry / cap | None of either |

---

## 3c. ⚠️ The insight that follows — and it reframes the whole case

**The principality machine is already built. Nu just doesn't own the first link.**

```
   ??? paycheck  →  Nu account  →  autopay pulls  →  card activity satisfies  →  Nu+ points
   NOT OWNED        EXISTS         EXISTS            the Turbo yield gate       route back
                                                     EXISTS                     into a Cajita
                                                                                EXISTS
```

Every mechanism downstream of the salary exists and is live. Autopay debits the Nu account.
The Turbo gate requires monthly card activity. Points can be routed into a Cajita to earn
yield. The customer can even pick their own payment due date.

**So nómina is not a new business line. It is the missing input to a machine already
running.** That makes the ask far smaller, far more credible, and much harder to argue
against — which matters enormously for a PM with no authority over Card or Account.

### The specific product this unlocks: **payday-aligned autopay**
Nu already has autopay, and already lets the customer choose their due date. What it does
not have is **knowledge of when payday is.** Income landing supplies exactly that.

Align the debit to one or two days after the observed payday and you get:
- materially higher successful-autopay rates and lower delinquency — **Card's P&L, not mine**
- it works for Track B too: an observed remittance rhythm is a payday like any other
- it is, in effect, **crédito de nómina economics without employer deduction** — the very
  thing BBVA's and Banorte's payroll-lending moat is built on, reached through data rather
  than through a corporate contract

**This is the trade to offer the Credit Card team.** Not a vague "verified income helps
you" — a specific mechanism: *I will align your collections with their payday.*

### On the Nu+ economics — handle with care
The rewards budget is **small and undifferentiated** (~0.3% spread across all spend) while
the yield budget is **large** (13% on up to MX$25,000, roughly 6.5pp above CETES). Nu spends
far more buying deposits than buying engagement. So the lever is not more rewards spend —
it is re-pointing the yield budget, and if a rewards lever is wanted, **multiplying points
when income lands** is cheap and targeted where raising the base rate is neither.

`[JUDGEMENT CALL]` "3% en puntos" reads as 3% and pays 0.3%. In a price-sensitive mass
market that does the arithmetic, that gap costs trust — and Nubank's stated mission is
fighting complexity. **Do not put this on a slide.** If it comes up, raise it as a question
worth testing, never as an accusation.

## 3d. Cross-market comparison — Brazil vs México

### Nubank Croma — **Brazil, not México.** Launched 28 July 2026.
Confirming tells: quoted against **CDI**; priced in **R$**; LATAM Pass / Azul / Smiles;
*Caixinha* (Portuguese) not *Cajita*; NuCel and NuTag are Brazilian products.

| | Detail |
|---|---|
| Position | New mid-tier **between standard Nubank and Ultravioleta** (the high-income segment) |
| Target | "Média renda" — customers earning **from R$5,000/month** |
| Card | Mastercard Platinum · **0.8% cashback** on all credit purchases, or 1.4 points per dollar |
| Streaming | **5% cashback** across 28 subscription services (Netflix, Spotify, Disney+, Uber One, iFood…) |
| Savings | **Caixinha Turbo Croma at 120% of CDI**, immediate liquidity, **capped at R$10,000** |
| Investments | CDB Croma at 130% of CDI for new investors |
| Non-financial | NuCel 10GB free for 6 months · NuTag with no monthly fee · 80% of HBO Max · ChatGPT Go free for 6 months |
| Price | R$39/month, waivable |

### ⚠️ Three things this comparison hands the case

**1. The spread-quoting recommendation is the group convention — México is the outlier.**

| | Brazil (Caixinha Turbo Croma) | México (Cajita Turbo) |
|---|---|---|
| Rate | **120% of CDI** — quoted *relative* | **13.00% fija** — quoted *absolute* |
| Cap | R$10,000 (~US$1,850) | MX$25,000 (~US$1,350) |
| Gate | Segment membership (fee/income) | One card purchase a month |

Same architecture, same capped-box pattern, **different quoting convention**. So "quote a
spread, not a number" is not an idea being imported from outside — it is what Brazil already
does. That reframes the recommendation from *my proposal* to *an alignment gap with group
practice*, which is far easier to carry in a global forum.

It also means **changing the gate is choosing among patterns the group already uses**, not
inventing one. Brazil gates on segment; México gates on activity. Neither is a law.

**2. Croma is the concrete instance of "local priorities don't align with the global roadmap."**
It is an **upmarket, spend-monetised** bundle: platinum card, streaming cashback,
subscriptions, telco. Good architecture — but a customer with small, irregular spend and no
subscriptions cannot be monetised through it. México's mass market needs the same
architecture anchored on **income landing** rather than on spend.

The winning framing for section 2.4 is therefore not "México is different" but: *Croma is
the affluent-tier instance of a bundle pattern; here is the mass-market instance, and every
market Nu licenses next will need the mass-market one first.*

**3. The non-financial component in México is not Netflix — it is recargas.**
Croma bundles NuCel, HBO Max and ChatGPT. The mass-market Mexican equivalent is prepaid
mobile top-ups — and **Cuenta Nu has processed recargas from 30+ carriers since Nov 2024**.
The rail already exists; it is simply not part of a bundle or a reward structure yet.
Another instance of the "the loop is already built" pattern.

Cashback context: Croma pays **0.8%** on general spend in a paid tier; Nu+ in México pays
**~0.3%** effective in a free one.

---

## 3e. Cuenta Nu's launch — the best evidence that the base was not bought with rate

| | |
|---|---|
| Public launch | **4 May 2023** |
| Launch yield | **9% per year**, 24/7 liquidity, no minimum balance, no maintenance fee |
| Banxico policy rate at the time | **11.25%** (raised there March 2023, then held) |

**Nu México acquired its first wave of savers at a yield roughly 2.25pp *below* the
risk-free rate.** The proposition was liquidity, no minimums, no fees and the app — not the
rate. The rate arms race came afterwards.

This is the strongest available argument that balance sensitivity is structurally low and
that repricing is safe, and it is Nu's own history rather than an assumption. It sits on
slide 7 for exactly that reason.

`[VERIFY]` Launch date and 9% figure are from the Nu México launch announcement, May 2023;
the 11.25% policy rate from Banxico's March 2023 decision. Both third-party-reported.

---

## 4. Rate environment (falling)

| Rate | Level |
|---|---|
| Banxico target rate | **6.50%** (Sept 2026), with minutes hinting at further cuts |
| CETES 28d | 6.49% (auction Sept 1, 2026) |
| CETES 91d / 182d / 350d | 6.54% / 6.69% / 7.00% |

**Implication:** a *nominal* 11.5% yield is ~5pp over CETES. As Banxico cuts, an absolute
headline rate becomes progressively more expensive in spread terms. Repricing the promise
as a **spread over CETES/TIIE** rather than a fixed number lets funding cost fall
automatically without a "Nu cut your rate" news cycle.

## 5. The payroll (nómina) opportunity

| Fact | Value |
|---|---|
| Mexican adults holding a payroll account | **~36%** |
| Share of those sitting with the largest banks | **~90%** |
| IMSS-registered formal jobs | **22.76M** (record, July 2026) |
| Formal employment rate | 44.6% |
| **Informal work rate** | **55.1%** of workforce = **33.1M people** (Q2 2026, +495K YoY) |

### Portabilidad de nómina — the wedge
- It is the **worker's right**, not the employer's decision.
- Banks **cannot charge** for it — legally free.
- Transfer begins within **11 business days** of the request.
- Cancellation effective on the 3rd business day.
- Backed by CONDUSEF and Banxico rules.

**Implication:** the incumbent moat on nómina is the corporate/HR relationship.
Portability routes around it entirely with a consumer-pull motion — Nu's native play.

### What the bank license specifically unlocks
Payroll account hosting (a SOFIPO generally cannot host payroll for most employers),
higher deposit limits, IPAB-level insurance, payroll portability, investments incl.
Mexican-exchange equities, higher-value auto and mortgage lending, SME products.

**A payroll account anchors the whole relationship** — loans, insurance, investments.

## 6. Competitive window

| Player | License status |
|---|---|
| **Nu México** | **Full bank, live Aug 6 2026** |
| Stori | Operating as a bank since 2023 |
| Revolut | Operating as a bank since 2024 |
| Mercado Pago | Applied; CNBV moving cautiously, limited timing visibility |
| Klar | SOFIPO, seeking a license |
| Finsus, Konfío, Bunq | Seeking / awaiting |

Incumbent concentration: ~7 banks ≈ 80% of the market. BBVA México ~26.7% share and
explicitly strong in **credit cards and payroll loans**. BBVA, Banorte, Santander
together >50% of net income.

`[ASSUMPTION]` Mercado Pago is the most dangerous of the pending licensees given its
merchant network and payments volume — treat its authorization as the clock on the window.

## 7. Financial inclusion base rates (ENIF 2024, INEGI + CNBV)

| Metric | Value |
|---|---|
| Adults 18–70 with ≥1 formal financial product | 76.5% (+8.1pp vs 2015) |
| With a formal savings account | 63% (+18.9pp vs 2015) |
| Save informally | 58% — still the most-used mechanism |
| Save **only** informally | 36.6% |
| Formal savings penetration | 30% |
| **With access to formal credit** | **37.3%** (men 28.2% / women 18.3% — note gap) |
| Formal product ownership, gender | Men 80.9% / Women 72.8% |
| Savings account, gender | Men 68% / Women 58.6% |

## 8. Remittances — the informal-income anchor

- H1 2026 inflows: **US$30.76B**, +3.1% YoY
- June 2026 alone: US$5.47B, of which US$5.43B by wire transfer

**Implication:** for the 33.1M informal workers, remittances + gig payouts + recurring
deposits are the functional equivalent of a paycheck. A "nómina-grade" benefit tier
earned by *behavior* rather than *employment status* is the inclusion-aligned answer.

## 9. The room

| Person | Note |
|---|---|
| **Diego Sierra (Huertas)** — hiring manager | Director of Product @ Nubank; previously Senior Product Lead, **Bank Account Core Experience** / savings account product. Ex-Google, Microsoft, Kidaptive; Stanford MS (Learning, Design & Technology); research background at Stanford. |
| Oscar Vargas | `[ASSUMPTION]` not yet researched |
| Amanda Legge | `[ASSUMPTION]` not yet researched |
| Ana Acosta | `[ASSUMPTION]` not yet researched |
| Julia Bragança / João Avelino (Juca) | `[ASSUMPTION]` global stakeholders — likely the "global alignment" test |
| Armando Herrera | CEO of Nu México (appointed 2025), fintech veteran |

**Coaching note:** Diego owned the savings/bank-account core product. **The yield question
is his home turf.** Do not explain Cuenta Nu back to him. Bring the funding-cost math and
the nómina wedge he has not already run.

---

## Sources
- https://international.nubank.com.br/company/nu-mexico-receives-authorization-to-begin-operations-as-a-bank/
- https://www.crowdfundinsider.com/2026/07/291252-nubank-subsidiary-nu-mexico-obtains-authorization-to-start-operations-as-licensed-bank/
- https://mexicobusiness.news/finance/news/nu-mexico-receives-full-banking-license-cnbv-shcp
- https://www.businesswire.com/news/home/20260813187996/en/Nu-Holdings-Ltd.-Reports-Second-Quarter-2026-Financial-Results
- https://www.sec.gov/Archives/edgar/data/0001691493/000129281426004222/nupr2q26_6k.htm
- https://www.techtimes.com/articles/321799/20260728/nu-mexico-converts-full-bank-august-6-deposit-insurance-jumps-sixteenfold.htm
- https://www.riotimesonline.com/nu-mexico-full-bank-launch-2026/
- https://www.fool.com/investing/2026/08/17/is-nu-holdings-mexico-business-finally-carrying-it/
- https://cadenapolitica.com/2026/09/02/cetes-estas-son-las-tasas-de-rendimiento-en-septiembre-de-2026/
- https://www.condusef.gob.mx/?p=contenido&idc=937&idcat=1
- https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2025/enif/ENIF2024_RR.pdf
- https://www.gob.mx/cnbv/articulos/cnbv-y-el-inegi-presentan-los-resultados-de-la-encuesta-nacional-de-inclusion-financiera-2024
- https://ggnorth.com/2026/08/mexicos-informal-work-rate-hits-55-1-in-q2-2026/
- https://mexicobusiness.news/talent/news/mexico-achieves-446-formal-employment-job-growth-slows
- https://www.economia.gob.mx/datamexico/en/profile/geo/mexico
- https://mexicobusiness.news/finance/news/mexico-fintechs-seek-banking-licenses-cut-costs-boost-growth
- https://www.bbva.com/en/economy-and-finance/bbva-outlines-its-roadmap-for-mexico-through-2029-focused-on-growth-and-transformation/
