# Red team — "Nu te ve" against the case prompt and JD

Audit date: 2 Sept 2026. Deck audited: `deck/strategy.html`, 12 screens.

---

## Part 1 — Coverage. This is the urgent finding.

The case asks **nine distinct things** across four numbered topics. The deck fully answers
**three**. It became a good narrative and stopped being an answer to the exam.

| # | The case asks | Deck | Where |
|---|---|---|---|
| 2.1.1a | Core value proposition | ✅ **Strong** | Screens 4–5 |
| 2.1.1b | **Mass-market *bundles* strategy** | ❌ **Absent** | the word "bundle" appears **zero times** |
| 2.1.1c | Sequence it **as Nu transitions into a licensed bank** | ❌ Near-absent | "licen" appears twice, in passing |
| 2.1.2 | Product vision + sequencing, **limit to 24 months** | ❌ **Absent** | no roadmap; "24 month" appears zero times |
| 2.1.3 | Pricing framework + **actual trade-offs and data** | ✅ **Strongest slide** | Screen 9 |
| 2.1.4 | A specific product: value prop **and plan to win** | ✅ Value prop / 🟡 plan to win | Screens 6–7, partly 10 |
| 2.1.5 | **How would you build a team? Org design decisions?** | ❌ **Absent** | "team", "hire", "org" — **zero occurrences** |
| 2.2 | **Alignment with Card, GBA and global, without authority** — with a named scenario | ❌ **Absent** | "authority" zero, no Card/GBA operating model |
| 2.3 | Data & AI for **pricing and personalisation**, responsibly | 🟡 Partial | Beto's guardrails only; the pricing-AI rule is gone |
| 2.4a | **Top 3 priorities for first 6 months**, sequenced | ❌ Absent as such | Screen 11 has *milestones*, not priorities |
| 2.4b | **Representing México in global product conversations** | ❌ **Absent** | "global" zero, "Croma" zero |

**Scored as an exam: roughly 2.5 of 9.** Four whole answers that existed in the earlier
PowerPoint were dropped in the rebuild — team/org, alignment without authority, the
24-month roadmap, and the Croma/global framing.

Two of those are the ones the case cares most about. Read the closing line of the prompt:

> *"We are looking to understand not only what you would do, but how you think, prioritize,
> and build alignment across teams and geographies that don't report to you."*

**Prioritise** and **build alignment across teams that don't report to you** are the two
things the panel says they are assessing — and they are exactly the two that are missing.
2.2 even hands you a scenario (Card's roadmap colliding with a bundle on a regulatory
clock) that goes unanswered.

The JD compounds it. Its first bullet is *"define and drive the core value proposition and
mass-market bundles strategy"* — bundles are gone. Its fifth and sixth are global alignment
and coordinating with Card/GBA — both gone.

---

## Part 2 — Claims that break under questioning

Ordered by how likely a Nu México panel is to hit them.

### 2.1 ⚠️ "Crédito de nómina economics, through data not a contract" — **overclaim**
Real *crédito de nómina* works because the **employer signs a convenio and withholds at
source**, remitting to the lender before the worker ever touches the money. Federal labour
law caps such deductions at ~30% of net salary and the mechanism is legally the employer's.

Payday-aligned autopay is **none of that**. It is a direct debit from the customer's own
account, which they can cancel, or simply drain the balance ahead of. Same *timing*, but
without the legal seniority — so **loss rates will not match true payroll lending**, and
the whole comparison to BBVA's and Banorte's moat is doing more work than it can bear.

**Fix:** claim the *timing* benefit, not the moat. "We can align collection with payday,
which captures much of the timing advantage of payroll lending without an employer
contract — but it is a debit, not a deduction, so I would expect it to land between an
unsecured personal loan and a true nómina loan, and I would size the expectation from a
test rather than assume it."

### 2.2 ⚠️ "Same price for Beto, risk in the line size" — **collides with risk-based capital**
CNBV's Circular Única requires preventive reserves driven by probability of default for
non-revolving consumer credit. A higher-PD borrower consumes **more reserves per peso**.
Same price + higher PD + higher reserves = **lower return on capital on Track B**, even
with a smaller line. Shrinking the line limits the loss; it does not equalise the return.

**Fix — and this is a better answer anyway:** "Same *rate*, not same expected return per
peso. I hold price constant deliberately and take the return hit early, because shorter
tenors, smaller principal and the progression mechanic all push PD down over the
relationship. What I would commit to is measuring risk-adjusted return by track — and if
Track B cannot reach parity within a defined window, the honest response is a smaller line
still, not a higher rate."

### 2.3 ⚠️ Nu's own personal loan carries a **CAT of ~84.8%**
The deck's entire register is *fair pricing*. A panel member who knows the rate card can
ask: "Our personal loan CAT averages 84.8%. What does 'the price their income deserves'
mean at that number?" With no answer prepared, the whole frame looks naïve.

