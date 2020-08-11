export interface PersonInterface {
  id: number,
  name: string,
  children: number[],
  gender: string,
  parents: number[],
}

export interface LineCoupleInterface  {
  person1: PersonInterface,
  person2: PersonInterface,
  child: LineCoupleInterface[];
}

export interface PersonPropsInterface {
  person: PersonInterface;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum ColorOption {
  BLUE = 'lightblue',
  PINK = 'lightpink',
}

export type GetChildrenDetailsType = (id: number) => PersonInterface;
export type GetRootCoupleType = (peopleWithNoParents: PersonInterface[]) => PersonInterface[];
export type getRootParentsType = (data: PersonInterface[]) => PersonInterface[];
export type IsCoupleMemberType = (otherParent: PersonInterface, person: PersonInterface) => boolean;
export type IsEqualArrayType = (array1: number[], array2: number[]) => boolean;
export type LineType = LineCoupleInterface[];
export type FindCoupleMemberType = (personList: PersonInterface[], personToMarry: PersonInterface) => PersonInterface[];
export type GetCoupleObjectType = (personDetails: PersonInterface, partner: PersonInterface) => LineCoupleInterface;
export type RecurseOnChildrenOrBreak = (childrenId: number[], updatedData: LineCoupleInterface[]) => LineCoupleInterface[];
export type GetChildrenListType = (childrenId: number[], data?: LineCoupleInterface[]) => LineCoupleInterface[];
export type GetDataTree = () => LineCoupleInterface;

