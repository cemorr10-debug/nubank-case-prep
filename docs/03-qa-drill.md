# Q&A Drill — the 30 minutes after the deck

Ordered by *likelihood × damage*. For each: the real question under the question, then the
answer. Read the "under the question" column — panels rarely ask what they mean.

---

## Tier 1 — near-certain, and they decide the outcome

### Q1. "Where did 25% net credit yield come from?" *(Diego or Oscar, within 2 minutes)*
**Under it:** did you make the number up to make the story work?
**Answer:** "It's mine, not yours — I flagged it as an assumption. It's a placeholder for
risk-adjusted yield after expected losses on a mass-market book. I deliberately made it a
slider rather than defending it, because **the conclusion shouldn't depend on it.** Take it to
15% — the marginal spread goes negative today and *still* improves with income visibility.
Take it to 35% — the gap between 35% and 60% LDR gets wider, not narrower. The direction is
robust; the magnitude is yours to correct."
**Do:** open the simulator and move it. Don't argue the number verbally.

### Q2. "You're assuming income visibility drives LDR. Prove the causality." *(the killer)*
**Under it:** is this a real mechanism or a correlation you dressed up?
**Answer:** "Fair — that arrow is the load-bearing assumption in the whole case, and I can't
prove it from outside. Here's the mechanism I'd defend: underwriting a thin-file mass-market
customer is bounded by income uncertainty, not by capital or by funding. A verified recurring
inbound collapses that uncertainty, which is what lets you extend a line you'd otherwise
decline. **It's the same reason your credit card book underwrites better on customers who
also hold the account.** But I'd want to test it before I'd spend on it: take customers who
*already* have income landing at Nu today and compare their approvable line to a matched
cohort without it. If that gap is small, my case is wrong and I'd want to know in month one,
not month twelve."
**This is the single best answer in the pack. Rehearse it until it's fluent.**

### Q3. "We've already run the deposit optimisation. What's actually new here?"
**Under it:** are you telling us things we did last quarter?
**Answer:** "You have, and it worked — that's why I used your own result as the model's
calibration rather than inventing one. What I'd add is three things you can't see from the
outside but I'd bet aren't all in place: **balance sensitivity by segment rather than blended**, the yield
quoted as a *spread* so it reprices itself as Banxico cuts, and the premium attached to
income landing rather than balance size. The first is measurement, the second is
communication, the third is the actual strategy change. And the honest framing is that
optimisation has a floor — you can only cut the rate so far. Income visibility doesn't."

### Q4. "Portability sounds easy on a slide. Why hasn't anyone won this way?"
**Under it:** what's the operational reality you're hand-waving?
**Answer:** "Because the incumbents have no reason to make it work, and the challengers
weren't allowed to host payroll until now. The real friction isn't legal, it's three things:
the 11-business-day gap, which is where I'd expect the funnel to leak hardest — that's why
the tracking screen is in the prototype rather than being polish; employer payroll providers
that route around the CLABE; and customers who fear their employer will find out, which is a
copy and trust problem more than a product one. I'd size the leak before scaling spend:
**run it on the cohort we can already detect, and measure completed landings, not requests.**"

### Q5. "How is this not just Brazil's playbook copy-pasted?"
**Under it:** will you be a local leader or a global relay?
**Answer:** "Brazil's playbook was card-first into an underbanked market with a broken
incumbent experience. Mexico is structurally different in two ways that change the answer:
**55% informality**, which Brazil didn't face at this scale, and a **payroll system where
portability is a legal right** — Brazil had no equivalent wedge. Track B in particular isn't
a Brazil import; it's a Mexico-specific answer to a Mexico-specific fact. What I *would*
import is the discipline about cost to serve, and the refusal to compete on rate."

---

## Tier 2 — likely, and they test judgement

### Q6. "You'd deprioritise credit card? That's the profit engine."
**Answer:** "No — I'd feed it. Card is the highest-yield place to deploy, which means the
income spine makes Card's book better: better approval rates on thin files, higher limits
with less loss. I'm not asking Card to slow down, I'm bringing them an input they can't get
elsewhere. If I ever find myself arguing for roadmap priority against Card, I've already
made a mistake in how I framed the ask."

### Q7. "Isn't lending to informal workers exactly how you get a credit blow-up?"
**Answer:** "It's how you get one if you substitute enthusiasm for underwriting. The
discipline is that Track B is a *different proof of the same standard*, not a lower standard
— the line is sized on observed income with a confidence measure attached, and low confidence
means a smaller line, not a higher price. I'd also stage it: small lines, short tenors, fast
feedback, and expand on demonstrated repayment rather than on model score. The failure mode
I'd watch is over-extending on a customer whose income rhythm looked stable for eleven months
and then stopped — which is why the estimator has to be continuously refreshed, not
underwritten once."

