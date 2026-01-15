export type Aircraft = {
  registration: string;
  manufacturer: string;
  model: string;
  operator?: string;
  status: string;
  source: "ANAC";
};
