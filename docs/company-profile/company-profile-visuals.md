# Company profile deck — the visual layer

**Source:** `Mawkish_Technologies_Company_Profile_Nov_2026_localized.pptx` (41 slides, November
2026), rendered 2026-11-03 via LibreOffice 25.x → PDF → PyMuPDF at 1400px wide.

**The renders are in this repo:** `docs/company-profile/slides/slide01.png` … `slide41.png`,
numbered to match the current 41-slide deck. **Open the PNG when you need to see a slide** —
these are the ground truth for anything the text extraction cannot carry (logos, charts, colour,
layout, photography).

This file covers what the text extraction missed. Slide wording and speaker notes are in
[`company-profile-full-text.md`](./company-profile-full-text.md); the distilled reference is
[`company-profile.md`](./company-profile.md), whose USAGE RULES still govern everything here.

---

## 1. The client logo wall (slide 4) — 18 client logos

The text extraction showed only "Image 0 … Image 18". These are the actual marks, in grid order:

| Row | Logos |
|---|---|
| **1** | Lanka Tiles ("Fine Living Redefined") · Rocell · CIC ("Nurturing Life") · **JKR** (John Keells Restaurants) · CBL Group · CMG (Capital Maharaja Group, "Since 1930") |
| **2** | Eswaran Brothers · Ceylon Beverage Can · Suwanda ("Symbol of Quality") · Link Natural · Vitawell · **Sun Siyam** |
| **3** | RR Kabel (Wires & Cables) · Luminous · LohiaCorp · CIC AkzoNobel · CIC Seeds · CIC Besto |

> ⚠️ **New finding: Sun Siyam.** There is a Sun Siyam logo on the client wall, and the name
> appears **nowhere** in any slide text or speaker note in the entire deck. It is not a case
> study, and the notes' list of extra CIC-group clients ("CIC AkzoNobel, CIC Seeds and Besto")
> does not cover it. Sun Siyam is a Maldives resort group, which is consistent with the Malé
> presales office — but that is inference, not something the deck states. **Confirm with the
> user what the Sun Siyam engagement is before using the name or logo anywhere.**

The other 17 all reconcile: 14 are the case-study clients, and CIC AkzoNobel, CIC Seeds and CIC
Besto are the three extra CIC-group entities the notes name.

Cross-check worth knowing: **RR Kabel and Lohia Corp appear twice in the deck** — as Mawkish
clients on slide 4, and as Samishti's own "Trusted by" clients on slide 20. That is consistent
(Samishti is the implementation partner on both), but do not present them as two separate proof
points.

---

## 2. Vendor and partner logos, and where they appear

| Slide | Logos shown |
|---|---|
| 1 (title) | Mawkish logo, reversed white; platform names are **text chips**, not logos |
| 11 (stack) | SAP · Salesforce · odoo · swyftflo · mi\|hcm (row 01); SAP · SAP · **Anthropic** · databricks (row 02); aws (row 03) |
| 12–16 (solutions) | One vendor logo each: SAP · Salesforce · odoo · swyftflo · mi\|hcm |
| 17 (ecosystem) | Enterprise platforms: SAP · Salesforce · odoo · mi\|hcm. AI/data/hyperscaler: swyftflo · databricks · aws |
| 18 (partners) | SAP · Salesforce ×2 · odoo · swyftflo · mi\|hcm · aws · databricks, plus the **Samishti** logo and the **Deloitte** wordmark |
| 19 (Deloitte) | Deloitte wordmark + Mawkish logo joined by "+"; Salesforce cloud |
| 20 (Samishti) | Samishti logo on a white card; SAP logo beside "SAP GOLD PARTNER". "Trusted by" names are **text chips, not logos** |
| 21 (Databricks) | databricks logo; SAP and aws logos in the "why it matters" band |
| 22 (divider) | Per-column platform logos: SAP · SAP · salesforce · odoo · swyftflo · SAP · mi\|hcm |
| 23 (index) | Salesforce, RISE-with-SAP and GROW-with-SAP section marks, plus all 14 client logos |
| 24–37 (case studies) | Client logo top-left; platform logo in the PLATFORM box; integration logos where relevant (e.g. SAP on Lanka Tiles) |

> ⚠️ **The Anthropic logo is used on slide 11**, beside the Databricks, SAP and AWS logos, under
> the heading "AI, data and automation". Usage rule 4 says not to upgrade the deck's Anthropic
> *wording* into a partnership claim — note that the **logo placement already implies more than
> the words do**. Treat the logo as subject to the same rule: do not reuse it on the website
> without the user's confirmation.

Odoo's logo is rendered in its grey/plum wordmark; MiHCM as the blue-and-orange "mi|hcm" mark
with a registered-trademark symbol; Samishti as a blue-green swoosh wordmark.

---

## 3. Slide 22's bar chart settles the 32-vs-23 question

