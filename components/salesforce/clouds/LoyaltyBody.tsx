import Link from "next/link";
import { SF_HUB, productPath } from "../data";
import { ProductChips, d } from "../parts";
import { Card, CloudCta, Copyright, FaqSection, Fig, Head, Kicker, Onward, Row, Screen, Sources, Tile, Tiles } from "./kit";

/** Loyalty Management: built for programmes that are a material part of how a business makes money. */
export function LoyaltyBody() {
  return (
    <>
      <section className="hero tinted">
        <div className="in">
          <div className="crumbs">
            <Link href="/services">Services</Link> / <Link href={SF_HUB}>Salesforce</Link> / Loyalty Management
          </div>
          <ProductChips current="loyalty-management" />
          <div className="hero-grid">
            <div>
              <div data-r>
                <Kicker>Retain &middot; programme infrastructure</Kicker>
              </div>
              <h1 data-r style={d(1)}>
                Not a points scheme. <em>Programme infrastructure.</em>
              </h1>
              <p className="lede" data-r style={d(2)}>
                Loyalty Management is built for programmes that are a material part of how a business makes money, with
                somebody senior accountable for them. That tells you more about what it is for than any feature
                list.
              </p>
              <div className="ctas" data-r style={d(3)}>
                <a href="#fit" className="btn pri">
                  Should you buy this at all? <span className="ar">&rarr;</span>
                </a>
              </div>
              <p className="name-note" data-r style={d(4)}>
                We lead with fit because almost nobody else does, and because an afternoon spent here saves some
                organisations a <b>three-month evaluation of a product they were never going to buy.</b>
              </p>
            </div>

            <div data-r style={d(2)}>
              <Fig caption="Our illustration of a loyalty programme's tiers. Sample data.">
                <Screen
                  app="Loyalty &middot; Island Rewards"
                  user="LM"
                  label="Illustration of a loyalty programme dashboard: tiles showing 412,000 members, 61 percent active and 11.4 million points due to expire; a tier ladder showing Bronze, Silver and Gold with the share of members in each; and a list of recent loyalty events including a tier upgrade, points expiring in fourteen days, a referral that converted and a reward redeemed in store"
                >
                  <Tiles cols={3}>
                    <Tile h="Members" k="412k" s="Across 2 programmes" tone="sf" />
                    <Tile h="Active this quarter" k="61%" s="Earned or redeemed" tone="ok" />
                    <Tile h="Points expiring" k="11.4m" s="Next 30 days" tone="wr" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Tier ladder" meta="share of members">
                      <div className="ladder">
                        <div>
                          <span className="tg">Bronze</span>
                          <span className="bar">
                            <i style={{ width: "68%" }} />
                          </span>
                          <span>68%</span>
                        </div>
                        <div>
                          <span className="tg">Silver</span>
                          <span className="bar">
                            <i style={{ width: "24%" }} />
                          </span>
                          <span>24%</span>
                        </div>
                        <div>
                          <span className="tg">Gold</span>
                          <span className="bar">
                            <i style={{ width: "8%" }} />
                          </span>
                          <span>8%</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Loyalty events" meta="these trigger journeys">
                      <Row l="P. Silva reached Gold" r="tier upgrade" pill={{ k: "ok", t: "Journey sent" }} />
                      <Row l="2,140 members &middot; points expire in 14 days" r="milestone" pill={{ k: "wr", t: "Reminder due" }} />
                      <Row l="Referral converted &middot; new member" r="referral" pill={{ k: "ok", t: "Both rewarded" }} />
                      <Row l="Voucher redeemed &middot; Kandy store" r="redemption" pill={{ k: "in", t: "Logged" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- anatomy ---------------- */}
      <section>
        <div className="in">
          <Head eyebrow="Anatomy" title="Six pieces, and the order to design them in.">
            Loyalty programmes fail on design far more often than on software. These are the six decisions, in the
            order that stops you rebuilding.
          </Head>
          <ol className="steps" data-r>
            <li>
              <div>
                <h3>The behaviour you are actually buying</h3>
                <p>
                  Not &ldquo;loyalty&rdquo;. A specific behaviour: a second visit within 30 days, a shift from one
                  category to two, a renewal before expiry. If you cannot name it, the programme will reward people
                  who were going to buy anyway, which is a discount with extra steps.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>The currency</h3>
                <p>
                  Points, a percentage, a voucher, or cash back credited to a member wallet or applied at checkout.
                  Salesforce lets currencies be denominated several ways and shared across partners. The arithmetic
                  here is a finance decision, because it creates a liability on your balance sheet.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Accrual and redemption rules</h3>
                <p>
                  What earns, at what rate, and what it is worth coming back. Both are configurable, and both should
                  be modelled against margin before anybody sees a mock-up.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Tiers, and the thresholds between them</h3>
                <p>
                  Tiered status works because of the fear of dropping, not the joy of climbing. Set thresholds where a
                  realistic member can see the next one — and decide now what happens when someone falls.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Benefits worth having</h3>
                <p>
                  Static on the Starter edition, full on Growth and above. The best benefits usually cost little and
                  signal much: early access, a dedicated line, free returns. Discount-only programmes train people to
                  wait for discounts.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>The exit</h3>
                <p>
                  Expiry rules, programme changes and how you would wind it down. Nobody designs this and everybody
                  eventually needs it, usually at the worst moment and in front of a regulator or a journalist.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------------- shapes ---------------- */}
      <section className="light">
        <div className="in">
          <Head eyebrow="Programme shapes" title="Five patterns, and what each one is good at." wide>
            Salesforce supports all of these out of the box, with point-and-click configuration and industry
            templates. Choosing between them is a commercial decision, not a technical one.
          </Head>
          <div className="caps four-up" data-r>
            <div className="cap">
              <span className="n">01</span>
              <h3>Points</h3>
              <p>Earn and burn. Flexible, universally understood, and the easiest to devalue by accident.</p>
              <div className="foot">
                <b>Good for</b> frequency
              </div>
            </div>
            <div className="cap">
              <span className="n">02</span>
              <h3>Tiered status</h3>
              <p>Recognition rather than currency. The strongest retention mechanic there is, and the cheapest to run.</p>
              <div className="foot">
                <b>Good for</b> high-value members
              </div>
            </div>
            <div className="cap">
              <span className="n">03</span>
              <h3>Spend-based cash back</h3>
              <p>A dollar value to a wallet or applied at checkout. Transparent, and the closest to a straight discount.</p>
              <div className="foot">
                <b>Good for</b> price-led categories
              </div>
            </div>
            <div className="cap">
              <span className="n">04</span>
              <h3>Visit or punch card</h3>
              <p>Count-based and immediate. Works where the purchase is small, frequent and habitual.</p>
              <div className="foot">
                <b>Good for</b> hospitality, food, services
              </div>
            </div>
          </div>
          <p className="note" data-r style={d(1)}>
            The fifth is a hybrid, which is what most real programmes become: points for frequency, tiers for the top
            decile, and a cash-back mechanic for the categories where points do not motivate. Salesforce supports
            combining them, along with gamification features — it ships a spin-the-wheel reward game — clubs and
            communities.
          </p>
        </div>
      </section>

      {/* ---------------- beyond purchases ---------------- */}
      <section>
        <div className="in">
          <div className="two wide-l">
            <div data-r>
              <Head eyebrow="The underrated part" title="Rewarding things that are not purchases.">
                This is where the interesting programme design lives, and where most organisations never go. The
                platform will reward referrals, reviews, social engagement and app activity as readily as it rewards
                spend.
              </Head>
              <p className="body-t">
                That matters because it lets you pay for behaviour you previously could not buy. A review from a real
                customer is worth more than the same budget spent on advertising. A referral arrives pre-trusted. An
                app install changes the economics of every future contact with that person.
              </p>
              <p className="body-t">
                Referral Marketing is a product in its own right here: guided setup for B2C and B2B referral
                campaigns, integration with Marketing Cloud Next, Commerce, Sales and Service, targeting to find
                high-value advocates, automatic rewards for both sides, and dashboards tracking who actually drives
                new business.
              </p>
              <div className="quote">
                <p>
                  A points programme pays people for what they already did. A well-designed programme pays them for
                  what you could not otherwise have bought.
                </p>
                <span className="by">The distinction worth holding on to during design</span>
              </div>
            </div>

            <div data-r style={d(1)}>
              <div className="caps stack" style={{ marginTop: 0 }}>
                <div className="cap">
                  <span className="n">Also sold here</span>
                  <h3>Real-Time Offer Management</h3>
                  <p>
                    Create, run and optimise promotions across their whole lifecycle, with guided setup and Agentforce
                    helping get offers out. Offers adapt to channel, engagement, browsing and purchase history, with
                    AI optimising towards a goal you set.
                  </p>
                  <div className="foot">
                    <b>Watch for</b> offers that optimise themselves into margin
                  </div>
                </div>
                <div className="cap">
                  <span className="n">Also sold here</span>
                  <h3>Referral Marketing</h3>
                  <p>
                    B2C and B2B referral campaigns with guided setup, advocate targeting from member data, automatic
                    rewards and dashboards showing member-to-member growth.
                  </p>
                  <div className="foot">
                    <b>Often the best first project</b> on this platform
                  </div>
                </div>
                <div className="cap">
                  <span className="n">Where the agents help</span>
                  <h3>Agentforce, in programme work</h3>
                  <p>
                    Streamlines programme creation, surfaces next-best-offer recommendations and tailors content per
                    channel — finding the right offer for each member rather than sending one offer to everybody.
                  </p>
                  <div className="foot">
                    <b>Needs</b> a profile worth personalising from
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- partner loyalty ---------------- */}
      <section className="light">
        <div className="in">
          <div className="two mid">
            <div data-r>
              <Head eyebrow="B2B and channel" title="The use case nobody expects, and often the best one.">
                Say &ldquo;loyalty&rdquo; and everyone pictures a consumer points card. The platform also runs partner
                programmes: onboarding partners, launching joint promotions, managing shared currencies, and handling
                channel rewards and volume rebates.
              </Head>
              <p className="body-t">
                For distributors, manufacturers and anyone selling through a channel, that last pair is the
                interesting one. Volume rebates are almost universally run in spreadsheets, calculated quarterly in
                arrears, argued about by both sides, and settled late. Nobody can see where they stand mid-quarter,
                which is precisely when the incentive would have changed behaviour.
              </p>
              <p className="body-t">
                Putting rebates on a real platform makes the position visible to the partner in the moment. That is a
                genuine commercial change, not a software upgrade — and it is a far easier business case than a
                consumer programme, because the money is already being spent.
              </p>
              <div className="linkrow" style={{ marginTop: 26 }}>
                <Link href="/services/salesforce/revenue-cloud">Where rebates meet billing &rarr;</Link>
                <Link href={productPath("data-360")}>What unifies partner data &rarr;</Link>
              </div>
            </div>
            <div data-r style={d(1)}>
              <Fig caption="Our illustration of a channel rebate position. Sample data.">
                <Screen
                  app="Partner programme &middot; Q4"
                  user="PT"
                  label="Illustration of a channel rebate screen seen by a distributor: tiles showing 212,000 rupees of rebate earned so far, 84 percent of the way to the next tier and 19 days left in the quarter; a progress list showing three product categories against their volume thresholds; and a note that reaching the next tier would add a further 48,000 rupees"
                >
                  <Tiles cols={3}>
                    <Tile h="Rebate earned" k="LKR 212k" s="Quarter to date" tone="sf" />
                    <Tile h="To next tier" k="84%" s="Of volume target" tone="wr" />
                    <Tile h="Days left" k="19" s="In quarter" />
                  </Tiles>
                  <div style={{ marginTop: 9 }}>
                    <Card title="Volume against threshold" meta="updated daily, not quarterly">
                      <div className="ladder">
                        <div>
                          <span className="tg">Category A</span>
                          <span className="bar">
                            <i style={{ width: "92%" }} />
                          </span>
                          <span>92%</span>
                        </div>
                        <div>
                          <span className="tg">Category B</span>
                          <span className="bar">
                            <i style={{ width: "78%" }} />
                          </span>
                          <span>78%</span>
                        </div>
                        <div>
                          <span className="tg">Category C</span>
                          <span className="bar">
                            <i style={{ width: "41%" }} />
                          </span>
                          <span>41%</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div style={{ marginTop: 9 }}>
                    <Card title="What the partner sees">
                      <Row l="Reaching tier 3 adds" r="LKR 48,000" pill={{ k: "ok", t: "Achievable" }} />
                      <Row l="Category C is the gap" r="620 units short" pill={{ k: "wr", t: "Act now" }} />
                    </Card>
                  </div>
                </Screen>
              </Fig>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- fit ---------------- */}
      <section id="fit">
        <div className="in">
          <Head eyebrow="Honestly" title="Should you buy this at all?">
            This question deserves a straight answer rather than a feature comparison. Here is the line we use.
          </Head>
          <div className="vs">
            <div className="good" data-r>
              <span className="lab">Buy it when</span>
              <h3>The programme is part of the business model</h3>
              <ul>
                <li>Retained revenue from members is material and measured.</li>
                <li>Somebody senior owns the programme and is judged on it.</li>
                <li>You run, or want to run, more than one programme or brand.</li>
                <li>Partners or channel rebates are in scope, not just consumers.</li>
                <li>Loyalty events run to millions a year and will keep growing.</li>
                <li>You need the programme to drive journeys in real time, not overnight.</li>
              </ul>
            </div>
            <div data-r style={d(1)}>
              <span className="lab">Build something smaller when</span>
              <h3>You need a mechanic, not a platform</h3>
              <ul>
                <li>A points ledger, tier rules and a redemption flow would cover it.</li>
                <li>Your commerce platform already has a workable loyalty module.</li>
                <li>Membership is in the thousands rather than the hundreds of thousands.</li>
                <li>Nobody has yet proved the programme changes behaviour.</li>
                <li>The honest goal this year is to test, not to scale.</li>
              </ul>
            </div>
          </div>
          <div className="callout" data-r>
            <span className="m">&rarr;</span>
            <div>
              <h3>Our actual advice</h3>
              <p>
                If you are in the right-hand column, build the minimum on the core platform or in your commerce
                system, run it for a year, and measure whether the programme moves the behaviour you named. If it
                does, the business case for this product writes itself. If it does not, you have found that out early.
              </p>
              <p>
                We will help with either, and we will tell you which one we think you are.{" "}
                <Link href="/contact">Ask us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Onward slug="loyalty-management" />
      <Copyright />
      <FaqSection slug="loyalty-management" title="What programme owners ask us." />

      <section>
        <div className="in">
          <Sources
            checked="Checked against Salesforce's own pages in November 2026. Edition limits change; confirm current details with Salesforce before building a business case on them."
            items={[
              { label: "Salesforce — Loyalty Management", href: "https://www.salesforce.com/marketing/loyalty-management/" },
            ]}
          />
        </div>
      </section>

      <CloudCta
        title="Name the behaviour you want to buy."
        body="Not loyalty — a specific behaviour, with a number against it. A second visit within thirty days. A renewal before expiry. A partner hitting a category they currently ignore. Give us that, and we will tell you whether this product is the right way to buy it, or whether something far cheaper would do."
        label="Book a programme review"
        points={[
          "The behaviour, named and measurable",
          "Loyalty events modelled against the edition ceiling",
          "Currency arithmetic checked against margin",
          "Partner and rebate use cases considered, not just consumer",
          "An honest answer on whether to buy or build",
        ]}
      />
    </>
  );
}
