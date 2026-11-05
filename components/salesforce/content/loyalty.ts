import type { ProductContent } from "../content-types";

// Loyalty Management. Sources: Salesforce's Loyalty, Offers and Referrals page, and the Loyalty Management pages of
// Salesforce Help ("Loyalty Management" and "Set Up Loyalty Processes"). Read in November 2026. Salesforce publishes no
// editions or prices on the product page, so none appear here.

export const loyalty: ProductContent = {
  slug: "loyalty-management",
  crumb: "Loyalty Management",
  eyebrow: "Loyalty Management",
  title: ["Programmes, offers and referrals", "that keep customers coming back."],
  lede: "Loyalty Management lets you create and run loyalty programmes, track members' activity and reward them with points or vouchers. Salesforce presents it with personalised offers and referral marketing as three connected capabilities, for consumers and for business partners.",
  primary: { label: "See how a programme works", href: "#explore" },
  secondary: { label: "How to start", href: "#start" },
  note: "On Salesforce's site Loyalty sits under Marketing. It runs on the Salesforce platform and works with Marketing Cloud.",
  hero: {
    app: "Loyalty · Member",
    label: "Illustration of a loyalty member record showing tier, points balance and recent activity. Sample data.",
    tiles: [
      { h: "Tier", k: "Gold", s: "Programme tier", tone: "ap" },
      { h: "Points balance", k: "2,450", s: "Available" },
      { h: "Next tier", k: "In reach", s: "Qualifying points", tone: "ok" },
    ],
    rows: {
      title: "Recent activity",
      items: [
        { a: "Purchase", b: "Points earned", pill: { t: "Accrual", tone: "ok" } },
        { a: "Reward redeemed", b: "Voucher", pill: { t: "Redemption", tone: "in" } },
        { a: "Referral", b: "Bonus", pill: { t: "Accrual", tone: "ok" } },
      ],
    },
  },
  heroCaption: "Illustration of a loyalty member record, simplified. Sample data.",

  does: {
    eyebrow: "What it does",
    title: "A programme, run from the same platform as the customer.",
    lede: "A loyalty programme needs members, rules for earning and spending, rewards and a way to talk to members. Loyalty Management brings these into the Salesforce platform.",
    items: [
      { title: "Members and balances", body: "Members earn points or status, tracked with tiers, milestones and balances. Members can follow their benefits in a member portal." },
      { title: "Rules you configure", body: "Accrual rules, redemption rules and the thresholds for qualifying for a tier are configurable." },
      { title: "Rewards in your currency", body: "Reward currencies can be dollars, percentages, vouchers and other types. Vouchers can be tied to specific products or experiences." },
      { title: "Personalised offers", body: "Offers are delivered across channels and chosen using signals such as browsing behaviour and purchase history." },
      { title: "Referral programmes", body: "Structured referral campaigns for consumers or businesses, with incentives and automated workflows." },
      { title: "Partner programmes", body: "Manage several programmes and incentives across brands and partners from one platform." },
    ],
  },

  explore: {
    eyebrow: "Explore",
    title: "How a loyalty programme runs.",
    lede: "Pick a part of the programme to see what Loyalty Management covers there.",
    tabs: [
      {
        id: "programmes",
        label: "Programmes",
        title: "Points, tiers, cash-back and more",
        tagline: "The shapes a programme can take.",
        points: [
          "Points-based programmes and tiered status programmes, such as silver, gold and platinum.",
          "Spend-based cash-back, and visit or punch-card structures.",
          "Hybrid programmes that combine these mechanics.",
          "Rewards for actions other than purchases, such as referrals, reviews, social engagement or app activity.",
        ],
        look: { title: "One platform, many mechanics", body: "A programme can mix, for example, points for purchases with a tier for qualifying spend and a bonus for a referral." },
        screen: {
          app: "Loyalty · Programme set-up",
          label: "Illustration of programme set-up showing earning rules and tiers. Sample data.",
          rows: { title: "Earning rules", items: [{ a: "Purchase", b: "Points per spend", pill: { t: "Active", tone: "ok" } }, { a: "Referral", b: "Bonus points", pill: { t: "Active", tone: "ok" } }, { a: "Review", b: "Bonus points", pill: { t: "Draft", tone: "nt" } }] },
          steps: { title: "Tiers", items: [{ t: "Silver", state: "done" }, { t: "Gold", state: "now" }, { t: "Platinum" }] },
        },
      },
      {
        id: "engine",
        label: "The engine",
        title: "What runs behind the programme",
        tagline: "Processes listed in Salesforce Help.",
        points: [
          "Enrolment bonuses and accruals: a member's activity earns points.",
          "Redemptions, point expiry and the reset of qualifying points.",
          "Points balance updates.",
          "Tier assessment: members' tiers are reviewed at regular intervals and at the end of the tier period, to check whether they qualify for an upgrade based on qualifying points.",
        ],
        look: { title: "Rules run on a schedule", body: "Some steps happen when a member acts, such as an accrual. Others, such as expiry and tier assessment, run at set times." },
        screen: {
          app: "Loyalty · Processes",
          label: "Illustration of loyalty processes with their status. Sample data.",
          rows: { title: "Processes", items: [{ a: "Accrual", pill: { t: "On activity", tone: "in" } }, { a: "Redemption", pill: { t: "On activity", tone: "in" } }, { a: "Point expiry", pill: { t: "Scheduled", tone: "nt" } }, { a: "Tier assessment", pill: { t: "Scheduled", tone: "nt" } }] },
        },
      },
      {
        id: "offers",
        label: "Offers",
        title: "Promotions chosen for the person",
        tagline: "Set up, run and measure offers.",
        points: [
          "Offers are personalised promotions delivered across channels.",
          "Signals such as browsing behaviour and purchase history help choose the offer.",
          "Guided set-up wizards cover the offer lifecycle, and analytics report by offer, channel and audience.",
        ],
        look: { title: "From signal to offer", body: "What a person has looked at or bought informs which offer they see." },
        screen: {
          app: "Offers · Performance",
          label: "Illustration of offer performance by channel. Sample data.",
          bars: { title: "Offer redemptions by channel", rows: [["Email", 70, "Index 70"], ["App", 55, "Index 55", "g"], ["Web", 40, "Index 40", "l"]] },
        },
      },
      {
        id: "referrals",
        label: "Referrals and partners",
        title: "Advocates and partner programmes",
        tagline: "Growth through members and through other brands.",
        points: [
          "Referral campaigns for consumers and for businesses, with incentives and automated workflows.",
          "Tools to find high-value advocates from member data.",
          "Dashboards for advocate activity, member-to-member growth and return.",
          "Shared currencies and joint promotions across brands and partners.",
        ],
        look: { title: "B2B as well as B2C", body: "Salesforce's examples for business programmes include channel rewards, volume rebates, partner onboarding and joint promotions." },
        screen: {
          app: "Referrals · Advocates",
          label: "Illustration of a referral dashboard with advocate counts. Sample data.",
          tiles: [{ h: "Advocates", k: "Active", tone: "ok" }, { h: "Referred members", k: "Growing", tone: "ap" }],
          rows: { title: "Top advocates", items: [{ a: "Member 1", b: "Referrals", pill: { t: "High value", tone: "ok" } }, { a: "Member 2", b: "Referrals", pill: { t: "Rising", tone: "in" } }] },
        },
      },
    ],
  },

  scenario: {
    eyebrow: "End to end",
    title: "From enrolment to a reward.",
    lede: "How the processes in Salesforce Help fit together over a member's life.",
    steps: [
      { t: "Enrol", s: "A member joins and may receive an enrolment bonus." },
      { t: "Earn", s: "Activity, such as a purchase or a referral, earns points through accrual rules." },
      { t: "Reach a tier", s: "At regular intervals and at the end of the tier period, qualifying points decide the tier." },
      { t: "Get an offer", s: "A personalised offer is chosen from signals and sent over a channel." },
      { t: "Redeem", s: "The member spends points or a voucher, and the balance updates." },
    ],
    note: "A walk-through of Salesforce's described processes, not a customer story.",
  },

  roles: {
    eyebrow: "Who uses it",
    title: "Who works with it.",
    lede: "Salesforce addresses marketers and brand teams directly on its Loyalty page. It does not define separate job roles for the product.",
    rows: [
      { who: "Marketers and brand teams", does: "Design programmes, offers and referral campaigns, and read the analytics." },
      { who: "Admins", does: "Create and set up programmes and the processes that run them in Salesforce." },
      { who: "Members", does: "Track their points, tier and benefits in the member portal." },
      { who: "Sales, service, commerce and partner teams", does: "Salesforce says loyalty connects with their data on the platform." },
    ],
  },

  fits: {
    eyebrow: "Fit with your systems",
    title: "Loyalty beside marketing and data.",
    lede: "From Salesforce's Loyalty page.",
    rows: [
      { name: "Marketing Cloud", how: "Loyalty events such as tier upgrades, points milestones, expiring rewards and enrolments can trigger journeys in Marketing Cloud, or flows in Marketing Cloud Next." },
      { name: "Data 360", how: "When an organisation uses Data 360, loyalty data can be combined with behaviour and transaction signals." },
      { name: "CRM data", how: "Loyalty connects with the CRM and marketing data on the platform." },
    ],
  },

  ai: {
    eyebrow: "AI and agents",
    title: "What Salesforce says AI adds.",
    lede: "These are Salesforce's own descriptions on its Loyalty page.",
    items: [
      { title: "Programme creation", body: "Agentforce is said to help create programmes and tailor content by channel." },
      { title: "Next-best offers", body: "Agentforce is said to recommend the next-best offer." },
      { title: "Predictive insight", body: "Predictive insights are said to flag the risk that a member disengages and trigger journeys." },
    ],
    note: "These are capabilities Salesforce describes. Check the current product for what your edition includes.",
  },

  start: {
    eyebrow: "Getting started",
    title: "Where a loyalty project begins.",
    lede: "Salesforce Help describes setting up the programme and its processes. These are the building blocks to decide first.",
    steps: [
      { title: "Define the programme", body: "Choose the mechanic: points, tiers, cash-back, punch cards or a mix, and who it is for: consumers, businesses or both." },
      { title: "Set the rules", body: "Configure accrual rules, redemption rules and the thresholds for qualifying for each tier." },
      { title: "Set up the processes", body: "Enrolment bonuses, accruals, redemptions, point expiry, qualifying-point resets, balance updates and tier assessment." },
      { title: "Add offers and referrals", body: "Layer on personalised offers and referral campaigns once the core programme runs." },
    ],
    decide: {
      title: "Decisions to settle first",
      items: [
        "The reward currency: points, cash-back, vouchers or a mix.",
        "How tiers are earned, and how often they are reviewed.",
        "Whether partner brands or businesses take part.",
        "How loyalty events connect to your marketing journeys.",
      ],
    },
  },


  faq: [
    { q: "What can a loyalty programme be built from?", a: "Points, tiers, spend-based cash-back, visit or punch cards, or a hybrid. Rewards can also be given for actions other than buying, such as referrals, reviews or app activity." },
    { q: "Is it only for consumers?", a: "No. Salesforce says programmes can be built for consumers and for businesses. Its business examples include channel rewards, volume rebates, partner onboarding and joint promotions." },
    { q: "What does the engine do automatically?", a: "Salesforce Help lists enrolment bonuses, accruals, redemptions, point expiry, resets of qualifying points, balance updates and tier assessment as the core processes." },
    { q: "How are tiers decided?", a: "Tiers are assessed at regular intervals and at the end of the tier period, by checking a member's qualifying points against the thresholds you set." },
    { q: "Can members see their own balance?", a: "Yes. Salesforce Help describes a member portal where members track their loyalty benefits." },
    { q: "Does it work with Marketing Cloud?", a: "Yes. Loyalty events such as tier upgrades or expiring rewards can trigger journeys in Marketing Cloud, or flows in Marketing Cloud Next." },
  ],

  sources: [
    { label: "Loyalty, offers and referrals", href: "https://www.salesforce.com/marketing/loyalty/" },
    { label: "Loyalty programmes", href: "https://www.salesforce.com/marketing/loyalty/programs/" },
    { label: "Salesforce Help: Loyalty Management", href: "https://help.salesforce.com/s/articleView?language=en_US&id=sf.loyaltyoverview.htm&type=5" },
    { label: "Salesforce Help: Set up loyalty processes", href: "https://help.salesforce.com/s/articleView?id=sf.set_up_loyalty_processes.htm&language=en_US&type=5" },
  ],
  checked: "Checked against Salesforce's Loyalty page and Salesforce Help in November 2026. Salesforce Help could be read only in part, so statements about processes are limited to what its search listing shows.",
};