The divider slide carries a **proportional stacked bar** above the seven solution columns. The
text extraction could not see it. Measuring the rendered pixels across the bar's 1258px span:

| Segment | Measured | Implied share | Count at 50 total |
|---|---|---|---|
| RISE with SAP | 45.4% | **46%** | **23** |
| GROW with SAP | 23.6% | 24% | 12 |
| Salesforce | 12.0% | 12% | 6 |
| Odoo | 5.9% | 6% | 3 |
| Swyftflo AI | 5.9% | 6% | 3 |
| SAP Business AI | 3.9% | 4% | 2 |
| MiHCM | 1.8% | 2% | 1 |

(Measured widths run ~0.5pt under the true share because of the ~4px gap between segments.)

**The bar is drawn to 46%, which is 23/50.** So the graphic, the printed percentages, the
seven counts' sum and the speaker notes all agree on **23**, and the numeral **"32"** is the
single wrong element — wrong in two places (slide 22's tile and slide 23's "8 case studies among
32"). The smaller per-column meters under each number are drawn to the same percentages.

This upgrades inconsistency #1 in the summary from "the notes disagree" to "every other element
of the slide, including its own chart, says 23."

---

## 4. Visual inconsistencies the text could not show

1. **Swyftflo is filed differently on two slides.** Slide 11 puts it under **"Enterprise
   applications"**; slide 17 puts it under **"AI, data and hyperscaler"**, leaving the
   "Enterprise platforms" box with only four logos. The same product, two categories.

2. **John Keells is represented by two different marks.** Slides 4 and 27 use the **JKR / John
   Keells Restaurants** logo; slide 23's index uses the **John Keells Holdings group**
   monogram. The speaker note says the group logo was the one supplied by Nafaz and that the
   (unnamed) new restaurant brand's logo is not used — JKR is the business unit, so this is not
   a breach of that constraint, but the deck is visually inconsistent about which mark it uses.

3. **Slide 2's contents cards wrap mid-word in the render** — "Partners and pri/ncipals",
   "Clients and pro/of". This is most likely a LibreOffice font-substitution artifact rather
   than a defect in the deck. **Check it in PowerPoint before reporting it as a bug.**

4. **Slide 40 has no map.** The "Expanding into" row uses generic globe icons, not flags or a
   world map — worth knowing if anyone assumes there is a map asset to reuse.

5. **Slide 5's background is a photograph of Steve Jobs**, ghosted into the dark green panel
   behind the plywood quotation. It works in a private pitch deck; a public web page carries
   obvious likeness and rights questions. Flagging, not advising.

---

## 5. Design system, for anyone matching the deck on the website

- **Palette.** Deep forest green (~`#0E3A2F`) for dark panels and the results bands; a mint
  accent (~`#8FD6B9`) for emphasis numerals, the active lifecycle card and highlight rows; near-
  white page background (~`#F5F7F6`); white cards with hairline borders. Mid-greens
  (`#4FB28A`, `#2F8E6C`) carry the chart segments.
- **Logo.** The Mawkish twin-peak mark sits **top-right on every content slide**, reversed to
  white on dark slides and on photographic backgrounds.
- **Typography.** Bold sans headings in near-black; small-caps, letter-spaced green kickers
  above each title ("SOLUTIONS · SAP"); light grey body copy; oversized numerals for statistics.
- **Photography.** Sri Lankan imagery, always tinted green and heavily darkened: a Colombo
  street (slide 2), the Lotus Tower (8), an aerial (22), Sigiriya (38), a palm-lined waterway
  (40) and the Nine Arch Bridge with a train (41).
- **Recurring components.** Three-column card rows; dark-green full-width "value band" footers
  with tick icons; pill-shaped chips for ownership items; "EXCLUSIVE" badges on slide 18; a
  "‹ All case studies" return button top-right of every case-study slide; thin-stroke line icons
  throughout.

**Case-study template** (slides 24–37, rigidly identical): left column — client logo,
one-sentence description, two statistics, platform box with vendor logo; centre column — modules
deployed/in scope, then business areas resolved/addressed as two tick columns; right column —
key integrations or technical migration path / rollout approach; full-width dark green results
band with four large figures. In-progress slides (27, 37) swap outcome percentages for scope and
scale figures and carry an "IMPLEMENTATION IN PROGRESS" kicker.

---

## 6. What was checked

All 41 slides were rendered. Viewed in full: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 36, 37, 38, 39, 40, 41. Case studies 25, 26 and 28–35
were not opened individually — they follow the verified template above, and every one of their
client logos appears on the index slide (23), which was read in full. If you need to confirm a
detail on one of those, open its PNG.

No charts in the PowerPoint chart-object sense exist in the deck; every "chart" is drawn with
shapes, which is why the proportional bar had to be measured from pixels.
