// Copied verbatim from the supplied GROW with SAP page (its two <script> blocks): the module explorer's
// content, and the video library. Only the types are new.

export type Kpi = [string, string, string, string, string];
export type Block =
  | { t: "kpis"; items: Kpi[] }
  | { t: "cols"; h: string; labels: string[]; vals: number[]; plan?: number[]; legend: [string, string][] }
  | { t: "table"; h: string; cols: string[]; r?: number[]; rows: string[][] }
  | { t: "bars"; h: string; items: [string, number, string][]; max: number; unit?: string }
  | { t: "list"; h: string; rows: [string, string][] }
  | { t: "joule"; m: [string, string][] };

export type Screen = { app: string; av: string; h: string; p: string; b: Block[] };
export type Module = {
  id: string;
  name: string;
  tag: string;
  bullets: string[];
  video: { id: string; t: string };
  screens: Screen[];
};

export const M: Module[] = [
  { id: 'fin', name: 'Finance', tag: 'Close faster with one set of numbers.',
    bullets: ['General ledger, assets, receivables and payables', 'Multiple accounting standards in parallel', 'Cash, bank and liquidity management', 'Margin analysis and revenue recognition'],
    video: { id: 'gqsz8-Hif5Y', t: "Finance in SAP Cloud ERP 2602: SAP's release highlights" },
    screens: [
      { app: 'Cash Flow Analyzer', av: 'TR',
        h: 'Cash today comes from the bank. The next eight weeks come from your own transactions.',
        p: 'Bank balances, open invoices, purchase orders and sales orders all feed one liquidity forecast that updates as people post. Treasury stops building the forecast in a spreadsheet.',
        b: [
          { t: 'kpis', items: [['Cash position', 'All banks, today', '182.4', 'M LKR', ''], ['Expected inflows', 'Next 4 weeks', '96.1', 'M LKR', 'pos'], ['Expected outflows', 'Next 4 weeks', '88.7', 'M LKR', 'neg']] },
          { t: 'cols', h: 'Net cash flow by week · forecast', labels: ['W45','W46','W47','W48','W49','W50','W51','W52'], vals: [14, 9, -6, 18, 11, -12, 7, 16], legend: [['', 'Net inflow'], ['neg', 'Net outflow']] }
        ] },
      { app: 'Process Receivables', av: 'AR',
        h: 'Collectors start the day with a list ordered by risk, not by customer name.',
        p: "The worklist predicts each customer's payment date from their history, so the team calls the customers who are about to be late, before they are.",
        b: [
          { t: 'table', h: 'Collections worklist · 27 customers', cols: ['Customer', 'Overdue (LKR)', 'Predicted', 'Action'], r: [1], rows: [
            ['Ceylon Fresh Foods', '8,420,000', 'er:+9 days', 'btn:Remind'],
            ['Lanka Retail Group', '5,115,500', 'wr:+4 days', 'btn:Call'],
            ['Harbour Logistics', '2,030,000', 'ok:On time', 'nt:None'],
            ['Kandy Hotels Ltd', '1,760,250', 'wr:+6 days', 'btn:Remind'] ] },
          { t: 'joule', m: [['u', 'Why is Ceylon Fresh Foods flagged?'], ['j', 'They have paid an average of <b>9 days late</b> over the last 6 months and have <b>3 invoices</b> due this week. I drafted a reminder for you to review.']] }
        ] },
      { app: 'Financial Close Overview', av: 'FC',
        h: 'The month-end close becomes a schedule, not a series of emails.',
        p: 'Every close task across every company has an owner, a due date and a status. Jobs such as depreciation and currency revaluation run on schedule and record their results.',
        b: [
          { t: 'kpis', items: [['Tasks complete', 'October close', '142', '/168', 'pos'], ['Overdue', 'Across 4 companies', '3', 'tasks', 'neg'], ['Close day', 'Target day 5', '4', 'of 5', '']] },
          { t: 'table', h: 'Task list · Company 1000', cols: ['Task', 'Owner', 'Status'], rows: [
            ['Run depreciation', 'Scheduled job', 'ok:Completed'],
            ['Foreign currency valuation', 'Scheduled job', 'ok:Completed'],
            ['GR/IR clearing', 'D. Perera', 'in:In progress'],
            ['Review accrual proposals', 'AI agent → N. Silva', 'wr:Needs review'],
            ['Intercompany reconciliation', 'S. Fernando', 'nt:Not started'] ] }
        ] }
    ] },
  { id: 'sal', name: 'Sales & service', tag: 'From quote to cash without re-keying.',
    bullets: ['Quotes, contracts, orders and pricing', 'Billing, credit management and returns', 'Rebates, commissions and incentives', 'Service orders and contracts'],
    video: { id: 'G-OsHSydMNk', t: "Sales in SAP Cloud ERP 2602: SAP's release highlights" },
    screens: [
      { app: 'Sales Management Overview', av: 'SM',
        h: 'Sales managers see the pipeline and the orders on one page.',
        p: 'Quotations, incoming orders and conversion rates come straight from the transactions, so the numbers in the sales meeting match the numbers in finance.',
        b: [
          { t: 'kpis', items: [['Incoming orders', 'Month to date', '312.6', 'M LKR', 'pos'], ['Open quotations', 'Expiring in 14 days: 9', '48', '', ''], ['Quote conversion', 'Last 90 days', '34', '%', '']] },
          { t: 'bars', h: 'Incoming orders by product group · M LKR', unit: '', items: [['Packaged foods', 118, ''], ['Beverages', 86, ''], ['Household', 61, ''], ['Export bulk', 33, ''], ['Services', 14.6, '']], max: 120 }
        ] },
      { app: 'Manage Sales Orders', av: 'SO',
        h: 'One order travels from quote to delivery to invoice without being typed in again.',
        p: 'Each order shows exactly where it is. Pricing, credit checks and availability checks happen as the order is entered, not after.',
        b: [
          { t: 'table', h: 'Sales orders · 1,284', cols: ['Order', 'Customer', 'Net value (LKR)', 'Status'], r: [2], rows: [
            ['<a>1002418</a>', 'Lanka Retail Group', '4,860,000', 'ok:Delivered'],
            ['<a>1002421</a>', 'Ceylon Fresh Foods', '2,315,400', 'er:Credit block'],
            ['<a>1002425</a>', 'Galle Supermarkets', '1,120,000', 'in:Being picked'],
            ['<a>1002427</a>', 'Harbour Logistics', '640,800', 'ok:Billed'],
            ['<a>1002430</a>', 'Kandy Hotels Ltd', '388,250', 'nt:Open'] ] }
        ] },
      { app: 'Sales Order Fulfillment', av: 'SF',
        h: 'Instead of hunting for stuck orders, the system lists them and says why.',
        p: 'Orders that cannot move forward appear in one place, grouped by the reason: a credit block, missing data, no stock or a billing block. Each one can be fixed from the same screen.',
        b: [
          { t: 'kpis', items: [['Delivery issues', 'Blocked or late', '6', 'orders', 'neg'], ['Incomplete data', 'Missing fields', '4', 'orders', ''], ['Billing issues', 'Ready but blocked', '2', 'orders', '']] },
          { t: 'table', h: 'Orders that need attention', cols: ['Order', 'Issue', 'Since', ''], rows: [
            ['1002421', 'er:Credit limit exceeded', '2 days', 'btn:Release'],
            ['1002398', 'wr:Not enough stock', '1 day', 'btn:Reschedule'],
            ['1002402', 'wr:Incoterms missing', 'Today', 'btn:Complete'] ] }
        ] }
    ] },
  { id: 'pro', name: 'Procurement', tag: "Spend that's controlled, not chased.",
    bullets: ['Requisitions, purchase orders and contracts', 'Supplier invoices and three-way matching', 'Supplier evaluation', 'Self-service buying for employees'],
    video: { id: 'FK81eaC2fvI', t: "Sourcing and Procurement in the 2502 release: SAP's demo" },
    screens: [
      { app: 'Procurement Overview', av: 'PO',
        h: 'Buyers and managers see where the money goes, and how much of it is on contract.',
        p: 'Spend by category and supplier, contract coverage and purchasing that bypasses contracts are all visible without a separate analytics project.',
        b: [
          { t: 'kpis', items: [['Spend', 'Year to date', '1.24', 'B LKR', ''], ['Contract coverage', 'Share of spend', '71', '%', 'pos'], ['Off-contract spend', 'Last 90 days', '8.6', '%', 'neg']] },
          { t: 'bars', h: 'Spend by category · M LKR', items: [['Raw materials', 512, ''], ['Packaging', 238, ''], ['Logistics', 176, ''], ['Maintenance', 142, ''], ['IT and services', 96, '']], max: 520 }
        ] },
      { app: 'Create Purchase Requisition', av: 'NP',
        h: 'Employees buy from approved catalogues, like shopping online.',
        p: 'Staff pick items from catalogues with agreed suppliers and prices. Approvals route automatically by amount and cost centre, and the purchase order is created for the buyer.',
        b: [
          { t: 'table', h: 'Catalogue: Office and IT', cols: ['Item', 'Supplier', 'Price (LKR)', ''], r: [2], rows: [
            ['Laptop, 14-inch, standard', 'TechLanka (Pvt) Ltd', '312,000', 'btn:Add'],
            ['Monitor, 27-inch', 'TechLanka (Pvt) Ltd', '68,500', 'btn:Add'],
            ['Safety boots, size 9', 'Ceylon Safety Co.', '9,800', 'btn:Add'] ] },
          { t: 'list', h: 'Cart · 3 items · 390,300 LKR', rows: [['Cost centre', 'nt:CC-4100 Operations'], ['Approval', 'in:Line manager → Finance'], ['Delivery', 'ok:Colombo HQ, 3 days']] }
        ] },
      { app: 'Manage Supplier Invoices', av: 'AP',
        h: 'Invoices that match the order and the receipt post themselves. Only exceptions reach a person.',
        p: 'Each invoice is checked against the purchase order and the goods receipt, called three-way matching. Price and quantity differences are blocked for payment until someone decides.',
        b: [
          { t: 'table', h: 'Supplier invoices · last 7 days', cols: ['Invoice', 'Supplier', 'Amount (LKR)', 'Match'], r: [2], rows: [
            ['5105600711', 'PackPro Lanka', '1,846,000', 'er:Price variance'],
            ['5105600714', 'Ceylon Safety Co.', '392,000', 'ok:Matched · posted'],
            ['5105600716', 'Island Freight', '1,210,500', 'wr:Qty variance'],
            ['5105600719', 'TechLanka (Pvt) Ltd', '624,000', 'ok:Matched · posted'] ] },
          { t: 'joule', m: [['j', 'Invoice 5105600711 is <b>4.2% above</b> the PO price for packaging film. The contract allows 2%. Block for payment and ask the buyer?']] }
        ] }
    ] },
  { id: 'mfg', name: 'Manufacturing', tag: "Plan what you'll make, make what you plan.",
    bullets: ['Bills of material and production orders', 'Material requirements planning', 'Quality inspection', 'Batch and serial number tracking'],
    video: { id: 'btRK-I9FlAo', t: "Manufacturing in SAP Cloud ERP 2602: SAP's release highlights" },
    screens: [
      { app: 'Monitor Material Coverage', av: 'MP',
        h: 'Planners see the shortage before the production line does.',
        p: 'Material requirements planning compares demand with stock and incoming supply. The planner gets a list of materials that will run short, the date it happens, and options to fix it.',
        b: [
          { t: 'table', h: 'Materials at risk · Plant 1100 Biyagama', cols: ['Material', 'Stock', 'Days of supply', 'Coverage'], r: [1, 2], rows: [
            ['PET resin, food grade', '4.2 t', '3', 'er:Shortage 3 Nov'],
            ['Shrink film 450 mm', '1,800 m', '6', 'wr:At risk 7 Nov'],
            ['Label stock, gloss', '22,000 pcs', '19', 'ok:Covered'],
            ['Caps 28 mm, blue', '140,000 pcs', '24', 'ok:Covered'] ] },
          { t: 'joule', m: [['u', 'How do I fix the PET resin shortage?'], ['j', 'The open PO from PolyAsia is due <b>9 Nov</b>. Bringing it forward to 2 Nov covers demand, or I can move 1.5 t from Plant 1200.']] }
        ] },
      { app: 'Manage Production Orders', av: 'PS',
        h: "The shop floor and the office look at the same orders.",
        p: 'Supervisors see what is released, what is running late and what has been confirmed. Confirmations update stock and costs as they happen.',
        b: [
          { t: 'kpis', items: [['Released', 'This week', '24', 'orders', ''], ['Delayed', 'Past finish date', '3', 'orders', 'neg'], ['Confirmed today', 'Yield 98.1%', '11', 'orders', 'pos']] },
          { t: 'bars', h: 'Progress by order', items: [['1000412 · 500 ml', 100, 'g'], ['1000415 · 1 L', 72, ''], ['1000418 · 5 L', 40, 'o'], ['1000421 · 500 ml', 12, '']], max: 100, unit: '%' }
        ] },
      { app: 'Manage Inspection Lots', av: 'QM',
        h: 'Quality checks are part of the process, not a separate logbook.',
        p: 'Inspection lots are created automatically at goods receipt or at the end of production. Results are recorded against each batch, so you can trace any finished product back to its raw materials.',
        b: [
          { t: 'table', h: 'Inspection lot 0100004512 · Batch B26-1031', cols: ['Characteristic', 'Target', 'Result', 'Valuation'], r: [1, 2], rows: [
            ['Fill volume (ml)', '500 ± 5', '501.2', 'ok:Accept'],
            ['Cap torque (Nm)', '1.8–2.4', '2.1', 'ok:Accept'],
            ['Seal integrity', 'Pass', 'Pass', 'ok:Accept'],
            ['Label position (mm)', '± 1.5', '2.3', 'er:Reject'] ] },
          { t: 'list', h: 'Usage decision', rows: [['Batch B26-1031', 'wr:Pending · 1 characteristic rejected'], ['Stock', 'nt:Quality inspection stock']] }
        ] }
    ] },
  { id: 'scm', name: 'Supply chain & warehouse', tag: 'Know what you have and where it is.',
    bullets: ['Inventory and goods movements', 'Warehouse management', 'Available-to-promise checks', 'Transportation and freight'],
    video: { id: 'b1sqoqKhvNA', t: "Supply Chain Management in SAP Cloud ERP 2602: SAP's release highlights" },
    screens: [
      { app: 'Inventory Analysis Overview', av: 'IM',
        h: 'Stock value, slow movers and turnover, live, by site.',
        p: 'Every goods movement updates stock and its value immediately. Slow-moving and dead stock are visible before they turn into write-offs.',
        b: [
          { t: 'kpis', items: [['Stock value', 'All plants', '846', 'M LKR', ''], ['Slow-moving', 'No issue in 90 days', '6.2', '%', 'neg'], ['Inventory turnover', 'Rolling 12 months', '7.4', 'x', 'pos']] },
          { t: 'bars', h: 'Stock value by location · M LKR', items: [['Colombo DC', 388, ''], ['Biyagama plant', 254, ''], ['Kandy depot', 118, ''], ['Galle depot', 86, '']], max: 400 }
        ] },
      { app: 'Warehouse Monitor', av: 'WH',
        h: 'Warehouse staff work from tasks on a handheld, not paper pick lists.',
        p: 'Picking, packing and put-away become warehouse tasks with a bin and a quantity. Supervisors see open, overdue and completed work in real time.',
        b: [
          { t: 'kpis', items: [['Open tasks', 'Colombo DC', '128', '', ''], ['Overdue picks', 'Past wave time', '4', '', 'neg'], ['Waves released', 'Today', '6', '', 'pos']] },
          { t: 'table', h: 'Warehouse tasks · Wave 0006', cols: ['Task', 'From bin', 'To', 'Qty', 'Status'], r: [3], rows: [
            ['Pick', '02-14-03', 'Packing 2', '48 CS', 'in:In progress'],
            ['Pick', '02-17-01', 'Packing 2', '12 CS', 'er:Overdue'],
            ['Put-away', 'GR-ZONE', '05-02-04', '2 PAL', 'ok:Confirmed'] ] }
        ] },
      { app: 'Monitor Product Availability', av: 'AT',
        h: 'Promise a delivery date you can keep.',
        p: 'The available-to-promise check looks at stock, planned production and incoming supply before confirming a date. When supply is short, rules decide which customers are served first.',
        b: [
          { t: 'table', h: 'Availability · Bottled water 1 L', cols: ['Order', 'Requested', 'Confirmed', 'Status'], rows: [
            ['1002418', '04 Nov', '04 Nov', 'ok:Fully confirmed'],
            ['1002425', '05 Nov', '07 Nov', 'wr:Partly confirmed'],
            ['1002433', '05 Nov', '11 Nov', 'er:Backorder'] ] },
          { t: 'list', h: 'Backorder processing rule', rows: [['Priority 1', 'in:Key accounts'], ['Priority 2', 'nt:Export orders'], ['Priority 3', 'nt:All other orders']] }
        ] }
    ] },
  { id: 'prj', name: 'Projects & services', tag: 'Run project businesses at a profit.',
    bullets: ['Project planning and budgets', 'Time recording and resources', 'Milestone and time-and-material billing', 'Project profitability'],
    video: { id: 'p2dYVUexaH4', t: "Professional Services in SAP Cloud ERP 2602: SAP's release highlights" },
    screens: [
      { app: 'Project Control', av: 'PM',
        h: 'Know whether a project makes money while you can still change it.',
        p: 'Costs from time, expenses and purchases post to the project as they happen. Project managers compare actual margin with plan every week, not after the final invoice.',
        b: [
          { t: 'kpis', items: [['Revenue', 'Project P-2611 · to date', '48.6', 'M LKR', ''], ['Cost', 'Time, travel, subcontract', '37.2', 'M LKR', ''], ['Margin', 'Plan 25.0%', '23.4', '%', 'neg']] },
          { t: 'cols', h: 'Monthly cost · actual vs plan (M LKR)', labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'], vals: [4.1, 5.6, 6.8, 7.4, 7.9, 5.4], plan: [4.5, 5.5, 6.2, 6.6, 7.0, 7.2], legend: [['', 'Actual'], ['dash', 'Plan']] }
        ] },
      { app: 'Manage Project Demands', av: 'RM',
        h: 'Staff the right people, and see who is free.',
        p: 'Project managers request roles and skills. Resource managers assign people and see utilisation across all projects, which keeps billable hours up.',
        b: [
          { t: 'bars', h: 'Consultant utilisation · November', items: [['A. Jayasuriya', 96, 'r'], ['K. Rajapaksha', 88, 'g'], ['M. Wickrama', 74, 'g'], ['T. Hettiarachchi', 52, 'o'], ['R. Gunasekara', 31, 'o']], max: 100, unit: '%' },
          { t: 'list', h: 'Open demand · P-2611', rows: [['Senior FI consultant · 40 days', 'wr:Unassigned'], ['Integration developer · 25 days', 'ok:R. Gunasekara']] }
        ] },
      { app: 'Manage My Timesheet', av: 'KR',
        h: 'Hours recorded today become billable revenue this month.',
        p: 'Approved time flows into project costs and into time-and-material billing automatically. Nobody re-types timesheets into invoices.',
        b: [
          { t: 'table', h: 'Week 45 · K. Rajapaksha', cols: ['Day', 'Project', 'Hours', 'Status'], r: [2], rows: [
            ['Mon', 'P-2611 · Finance design', '8.0', 'ok:Approved'],
            ['Tue', 'P-2611 · Finance design', '7.5', 'ok:Approved'],
            ['Wed', 'P-2604 · Support', '4.0', 'in:Submitted'],
            ['Wed', 'Internal · Training', '4.0', 'in:Submitted'],
            ['Thu', 'P-2611 · Data migration', '8.0', 'nt:Draft'] ] }
        ] }
    ] }
];

export type Video = { id: string; k: "start" | "mod" | "rel"; big: string; t: string; p: string; d: string; feat?: boolean };

export const V: Video[] = [
  { id: 'V-HXmIJgMJ8', k: 'start', big: 'Product tour', t: 'SAP S/4HANA Cloud Public Edition: product tour and demo', p: 'A guided walk through the cloud ERP: the start page, core processes and how users work day to day.', d: 'January 2024', feat: true },
  { id: 'js6GcTp7PWQ', k: 'start', big: 'Why GROW with SAP', t: 'IN FOCUS: the GROW with SAP offering for midmarket companies', p: "SAP's launch conversation on what GROW includes and who it is for.", d: 'March 2023' },
  { id: 'XAqp54zZ_Ro', k: 'start', big: 'What is GROW?', t: 'What is GROW with SAP? Three questions to Jürgen Röhricht', p: "SAP's head of public cloud for the Middle East and Europe explains the offering.", d: 'May 2023' },
  { id: '_3PHMlne5cA', k: 'start', big: 'Implementing made easy', t: 'How SAP makes implementing the public cloud easier', p: 'Guided configuration, best practices and the tools that keep projects short.', d: 'April 2023' },
  { id: 'gqsz8-Hif5Y', k: 'mod', big: 'Finance', t: 'Finance in SAP Cloud ERP 2602', p: 'Release highlights for accounting, close, treasury and receivables.', d: 'January 2026' },
  { id: 'G-OsHSydMNk', k: 'mod', big: 'Sales', t: 'Sales in SAP Cloud ERP 2602', p: 'Release highlights for quote to cash, pricing and order fulfilment.', d: 'February 2026' },
  { id: 'FK81eaC2fvI', k: 'mod', big: 'Procurement', t: 'Sourcing and Procurement in release 2502', p: 'Demo of requisitioning, purchasing, invoices and supplier management.', d: 'January 2025' },
  { id: 'btRK-I9FlAo', k: 'mod', big: 'Manufacturing', t: 'Manufacturing in SAP Cloud ERP 2602', p: 'Release highlights for production planning, execution and quality.', d: 'January 2026' },
  { id: 'b1sqoqKhvNA', k: 'mod', big: 'Supply chain', t: 'Supply Chain Management in SAP Cloud ERP 2602', p: 'Release highlights for inventory, warehousing and logistics.', d: 'March 2026' },
  { id: 'p2dYVUexaH4', k: 'mod', big: 'Professional services', t: 'Professional Services in SAP Cloud ERP 2602', p: 'Release highlights for projects, resources, time and billing.', d: 'January 2026' },
  { id: 'VKK7IiJHguE', k: 'rel', big: "What's new in 2602", t: "What's new in SAP Cloud ERP 2602", p: 'The headline changes in the February 2026 release, across the product.', d: 'January 2026' },
  { id: 'vzesbl6sOsM', k: 'rel', big: 'AI in Cloud ERP', t: 'AI and next-generation ERP innovations in SAP Cloud ERP 2602', p: 'Joule, AI agents and the AI features added in the release.', d: 'January 2026' }
];

export const F: [string, string][] = [['all', 'All'], ['start', 'Start here'], ['mod', 'By business area'], ['rel', 'Latest release and AI']];

export const tagName: Record<string, string> = { start: 'Start here', mod: 'Release highlights', rel: 'Release 2602' };
