import { fetchAnacAircrafts } from '../providers/anac.provider'
import { Aircraft } from '../types/aircraft'

export async function findAircraftByRegistration(
  registration: string
): Promise<Aircraft | null> {
  const normalizedReg = registration.toUpperCase()

  const data = await fetchAnacAircrafts()

  const found = data.find(
    (item: any) =>
      item.MARCA?.toUpperCase() === normalizedReg
  )

  if (!found) {
    return null
  }

  return {
    registration: found.MARCA,
    manufacturer: found.NMFABRICANTE,
    model: found.DSMODELO,
    operator: found.NMOPERADOR,
    status: found.DTCANC ? 'Cancelled' : 'Active',
    source: 'ANAC'
  }
}
