import React from 'react';
import { ColorOption, Gender, PersonPropsInterface } from '../../types/types';
import { personClass } from './style';

/**
 * Component used to display a Person
 * @param person
 */
const Person =  ({ person }: PersonPropsInterface) => {
    const color = person.gender === Gender.MALE ? ColorOption.BLUE : ColorOption.PINK;
    return <div style={personClass(color)}>{person.name}</div>;
};


export default Person;
