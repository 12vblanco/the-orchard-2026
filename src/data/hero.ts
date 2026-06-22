import type { Cta } from "../components/button/Button";

export const ctaContent: Cta[] = [
  { label: "See the menus", path: "/#menu", variant: "primary" },
  { label: "Book a table", path: "/#booking", variant: "secondary" },
];

type Policy = {
  prefix?: string;
  emphasis: string;
  suffix: string;
};

export const policies: Policy[] = [
  {
    emphasis: "**Children ",
    suffix: "must be escorted & supervised by an adult at all times. ",
  },
  {
    prefix: "** Please note",
    emphasis: "only assistance dogs",
    suffix: "are allowed in The Orchard.",
  },
];