**Fix:** get in front of it. "Mass-market unsecured credit in México is expensive because
it is priced for uncertainty. My argument is that **visibility is what makes it cheaper** —
the CAT is high partly because we are pricing what we cannot see. Track the CAT down as
income visibility rises, and make that an explicit success metric rather than a hope."
That converts a vulnerability into a north star, and it is the single best save available.

### 2.4 ⚠️ Rollee / Palenca rest on a **regulatory regime that was never built**
México's Ley Fintech (Art. 76) mandated standardised APIs for open, **aggregated** and
**transactional** data. Only the *open data* rules were ever published (2020). The
aggregated and transactional provisions are **more than 2,170 days past their statutory
deadline**, an amparo was filed against CNBV/Banxico/SHCP in January 2026, and CNBV is under
budget pressure. So the aggregators operate through credential-sharing workarounds, not a
regulated pipe — an uncomfortable dependency for a newly supervised bank.

**Fix, and it strengthens the strategy:** "The spine is **first-party**. Beto's remesa and
his deposits land inside a Nu account — that is our own data, needing no open-banking
regime that does not exist. Platform aggregation is a *third* signal I would treat as
optional and vendor-risked, not as the pipe the strategy stands on." Say this before
anyone asks; it shows you know the regulation is stalled.

### 2.5 ⚠️ A remesa is **not Beto's income** — it is someone else's generosity
Salary is a claim on the borrower's own labour. A remittance depends on a third party in
another country continuing to send it, and is exposed to US immigration and labour shocks,
and to FX. Underwriting it like salary is a category error a credit person will spot.

**Fix:** name it first. "Remittance income has a different risk shape — the payer is
offshore and correlated to US labour conditions, so the whole cohort can move together.
That argues for smaller lines, shorter tenors, and a portfolio concentration limit on
remittance-dependent borrowers — not for refusing to lend."

### 2.6 🟢 The 60% LDR target is **defensible, and you are under-selling it**
Nu's **consolidated LDR was 58.3% in Q1'26** (up from 49.1% in Q4'25). So "México 35% → 60%"
is not an invented target — **it is bringing México to where the group already runs**.
Say that. It converts your most aggressive-looking number into the most conservative one
in the deck.

### 2.7 🟡 "One line that grows, no stacking" — you cannot stop him stacking elsewhere
Nu controls its own line, not the four other lenders. And thin-file borrowers are precisely
the ones the buró sees least well. **Fix:** "I can stop us *contributing* to the stack, and
I can watch buró and inbound-obligation patterns for signs of it. I cannot prevent it."

### 2.8 🟡 The licence window rests on a competitor timeline you do not control
The whole urgency argument assumes Mercado Pago and Klar are 12+ months away. Mercado Pago
applied long ago; CNBV timing is opaque. **Fix:** state what changes if the window is six
months, not twelve — which is that H1 matters more, and H3 gets cut rather than compressed.

---

## Part 3 — What I would do, in priority order

**Before anything else — restore the four missing answers.** No amount of narrative polish
compensates for not answering 2.1.5, 2.2, 2.4a and 2.4b. All four already exist, written,
in `deck/Core_Mexico_Business_Case.pptx` and `docs/02-deck-script.md`; they need porting
into the new visual language, not rewriting.

Minimum viable fix — **three added screens**, taking the deck to 15:

| New screen | Answers | Content that already exists |
|---|---|---|
| **The bundle** — Nu vs Nu Nómina table, budget-neutral | 2.1.1b | pptx slide 5 |
| **24 months** — three horizons, licence-window ordering | 2.1.1c, 2.1.2 | pptx slide 6 |
| **The team, and getting Card and GBA to yes** — pod + three org calls + the shared-CrM operating model | **2.1.5 + 2.2** | pptx slides 12–13 |

Then **fold, not add**, for the rest:
- **2.4a** — retitle screen 11's checkpoints as *"my top three priorities, in this order"*
  and say why that order. Costs nothing; answers a numbered question.
- **2.4b** — one Croma line on the same screen: *Brazil anchors on spend, México on income
  landing; this is the instance every newly licensed market needs first.*
- **2.3** — put the one-line rule back on Beto's screen: **personalisation may only move a
  price in the customer's favour.** It is the best sentence in the whole body of work and
  it is currently nowhere.

**Also:** your name is not on the title screen.

---

## Sources
- Case prompt and JD as supplied (`assets/`)
- CNBV, *Disposiciones de carácter general aplicables a las instituciones de crédito*
  (Circular Única de Bancos) — consumer-portfolio rating and preventive reserves
- Ley Federal del Trabajo — payroll deduction limits; *convenio* requirement for descuento vía nómina
- Ley Fintech Art. 76 and Banxico API circular — open data published 2020; aggregated and
  transactional data rules still unpublished; amparo filed Jan 2026
- Nu México — Préstamo Personal Nu ($500–$70,000, 30 days–48 months, average CAT 84.8%,
  invite-only on Nu history plus buró)
- Nu Holdings Q1'26 and Q2'26 results — consolidated LDR 58.3% (Q1'26) vs 49.1% (Q4'25);
  México deposits US$5.7B
