import { Page } from "./types";

export const PAGES: Record<
  Page,
  {
    label: string;
  }
> = {
  [Page.Home]: {
    label: "Home",
  },
  [Page.Stats]: {
    label: "Stats",
  },
};