### Q8. "What if Mercado Pago gets licensed in six months instead of eighteen?"
**Answer:** "Then H1 matters more and H3 matters less, and I'd cut H3 rather than compress
H1. The sequencing principle survives the shock: do the non-copyable thing first. What
*would* change is the employer-side motion in H3 — if the window is short, I'd rather have
300,000 completed salary landings than a signed employer pipeline, because the landings are
already sticky and the pipeline isn't."

### Q9. "You have no formal authority here. What do you do when Card just says no?"
**Answer:** "Then I take the smaller ask and ship without them. Blocking to win an argument
is the most expensive thing I could do in my first six months — it costs the launch *and* the
relationship. What I'd have done beforehand is make it hard to be a flat no: shared P&L so
we're arguing about the customer rather than about roadmaps, a trade with a number on it, and
a pre-agreed escalation path with Diego so escalation is a process we both signed up to
rather than me going over someone's head."

### Q10. "How would you use AI here, concretely — not in principle?"
**Answer:** "Three places, in order of how comfortable I am with them. **Income estimation**
from transaction rhythm for Track B — highest value, and it's the one that needs the
strongest governance. **Timing and targeting** — who to offer portability to and when, which
is low-risk because the offer is the same for everyone. And **service** — resolving the
'where is my salary' question during the 11-day gap, which is a large volume of an
emotionally loaded contact. Where I would *not* use it is setting the price per customer.
That's the one-line rule: personalisation can only move a price in the customer's favour."

### Q11. "What's your biggest risk?"
**Answer:** "That balance sensitivity isn't as low as the historical result suggests, because it was measured
in a market where no licensed competitor was advertising against you. The retention through
the 15-to-11.5 cut might have been brand, or it might have been the absence of a credible
alternative — and Klar and Mercado Pago getting licensed changes which of those it was. If
it turns out to have been the absence of an alternative, the funding cost story gets much
harder and the income anchor becomes urgent rather than merely valuable."

### Q12. "Why should a Mexican customer trust you with their salary?"
**Answer:** "Four weeks ago the honest answer was weaker. Today it's IPAB — the same federal
guarantee as BBVA, up from a SOFIPO limit that was about one-sixteenth of it. For someone
parking a full month of salary that's not a marketing point, it's the whole decision, and I'd
put it in the portability flow rather than in a campaign."

---

## Tier 3 — global-stakeholder questions (Julia / Juca)

### Q13. "How do you handle it when the global roadmap doesn't have room for Mexico?"
**Answer:** "First, I'd check whether my ask is actually local. Most 'local needs' are a
global capability with a local first customer, and the ones that aren't usually shouldn't be
built. If it genuinely is local, I'd bring the size of the thing — not the urgency — and take
the no cleanly if the answer is no. What I'd never do is build a shadow local version, which
is how a platform ends up with three implementations of the same thing and no owner."

### Q14. "What would you want from global that you can't build locally?"
**Answer:** "The income-observation spine is the obvious candidate to build *once*. Mexico
should be the first customer, not the owner — every market Nu enters next will land licensed,
with a low LDR and no income visibility, which is exactly this problem. I'd rather spend my
credibility arguing that Mexico goes first than arguing that Mexico gets its own."

---

## Landmines — do not step on these

| Don't | Because |
|---|---|
| Explain Cuenta Nu's yield mechanics to Diego | He owned the Bank Account Core Experience. It's his product. |
| Say "you're overpaying for deposits" | Too strong and wrong — the marginal peso earns ~1.5pp, not negative. Say *underearning*. |
| Present the licence reframe as a gotcha | Make the point in 60 seconds, warmly, and move on. |
| Lead any section with balance-sheet language | The JD explicitly prefers product-centric over traditional. Lead with the customer. |
| Defend an assumption verbally | Move the slider instead. Every time. |
| Claim the informal track is easy | It's the hardest thing in the deck. Saying so is what makes the rest credible. |
| Over-index on Tala | One line, as evidence. It's a credential, not the argument. |

## If you're running long
Cut in this order: slide 12 (org) to 60 seconds → slide 6 (sequencing) to the ordering
principle plus the H1 bullets → slide 5 (bundles) to the table with no commentary.
**Never cut:** slide 3 (diagnosis), slide 8 (live demo), slide 11 (the AI rule).
