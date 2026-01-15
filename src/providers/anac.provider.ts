import axios from "axios";

const ANAC_URL =
  "https://sistemas.anac.gov.br/dadosabertos/Aeronaves/RAB/dados_aeronaves.json";

let cache: any[] | null = null;
let lastFetch = 0;

const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 horas

export async function fetchAnacAircrafts() {
  const now = Date.now();

  if (cache && now - lastFetch < CACHE_TTL) {
    return cache;
  }

  try {
    const response = await axios.get(ANAC_URL, {
      timeout: 20000,
    });

    cache = response.data;
    lastFetch = now;

    return cache;
  } catch (error) {
    if (cache) {
      return cache;
    }

    throw error;
  }
}
