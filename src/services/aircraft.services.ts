import { fetchAnacAircrafts } from "../providers/anac.provider";
import { normalizeRegistration } from "../utils/normalizeRegistration";

export async function findAircraftByRegistration(registration: string) {
  const normalizedReg = normalizeRegistration(registration);

  const data = await fetchAnacAircrafts();

  const found = data?.find((item: any) => item.MARCA === normalizedReg);

  if (!found) {
    return null;
  }

  return {
    registration: found.MARCA,
    manufacturer: found.NMFABRICANTE,
    model: found.DSMODELO,
    operator: found.NMOPERADOR,
    status: found.DTCANC ? "Cancelled" : "Active",
    source: "ANAC",
  };
}
