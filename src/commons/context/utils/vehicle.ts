import faker from 'faker'
import { Vehicle } from '../reducers/vehicle'

faker.locale = 'pt_BR'

/**
 * Util to generate a new random vehicle
 * @returns a randon vehicle
 */
export const generateNewVehicle = (): Vehicle => {
  return {
    id: faker.datatype.uuid(),
    name: faker.vehicle.vehicle(),
    manufacturer: faker.vehicle.manufacturer(),
    fuel: faker.vehicle.fuel(),
  }
}

/**
 * Util to generate a list of random vehicles
 * @returns list of random vehicles
 */
export const generateInitialState = (): Vehicle[] => {
  const temp: Vehicle[] = []

  Array.from({ length: 5 }, () => {
    temp.push(generateNewVehicle())
  })

  return temp
}
