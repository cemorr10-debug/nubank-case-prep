# Glossary — every term used in this case

Grouped by how much you need it. **Tier 1** you must be able to define in one sentence
without hesitating. **Tier 2** you should recognise instantly. **Tier 3** is background.

---

## Tier 1 — the mechanics your case is built on

| Term | Definition | Why it's in your case |
|---|---|---|
| **LDR** — loan-to-deposit ratio | Loans ÷ deposits. 35% = for every 100 pesos deposited, 35 are lent out. | **The load-bearing number.** Nu México is at 35%; retail banks typically run far higher. |
| **Cost of funds** *(cost of deposits)* | What the bank **pays** to hold customer money, as an annual %. | Nu's headline is ~11.5%. "88% of interbank rates" = blended deposit cost is 88% of the benchmark. |
| **Asset yield** | What the bank **earns** on that money — loan interest plus interest on cash parked in CETES. | At 35% LDR it's mostly CETES, which is why it's low. |
| **Spread** *(margin)* | Asset yield − cost of funds. The bank's gross profit on money. | Every number in the simulator is this one subtraction. |
| **Marginal** | "The next one," not the average. | Averages hide that the existing book is fine while every *new* deposit barely pays. That is exactly Nu México's position. |
| **NII** — net interest income | Interest earned − interest paid, in currency. Roughly spread × balance. | The simulator's dollar output. |
| **NIM** — net interest margin | NII as a % of interest-earning assets. | The efficiency version of NII. Not used directly, but they will. |
| **pp / bps** | A **percentage point** is the arithmetic gap: 5%→6% is +1pp (but +20%). A **basis point** is 0.01pp; 100bps = 1pp. | Say "pp" or you will be misheard. |
| **Balance sensitivity (β)** | How many balances **leave** per 1pp of rate cut. An outflow elasticity. | The simulator's β. **Not the same as deposit beta — see below.** |
| **Deposit beta** ⚠️ | The *standard* banking term: how much of a **market** rate change a bank passes through to depositors. Banxico cuts 100bps, you cut savings 40bps → beta 0.4. A pricing pass-through measure. | **Different concept.** Distinguish them out loud — there are pricing specialists in the room. |
| **ARPAC** | Average Revenue Per Active Customer. Nubank's own headline metric. | US$17.10 consolidated, Q2 2026. |
| **Attach rate** | Share of customers who have a given product or behaviour. | "Income visibility attach" = share whose income lands at Nu. |

## Tier 2 — Mexican institutions and acronyms

| Term | What it is |
|---|---|
| **Banxico** | Banco de México — the central bank. Sets the target rate (6.50%). |
| **CNBV** | Comisión Nacional Bancaria y de Valores — the banking supervisor. **Grants the licence.** |
| **SHCP** | Secretaría de Hacienda y Crédito Público — the finance ministry. Co-signs licences. |
| **CONDUSEF** | The consumer financial protection body. Handles complaints and requires that decisions be explainable to customers. **This is who your "responsible AI" answer has to satisfy.** |
| **IPAB** | Instituto para la Protección al Ahorro Bancario — deposit insurance. ~US$201,000 per person per bank. |
| **SOFIPO** | Sociedad Financiera Popular — a limited licence. Takes deposits, low insurance cap (~US$12.6K), and **generally cannot host payroll.** Nu's status until August 2026. |
| **IFPE** | Institución de Fondos de Pago Electrónico — an e-money/wallet licence. Holds balances but **cannot lend from them.** Mercado Pago's original licence, and why it wants a bank one. |
| **CETES** | Certificados de la Tesorería — Mexican government T-bills. 28-day at 6.49%. Where idle deposits get parked. Retail can buy them directly, so they're also a **competitor** for savings. |
| **TIIE** | Tasa de Interés Interbancaria de Equilibrio — the interbank reference rate. The natural benchmark to quote a spread against. |
| **SPEI** | Banxico's real-time interbank transfer rail (Mexico's equivalent of Pix). How salary actually moves. |
| **CLABE** | The standardised 18-digit account number SPEI transfers address. What portability changes. |
| **IMSS** | Social security institute. Registration = formal employment. 22.76M jobs, July 2026. |
| **INEGI** | The national statistics institute. Runs ENIF and ENOE. |
| **ENIF** | Encuesta Nacional de Inclusión Financiera — the financial inclusion survey. Source of the 37.3% formal-credit-access figure. |
| **ENOE** | Encuesta Nacional de Ocupación y Empleo — the employment survey. Source of **55.1% informality**. |

## Tier 2 — product and market terms

| Term | What it is |
|---|---|
| **Nómina** | Payroll. A *cuenta de nómina* is the account a salary is deposited into. |
| **Portabilidad de nómina** | Payroll portability — the worker's legal right to redirect their salary to a bank of their choice. Free, 11 business days, no employer consent needed. **Your wedge.** |
| **Crédito de nómina** | A payroll loan, repaid by deduction from salary. Very low risk, and a major profit centre for BBVA and Banorte. Your H3. |
| **Remesas** | Remittances. US$30.76B in H1 2026 — the income signal for informal workers. |
| **Mass market** | The broad, price-sensitive majority segment — as opposed to affluent or premium. |
| **Principality** | Being the customer's *main* bank rather than a secondary one. What income landing buys you. |
| **Yield** (in this deck) | The interest rate paid **to customers** on deposits. Note the ambiguity — "yield" elsewhere means what the bank earns. Say which you mean. |
| **Bundle** | A packaged set of products and benefits sold as a single tier. |
| **Deposit optimisation** | Deliberately cutting deposit cost, or shrinking excess deposits, to improve funding economics. **Nu is doing this now** — it's in the Q2 release. |
| **Cost to serve** | Operating cost per customer. Nubank's structural advantage. |

## Tier 3 — analytics and risk method

| Term | What it is |
|---|---|
| **Underwriting** | Deciding whether to lend, how much, and at what price. |
| **Thin file** | A customer with little or no credit-bureau history. Hard to underwrite conventionally — most of Track B. |
| **Expected loss** | The share of a loan book you expect not to be repaid. |
| **Risk-adjusted yield** | Interest earned **after** subtracting expected losses. The 25% in the model is this. |
| **Elasticity** | How much quantity responds to a price change. |
| **Holdout test** | Deliberately withholding a change from a random or geographic subset, so the difference measures true causal effect rather than correlation. **How you'd actually measure balance sensitivity.** |
| **LTV** | Lifetime value — total expected profit from a customer over the relationship. |
| **Deposit runoff / attrition** | Balances leaving. |
| **Champion / challenger** | Running the current production model against a candidate on live traffic to compare them. |
| **Model risk management** | The governance a supervised bank must apply to models: validation, documentation, monitoring, independent review. **Newly applies to Nu now that it's a bank.** |
| **Disparate outcome** | When a model produces systematically worse results for a protected group even without using that attribute — usually via proxies. The reason the exclusion list exists. |
| **Proxy variable** | A feature that stands in for something you're not allowed to use. Postcode → income → often ethnicity. |

---

## Three ambiguities to say precisely

1. **"Yield"** — you pay it to customers; the bank *earns* an asset yield. Different directions.
2. **"Beta"** — pass-through (standard) vs. balance outflow (your model). Name which.
3. **"Percent" vs "percentage point"** — 11.5% → 8% is a 3.5pp cut, and a 30% cut. Both true, wildly different-sounding.
