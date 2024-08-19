export enum Page {
  "Home" = "",
  "Stats" = "stats",

}

export type SystemInfo = {
  hostname: string;
  platform: string;
  arch: string;
  cpuTemp: number;
  cpuUsage: string[];
  memoryUsage: {
    total: number;
    used: number;
    free: number;
  };
};