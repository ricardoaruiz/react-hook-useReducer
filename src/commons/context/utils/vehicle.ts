// import React from 'react'
import faker from 'faker'

import { Prohibited } from '@styled-icons/fluentui-system-filled/Prohibited'
import { StyledIcon } from '@styled-icons/styled-icon'
import * as SimpleIcons from '@styled-icons/simple-icons'

import { Vehicle } from '../reducers/vehicle'

faker.locale = 'pt_BR'

type IconsMap = { [key: string]: StyledIcon }

/**
 * Map Simple Icons on a structure key and value
 */
const MappedIcons = Object.keys(SimpleIcons).reduce(
  (object: IconsMap, item) => {
    object[item.toString()] = Object.values(SimpleIcons).filter((si) => {
      return si.displayName?.includes(item.toString())
    })[0]
    return object
  },
  {} as IconsMap
)

/**
 * Util to generate a new random vehicle
 * @returns a randon vehicle
 */
export const generateNewVehicle = (): Vehicle => {
  const manufacturer = faker.vehicle.manufacturer()
  const iconName = manufacturer.split(' ')[0]
  const icon = MappedIcons[iconName] || Prohibited

  return {
    id: faker.datatype.uuid(),
    name: faker.vehicle.vehicle(),
    manufacturer,
    fuel: faker.vehicle.fuel(),
    icon,
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
