export type PlatformKey = "sf" | "rise" | "grow";

export type Client = {
  id: string;
  n: string;
  p: PlatformKey;
  co: string;
  ind: string;
  st?: string;
  prods: [string, string][];
  t: string;
  about: string;
  f: [string, string][];
  plat: string;
  mh: string;
  mods: string[];
  areas: string[];
  ah?: string;
  ih: string;
  ints: [string, string][];
  r: [string, string, number][];
};

export const platforms: Record<PlatformKey, string> = { sf: "Salesforce", rise: "RISE with SAP", grow: "GROW with SAP" };

/** Case-study content from the supplied Clients page. Result figures flagged 0 are not yet confirmed with the client. */
export const clients: Client[] = [
 { id:'lanka-tiles', n:'Lanka Tiles PLC', p:'sf', co:'Sri Lanka', ind:'Retail and distribution', prods:[['Sales Cloud','sf'],['CPQ','sf'],['SAP S/4HANA integration','']],
   t:'Salesforce Sales Cloud and CPQ, integrated with SAP S/4HANA, across 60+ showrooms',
   about:'CSE-listed wall and floor tile maker in the Vallibel One group, selling tiles and bathware through a nationwide showroom network.',
   f:[['1984','Founded'],['60+','Showrooms']], plat:'Salesforce Sales Cloud with CPQ', mh:'Modules deployed',
   mods:['Leads and opportunities','Omni-channel lead routing','Flow auto-response','Products and price books','CPQ quotes and invoices','HQ reports and dashboards'],
   areas:['Enquiry leakage','Slow first response','Unclear lead ownership','No HQ pipeline view','Manual quote pricing','Quote-to-invoice gaps'],
   ih:'Key integrations', ints:[['SAP S/4HANA','two-way and real time: pricing, discounts, bundles and invoices'],['WhatsApp Business API','chats become leads with instant replies'],['Meta and TikTok Lead Ads','campaign forms create opportunities'],['Web-to-Lead and Email-to-Lead','every online enquiry captured']],
   r:[['100%','of enquiries in one pipeline',0],['90%','faster first response',0],['27%','higher lead-to-sale conversion',0],['65%','faster quote turnaround',0]] },
 { id:'royal-ceramics', n:'Royal Ceramics Lanka PLC', p:'sf', co:'Sri Lanka', ind:'Manufacturing and retail', prods:[['Sales Cloud','sf'],['CPQ','sf'],['Oracle ERP integration','op']],
   t:'Salesforce Sales Cloud and CPQ, integrated with Oracle ERP, across 75+ Rocell showrooms',
   about:'Sri Lanka’s leading tile and bathware manufacturer, owner of the Rocell brand and listed on the CSE within the Vallibel One group.',
   f:[['1990','Founded'],['75+','Showrooms']], plat:'Salesforce Sales Cloud with CPQ', mh:'Modules deployed',
   mods:['Leads and opportunities','Showroom lead routing','Flow auto-response','Tile and bathware catalogue','CPQ quotes and invoices','HQ reports and dashboards'],
   areas:['Enquiry leakage','Slow first response','Unclear lead ownership','No HQ pipeline view','Manual quote pricing','Quote-to-invoice gaps'],
   ih:'Key integrations', ints:[['Oracle ERP','two-way: price lists, discount rules and stock levels in quotes'],['Oracle Receivables','approved quotes post to Oracle as customer invoices'],['WhatsApp, Meta and TikTok','chats and campaign forms create leads'],['Web-to-Lead and Email-to-Lead','every online enquiry captured']],
   r:[['100%','of enquiries in one pipeline',0],['85%','faster first response',0],['22%','higher lead-to-sale conversion',0],['70%','faster quote turnaround',0]] },
 { id:'vitawell', n:'Vitawell (Pvt) Ltd', p:'sf', co:'Sri Lanka', ind:'Health and wellness retail', prods:[['Sales Cloud','sf'],['Marketing Cloud','sf'],['Customer 360','sf']],
   t:'Salesforce Sales Cloud, Marketing Cloud and Customer 360, integrated with a local ERP',
   about:'Sri Lanka’s first specialist nutraceutical retailer and exclusive distributor of global brands such as Nature’s Way, selling in stores and online.',
   f:[['2015','Founded'],['9+','Global brands']], plat:'Sales Cloud, Marketing Cloud and Customer 360', mh:'Modules deployed',
   mods:['Customer 360 profiles','Loyalty and order history','Journey Builder campaigns','Email, SMS and WhatsApp','Pharmacy and B2B accounts','Segments and dashboards'],
   areas:['Fragmented customer data','Store and online silos','Untargeted promotions','Low repeat purchase','Untracked B2B pipeline','Manual campaign reports'],
   ih:'Key integrations', ints:[['Local ERP','two-way: products, prices, stock and invoices kept in sync'],['ERP sales history','store and online purchases feed Customer 360'],['vitawell.lk store','web orders and sign-ups flow into Salesforce'],['WhatsApp and SMS gateway','journeys, reminders and order updates']],
   r:[['100%','of customers in one profile',0],['32%','more repeat purchases',0],['45%','higher campaign engagement',0],['60%','less manual reporting',0]] },
 { id:'john-keells', n:'John Keells Restaurants', p:'sf', co:'Sri Lanka', ind:'Quick service restaurants', st:'In progress', prods:[['Sales Cloud','sf'],['Service Cloud','sf'],['Marketing Cloud','sf'],['Customer 360','sf']],
   t:'Salesforce Sales Cloud, Service Cloud, Marketing Cloud and Customer 360, for a new restaurant launch',
   about:'The quick service restaurant business of John Keells Holdings, Sri Lanka’s largest listed conglomerate.',
   f:[['1870','Group founded'],['7','Industry groups']], plat:'Sales, Service and Marketing Cloud, Customer 360', mh:'Modules in scope',
   mods:['Customer 360 profiles','Sales Cloud catering','Service Cloud guest cases','Marketing Cloud journeys','Omni-channel support','Offers and loyalty'],
   areas:['Pre-launch audience','Anonymous walk-ins','Corporate order pipeline','Guest complaint handling','Offer redemption','Consent under PDPA'], ah:'Business areas addressed',
   ih:'Planned integrations', ints:[['Restaurant POS','orders, baskets and visits matched to guests'],['Delivery platforms','PickMe Food and app orders by guest'],['Web and social sign-ups','launch waitlist and Meta lead forms'],['WhatsApp and SMS gateway','invites, offers, support and feedback']],
   r:[['1','profile for every guest',1],['4','Salesforce clouds on one platform',1],['Day 1','guest data from the first order',1]] },
 { id:'cic', n:'CIC Holdings PLC', p:'rise', co:'Sri Lanka', ind:'Diversified conglomerate', prods:[['RISE with SAP',''],['S/4HANA Cloud Private Edition',''],['ECC migration','']],
   t:'SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, across all group entities',
   about:'Listed conglomerate leading in agriculture, livestock, paints, industrial chemicals and healthcare.',
   f:[['1964','Founded'],['3','Business clusters']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules migrated',
   mods:['FI-CO, Universal Journal','MM and inventory','SD order to cash','PP and QM manufacturing','Business Partner via CVI','Fiori apps and launchpad'],
   areas:['ECC end of maintenance','Ageing on-prem hardware','Slow group close','Batch-based reporting','Custom code debt','Uneven entity setups'],
   ih:'Technical migration path', ints:[['Readiness Check','simplification items and impact mapped per entity'],['ATC remediation','custom code adapted, unused Z-objects retired'],['SUM with DMO','ECC converted and moved to SAP HANA in the cloud'],['Finance conversion','ledgers reconciled into the Universal Journal, then hypercare']],
   r:[['100%','of group entities on S/4HANA',1],['99.7%','uptime SLA under RISE',0],['40%','faster month-end close',0],['35%','of custom code retired',0]] },
 { id:'link-natural', n:'Link Natural Products', p:'rise', co:'Sri Lanka', ind:'Herbal and Ayurveda manufacturing', prods:[['RISE with SAP',''],['S/4HANA Cloud Private Edition',''],['New implementation','']],
   t:'New SAP S/4HANA rollout on the CIC Holdings RISE with SAP landscape, replacing a local ERP',
   about:'CIC Holdings’ herbal and Ayurveda maker behind Samahan, Sudantha and Swastha, with 200+ products and 400+ out-grower farmers.',
   f:[['1982','Founded'],['30','Export markets']], plat:'SAP S/4HANA Cloud Private Edition, RISE with SAP', mh:'Modules deployed',
   mods:['PP-PI recipes and orders','QM lab and batch release','Batch and expiry (FEFO)','MM out-grower sourcing','SD domestic and export','FI-CO product costing'],
   areas:['Standalone local ERP','Weak batch traceability','Paper-based QA release','Farm buy-back tracking','Export order delays','Group reporting gaps'],
   ih:'Rollout approach', ints:[['CIC RISE landscape','new company code on the group’s S/4HANA'],['Fit-to-standard','Link processes built on the CIC group template'],['Migration Cockpit','materials, recipes, partners and balances loaded'],['Intercompany','trading with CIC entities and group reporting automated']],
   r:[['100%','batch traceability, farm to shelf',0],['50%','faster QA batch release',0],['35%','faster export order cycle',0],['25%','fewer expiry write-offs',0]] },
 { id:'cmg', n:'Capital Maharaja Group', p:'rise', co:'Sri Lanka', ind:'Diversified group', prods:[['RISE with SAP',''],['S/4HANA Cloud Private Edition',''],['ECC migration','']],
   t:'SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, across all CMG companies',
   about:'One of Sri Lanka’s oldest diversified groups, spanning S-lon pipes, Sirasa and News1st media, tea, leisure and technology.',
   f:[['1930','Founded'],['5','Business sectors']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules migrated',
   mods:['FI-CO, Universal Journal','MM and inventory','SD order to cash','PP for S-lon plants','Business Partner via CVI','Group Reporting'],
   areas:['ECC end of maintenance','Ageing on-prem hardware','Slow group close','Diverse sector processes','Custom code debt','Manual consolidation'],
   ih:'Technical migration path', ints:[['Readiness Check','simplification items and impact mapped per company'],['ATC remediation','custom code adapted, unused Z-objects retired'],['SUM with DMO','ECC converted and moved to SAP HANA in the cloud'],['Finance conversion','every company code reconciled into the Universal Journal']],
   r:[['100%','of CMG companies on S/4HANA',1],['99.7%','uptime SLA under RISE',0],['50%','faster group consolidation',0],['30%','of custom code retired',0]] },
 { id:'cbl', n:'CBL Group', p:'rise', co:'Sri Lanka', ind:'Food manufacturing', prods:[['RISE with SAP',''],['S/4HANA Cloud Private Edition',''],['ECC migration','']],
   t:'SAP ECC to S/4HANA Cloud Private Edition with RISE with SAP, for a food maker exporting to 65+ countries',
   about:'Sri Lanka’s biscuit and confectionery leader behind Munchee, Ritzbury and Tiara, with 10 companies and 6,000+ people.',
   f:[['1968','Founded'],['65+','Export markets']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules migrated',
   mods:['FI-CO, Universal Journal','MM farmer sourcing','SD trade and export','PP-PI recipe production','QM food safety checks','Batch and shelf life'],
   areas:['ECC end of maintenance','Ageing on-prem hardware','Slow multi-company close','Batch traceability gaps','Custom code debt','Export volume growth'],
   ih:'Technical migration path', ints:[['Readiness Check','simplification items and impact mapped per company'],['ATC remediation','custom code adapted, unused Z-objects retired'],['SUM with DMO','cutover timed around production and export runs'],['Finance conversion','ledgers in the Universal Journal, hypercare through peak season']],
   r:[['100%','of plants live on S/4HANA',0],['99.7%','uptime SLA under RISE',0],['45%','faster MRP planning runs',0],['30%','faster month-end close',0]] },
 { id:'suwanda', n:'Suwanda Industries', p:'rise', co:'Sri Lanka', ind:'Incense and home fragrance manufacturing', prods:[['RISE with SAP',''],['S/4HANA Cloud Private Edition',''],['SAP BTP','']],
   t:'RISE with SAP, S/4HANA Cloud Private Edition, across all company processes',
   about:'Sri Lankan maker of Cycle Pure incense, sambrani and home fragrances, packed by women-led units.',
   f:[['2009','Founded'],['1948','Cycle brand origin']], plat:'SAP S/4HANA Cloud Private Edition, RISE with SAP', mh:'Modules deployed',
   mods:['PP batch and packing','QM fragrance batch QC','MM raw material buying','Subcontract packing units','SD distributors and retail','FI-CO product costing'],
   areas:['Packing unit stock','Batch consistency','Distributor visibility','Imported brand margins','Carbon reporting data','Slow month-end close'],
   ih:'Rollout approach', ints:[['Fit-to-standard','SAP best practices for make and distribute'],['Subcontracting','materials issued to packing units and reconciled'],['Migration Cockpit','materials, partners, open items and balances'],['Clean core','custom needs built on SAP BTP, outside the core']],
   r:[['100%','of processes on one ERP',1],['99.7%','uptime SLA under RISE',0],['40%','faster month-end close',0],['25%','less packing material loss',0]] },
 { id:'luminous', n:'Luminous Power Technologies', p:'rise', co:'India', ind:'Power backup and solar', prods:[['RISE with SAP',''],['S/4HANA conversion',''],['SAP RAR',''],['SAP GRC',''],['SAP Integration Suite',''],['Application management','']],
   t:'SAP ECC to S/4HANA, moved to RISE with SAP in 2021, with managed support since 2014',
   about:'India’s power backup and home solar leader, with 7 plants, 6,000+ people and 60,000+ channel partners in 36+ countries.',
   f:[['2014','Partner since'],['1,000+','SAP users']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules and services',
   mods:['Suite on HANA migration','S/4HANA conversion','Revenue Accounting (RAR)','GRC and Fiori','PI/PO to SAP CPI','Embedded CRM on S/4HANA'],
   areas:['ECC end of maintenance','On-premise infrastructure','Ind AS 115 compliance','Separate CRM system','Legacy PI/PO middleware','Access and SoD risk'],
   ih:'Journey since 2014', ints:[['2014 to 2016','Suite on HANA migration, CRM rollout, Basis AMS'],['2017 to 2019','S/4HANA conversion, SAP RAR, GRC and Fiori'],['2020 to 2022','upgrade to S/4HANA 2020, move to RISE in February 2021'],['2023 to 2025','PI/PO to CPI, CRM into S/4HANA 2023']],
   r:[['100%','of 1,000+ users on RISE',1],['99.7%','uptime SLA under RISE',0],['45%','faster revenue close with RAR',0],['30%','lower integration upkeep on CPI',0]] },
 { id:'rr-kabel', n:'RR Kabel', p:'rise', co:'India', ind:'Electrical wires and cables', prods:[['RISE with SAP',''],['Carve-out',''],['SAP EWM',''],['Group rollouts',''],['Application management','']],
   t:'SAP carve-out from its parent, moved to RISE with SAP in 2022, with group company rollouts',
   about:'Wires, cables, fans and lighting maker within RR Global, a USD 1.25bn electrical group present in 90+ countries.',
   f:[['2021','Partner since'],['400+','SAP users']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules and services',
   mods:['Carve-out from parent','Fans and lighting (HEB)','Brownfield move to RISE','EWM warehousing','CRM, DMS, SOLOS, barcode','Group company rollouts'],
   areas:['Separation from parent','Acquired business onboarding','On-premise infrastructure','Disconnected sales apps','Manual warehouse operations','Slow new-entity setup'],
   ih:'Journey since 2020', ints:[['2020 to 2021','carve-out from parent, fans and lighting carve-out, AMS'],['2022 to 2023','brownfield move to RISE, Arraystorm and CPD rollouts'],['2024','S/4HANA linked to Path CRM, DMS, SOLOS and barcode app'],['2025','RR Parkon reimplementation, EWM, RR Agri, Busduct, Transfer Co.']],
   r:[['100%','of 400+ users on RISE',1],['99.7%','uptime SLA under RISE',0],['40%','faster warehouse picking with EWM',0],['50%','faster new-company rollouts',0]] },
 { id:'lohia', n:'Lohia Corp', p:'rise', co:'India', ind:'Engineering and machinery', prods:[['RISE with SAP',''],['Suite on HANA',''],['ECC migration','']],
   t:'SAP ECC to RISE with SAP via Suite on HANA, across Lohia Corp and Leesona US',
   about:'Four-decade leader in woven plastics and raffia machinery from Kanpur, with 2,000+ people and Leesona in the US.',
   f:[['2008','On SAP since'],['500+','SAP users']], plat:'RISE with SAP, S/4HANA Cloud Private Edition', mh:'Modules and services',
   mods:['Suite on HANA migration','Move to RISE with SAP','90 interfaces migrated','Disaster recovery setup','Fiori activation','CxO analytics dashboards'],
   areas:['Third-party system sprawl','1,500+ custom objects','Missing documentation','Outdated test scripts','Redundant merger data','Manual business processes'],
   ih:'Technical migration path', ints:[['Assessment','custom objects documented, process flows and tests rebuilt'],['Data carving','merger and demerger data removed, 200 GB smaller'],['Upgrade strategy','Suite on HANA, then RISE, with minimal downtime'],['Continuity','90 interfaces moved, DR aligned to the group BCP']],
   r:[['80%','less downtime during migration',1],['100%','of 90 interfaces migrated',1],['99.7%','uptime SLA under RISE',0],['35%','shorter sales processing time',0]] },
 { id:'eswaran', n:'Eswaran Brothers Exports', p:'grow', co:'Sri Lanka', ind:'Tea export and manufacturing', prods:[['GROW with SAP',''],['S/4HANA Cloud Public Edition',''],['SAP BTP','']],
   t:'GROW with SAP across all business processes, with a tea manufacturing module on SAP BTP',
   about:'Third-generation family tea exporter, from auction buying to blending, tea bags and private label for global brands.',
   f:[['1963','Founded'],['60+','Export markets']], plat:'SAP S/4HANA Cloud Public Edition, GROW with SAP', mh:'Modules deployed',
   mods:['Tea module on SAP BTP','Auction and broker buying','Blending and production','Barcode bag tracking','Sales and export shipping','Finance and blend costing'],
   areas:['Manual auction records','Broker advance tracking','Bag traceability gaps','Blend cost visibility','Export document delays','Order status blind spots'],
   ih:'Key integrations', ints:[['SAP BTP tea module','side-by-side extension on released APIs'],['Tea auction catalogues','lots, valuations and purchases loaded'],['Barcode scanning','every bag tracked from purchase to pack'],['Bank payment files','broker payments and advances settled']],
   r:[['100%','of tea bags tracked by barcode',1],['45%','faster export documentation',0],['40%','faster month-end close',0],['30%','less manual data entry',0]] },
 { id:'ceylon-beverage-can', n:'Ceylon Beverage Can', p:'grow', co:'Sri Lanka and India', ind:'Aluminium can manufacturing', st:'In progress', prods:[['GROW with SAP',''],['S/4HANA Cloud Public Edition','']],
   t:'GROW with SAP across all business processes, for Sri Lanka and the Chennai operations',
   about:'Sri Lanka’s first two-piece aluminium can and end maker, supplying beverage brands across Asia, East Africa and the Middle East.',
   f:[['2014','Founded'],['8','Can sizes']], plat:'SAP S/4HANA Cloud Public Edition, GROW with SAP', mh:'Modules in scope',
   mods:['PP high-volume lines','QM in-line inspection','MM aluminium coil buying','Coil and pallet stock','SD export and print orders','FI-CO in LKR and INR'],
   areas:['Coil yield and spoilage','Customer artwork control','Line downtime visibility','Export zone compliance','Intercompany trading','India GST and SL VAT'], ah:'Business areas addressed',
   ih:'Rollout approach', ints:[['Fit-to-standard','one template for Sri Lanka and India'],['Country versions','Sri Lanka and India, with GST e-invoicing'],['Intercompany','cans, ends and coil traded across entities'],['Migration Cockpit','materials, partners and balances staged']],
   r:[['2','countries on one cloud ERP',1],['720M','cans a year, Horana plant',1],['2B','can ends a year',1],['E2E','business processes in scope',1]] }
];
