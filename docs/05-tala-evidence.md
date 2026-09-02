# Tala evidence — what to say, and what not to

Source: *Next Loan Limit Exposure in the Growth Hub* experiment design (v1.0.0, Jul 2025,
DS signoff Oct 2025) and the *Information Architecture, Growth Hub, and Personalized Loan
Limit Exposure* PRD (v1.0.0, Jan 2025). Caroline Morrison — Product owner, intent creation,
signoff, rollout decision.

---

## ⚠️ Confidentiality — read first

Both documents are marked **Restricted/Confidential** under Tala's Global Data
Classification and Handling Guidelines. That does not stop you describing your own work —
it stops you handing Nubank Tala's internals.

| Safe to say | **Keep out of the deck** |
|---|---|
| What you built, and why | Baseline values: the ≥83% repayment rate, ≥73.5% retention, MXN$574 CrM |
| The mechanism, in general terms | The Snowflake SQL, table names, schema |
| That timing of exposure mattered, and which way | Model architecture, feature names, imputation specifics |
| Your own outcome, at the level you'd put on a CV | The power tables, per-variant sample sizes |
| How you ran the experiment discipline | Colleague names, the PH test's exact figures |

Everything the deck now uses sits in the left column. **Nubank is a competitor to Tala in
Mexican consumer credit** — discretion here is itself a signal about how you would handle
their information later.

---

## The three things this gives you that nothing else in the case does

### 1. A shared-metric mechanism for "alignment without authority" — with receipts
Your acceptance criterion was **neutral-or-positive average monthly credit margin**. Not
your feature's engagement. Not Credit's default rate. One number sitting downstream of
Product, Credit, Data Science and Engineering at once.

That is the answer to case section 2.2, and it is *far* stronger than any framework,
because you have actually run it:

> *"You align teams that don't report to you by making them share one number that sits
> downstream of all of them. At Tala the acceptance criterion for my Growth Hub launch was
> neutral-or-positive monthly credit margin — deliberately not my own feature's metric.
> That is what stops the argument being 'my roadmap versus yours', which nobody can win on
> evidence."*

It also demonstrates the seniority the JD is screening for: you held your own launch to a
**do-no-harm** bar on someone else's P&L.

### 2. Experimentation rigor, at a level most PM candidates cannot show
Visible in the design: pre-registered MDE with an explicit power/sample-size tradeoff
(1.0% needing ~55K/arm was judged prohibitive; 1.5% at ~30K/arm chosen); guardrail metrics;
A/A validation; sample-ratio-mismatch monitoring; velocity monitoring; early-stopping-
adjusted significance; deliberate management of cross-experiment contamination (excluding
the Installments population); and a global holdout to measure the compounded effect of a
year of tests.

**Use it on the pricing section.** Slide 7 now carries an actual test design rather than a
data wishlist, and that design mirrors this practice. When they ask how you would really
make the yield call, the answer is a randomised gate test with a guardrail metric *the Card
team chooses*, and a do-no-harm acceptance criterion.

### 3. The timing insight — the most transferable finding you have
Prior evidence said exposing the full next limit at approval **reduced default but gave the
gain back through faster repayment cycles**. So the design exposed *one* personalised limit,
*only as the due date approached*, and tested 3 days against 10 days.

That generalises directly, and it is not obvious:

> **A benefit exposed too early changes behaviour in ways that destroy its own economics.**

At Nubank this applies immediately to limit exposure, and by analogy to the yield tier: when
in the customer's cycle the premium is surfaced is a design variable, not an afterthought.

---

## The mechanism, stated precisely (for Q&A)

Counterfactual limit scoring: score the customer **as if they had repaid the loan in full on
their target due date**, overriding every feature that cascades from that assumed repayment
date — including imputing a next-application timestamp from their previously observed
time-to-reapply, which then cascades into tenure-type features. The resulting limit is
exposed to the customer as a **commitment**, not a projection.

Design tension worth naming if pushed: honour the originally promised limit always
(predictability for the customer) versus allow a larger one if rescoring improves
(leverages the model harder). You proposed testing both. **That tension — promise-keeping
versus model optimisation — is exactly the tension Nubank will face on any exposed ladder,
and having already thought it through is a strong signal.**

Risk register you already worked: bust-out fraud; hard credit overrides silently breaking an
exposed promise; velocity and utilisation rules interacting with a committed limit. The
governing hypothesis was that the population splits into bust-out fraudsters, customers who
climb with intent but cannot repay the larger amount, and customers who climb and repay —
with the third group outweighing the first two.

**That is also the answer to "isn't lending to informal workers how you get a blow-up?"** —
you have already segmented that exact risk and designed around it.

---

## How to state the retention result

You mentioned **+10% retention in the hardest and riskiest segments.** State it plainly,
once, and be ready for two follow-ups:

- *"Retention measured how?"* → Your program's definition was repayment within DPD30
  combined with a repeat loan inside 14 days. Say the definition, not the baseline.
- *"Relative or absolute?"* → **Know which before you walk in.** A 10% relative lift and a
  10pp absolute lift are very different claims, and getting caught unsure would undo the
  credibility the rest of the answer earns.

Do not volunteer the baseline it moved from. "In the riskiest segments we saw a 10% lift in
retention" is a complete, defensible sentence.
