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

## The results, and how to read them

### What the effect table says (DR by count at DPTD0)

| Stage in journey | 10 days pre-due | 3 days pre-due |
|---|---|---|
| Fully diluted (ITT) | **−1.43%** · CI (−2.00, −0.90) · sig | −0.47% · CI (−1.00, 0.10) · **ns** |
| Reached counterfactual scoring | **−1.60%** · 84.5% of loans | −0.77% · 72.4% · ns |
| Offer >0 + Braze comms | **−2.25%** · 56% | **−2.31%** · 37.7% |
| …+ clicked the Growth Hub | −3.86% · 37% | −2.16% · 21.8% |

By **amount** the same reads are roughly half as large and mostly not significant at the
diluted level (−0.73% / −0.64%), turning significant only at the offer+comms stage
(−1.04% / −1.23%).

### The three things to say about it

**1. The headline — and it is a clean go.**
Exposing a committed next limit **10 days** before the due date cut default **1.43%** on an
intent-to-treat basis, significant. **3 days did not move it.** The dose–response gradient
down the funnel (−1.43 → −1.60 → −2.25 → −3.86) is what makes it read as a real mechanism
rather than noise.

**2. The subtlety — and this is the beat that shows you read your own experiment.**
*Conditional on receiving the offer, 3 days performed the same as 10* (−2.31% vs −2.25%).
Ten days won the diluted read because **more customers received an offer at all**: 56% of
loans against 38%, and 66% of scored customers against 52%.

⚠️ **Do not overclaim this as "timing didn't matter, coverage did."** Pure dilution at an
equal treated effect predicts a 0.42pp gap; you observed 0.96pp. So coverage explains
roughly **half**, and the 10-day arm also produced effect outside the offer group. The
precise version is stronger anyway — it shows you decomposed it instead of telling a clean
story.

**3. The honest one — and it is a sequencing argument, which is why it is on slide 6.**
A lightly personalised, loan-number-based policy delivered **−1.16%** against the full
causally-sound model's **−1.43%**. **About four fifths of the value came from exposing a
limit at all, not from personalising it.** For Nubank that says: ship the simple version
first, and let personalisation earn its place later. It also pairs with the count-vs-amount
gap — the benefit concentrates in smaller loans, so the money-weighted case is more modest
than the headline.

### Two things to resolve before Friday

- **The −10% "Lift Attribution to Growth Hub" row.** I have not used it anywhere, because I
  cannot tell from the sheet whether it means the share of total lift attributable to the
  hub, or a relative-lift measure. Confirm what it is before quoting it.
- **The +10% retention claim vs. this table.** This table measures *default rate*, not
  retention — they are different metrics. The deck now leads with the default result,
  because that is the number I can see with a confidence interval. If the retention figure
  comes from a separate read, keep it, but be ready to say which analysis it came from and
  whether it is relative or absolute. Getting caught unsure on that would undo the
  credibility the rest of the answer earns.

### How to state any of it
Give the number, the metric, and the confidence interval; stop there. *"Exposing the limit
ten days before the due date cut default rate 1.43% intent-to-treat, with a 95% interval of
minus two to minus nine-tenths"* is complete and defensible. Do not volunteer the baselines
it moved from.
