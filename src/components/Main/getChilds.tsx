import React from 'react';
import { LineCoupleInterface } from '../../types/types';
import Person from '../Person/Person';

/**
 * Recursive function to display the Childs of the root couple
 * @param couple
 */
export const getChilds = (couple: LineCoupleInterface) => {
  return couple.child.map((children) => {
    return (
      <div key={children.person1.id} className={`col-${children.person2 ? 6 : 3}`}>
        <Person person={children.person1}/>
        {children.person2?.name ? <Person person={children.person2}/> : null}
        <div className="row mt-5">
          {getChilds(children)}
        </div>
      </div>
    )
  })
}
