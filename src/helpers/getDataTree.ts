import {
  FindCoupleMemberType,
  GetChildrenDetailsType,
  GetChildrenListType,
  GetCoupleObjectType, GetDataTree, IsCoupleMemberType, PersonInterface,
  RecurseOnChildrenOrBreak,
} from '../types/types';
import { initialData } from '../data/initialData';
import { getRootParents } from './getRootParents';
import { arrayWithoutFirstElement, isEqualArray } from './common';

/**
 * Get person details object
 * @param id
 */
const getPersonDetails: GetChildrenDetailsType = (id) => {
  return initialData.filter((data) => id === data.id)[0]
}

/**
 * Find the couple member in an array
 * @param personList
 * @param personToMarry
 */
export const findCoupleMember: FindCoupleMemberType = (personList, personToMarry) => {
  return personList.filter((person) => isCoupleMember(person, personToMarry));
}

/**
 * Verify that two people are a couple (same child)
 * @param otherParent
 * @param person
 */
const isCoupleMember: IsCoupleMemberType = (otherParent: PersonInterface, person: PersonInterface) => {
  return (otherParent.id !== person.id) && person.children.length > 0 && isEqualArray(otherParent.children, person.children);
}

/**
 * Build a couple object
 * @param personDetails
 * @param partner
 */
const getCoupleObject: GetCoupleObjectType = (personDetails, partner) => ({
  person1: personDetails,
  person2: partner,
  child: getChildrenList(personDetails.children)
});

/**
 * Continue the recursion or return the value
 * @param childrenId
 * @param updatedData
 */
const recurseOnChildrenOrBreak: RecurseOnChildrenOrBreak = (childrenId, updatedData) => {
  if (childrenId.length > 0) {
    return getChildrenList(childrenId, updatedData);
  } else {
    return updatedData;
  }
}

/**
 * Main recursive function to build the data tree
 * @param childrenId
 * @param data
 */
const getChildrenList: GetChildrenListType = (childrenId, data= []) => {
  const personDetails = getPersonDetails(childrenId[0]);
  const filteredArray = arrayWithoutFirstElement(childrenId);
  if (personDetails) {
    const coupleMember = findCoupleMember(initialData, personDetails);
    const coupleObject = getCoupleObject(personDetails, coupleMember[0])
    const updatedData = [...data, coupleObject];
    return recurseOnChildrenOrBreak(filteredArray, updatedData);
  }
  return recurseOnChildrenOrBreak(filteredArray, data);
}

/**
 * Function to get the Data tree used to build the UI
 */
export const getDataTree: GetDataTree = () => {
  const rootParent = getRootParents(initialData);
  return getCoupleObject(rootParent[0], rootParent[1]);
}

