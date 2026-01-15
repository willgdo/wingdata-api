import axios from "axios";

const ANAC_URL =
  "https://sistemas.anac.gov.br/dadosabertos/Aeronaves/RAB/dados_aeronaves.json";

export async function fetchAnacAircrafts() {
  const response = await axios.get(ANAC_URL, {
    timeout: 15000,
  });

  return response.data;
}
