import {
  GetRootCoupleType, getRootParentsType,
  PersonInterface
} from '../types/types';
import { arrayWithoutFirstElement } from './common';
import { findCoupleMember } from './getDataTree';

/**
 * Recursive function to find the root couple
 * @param peopleWithNoParents
 */
const getRootCouple: GetRootCoupleType = (peopleWithNoParents: PersonInterface[]) => {
  const coupleMember = findCoupleMember(peopleWithNoParents, peopleWithNoParents[0]);
  if (coupleMember.length > 0) {
    return [coupleMember[0], peopleWithNoParents[0]];
  }
  return getRootCouple(arrayWithoutFirstElement(peopleWithNoParents));
}

/**
 * Find the people without parents and return the root couple
 * @param data
 */
export const getRootParents: getRootParentsType = (data: PersonInterface[]) => {
  const peopleWithNoParents = data.filter((person) => {
    return person.parents.length === 0
  });
  return getRootCouple(peopleWithNoParents);
}
