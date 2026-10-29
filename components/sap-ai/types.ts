// Shapes shared by the page components, so one set of interactive pieces can
// serve several pages (Business AI, GROW with SAP, RISE with SAP).

export type Photo = { src: string; alt: string };

export type PageSection = { id: string; label: string };

export type StackLayer = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  points: string[];
};

export type ExplorerItem = {
  id: string;
  label: string;
  photo?: Photo;
  /** A highlighted chip under the title, such as the headline agent's name. */
  badge?: string;
  headline: string;
  also: string[];
  alsoLabel?: string;
};

export type ProofStat = {
  prefix?: string;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  source: string;
};

export type Step = { title: string; body: string };
