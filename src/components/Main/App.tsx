import React from 'react';
import Person from '../Person/Person';
import { getChilds } from './getChilds';
import { getDataTree } from '../../helpers/getDataTree';

const App = () => {
  const dataTree = getDataTree();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Person person={dataTree.person1}/>
          <Person person={dataTree.person2}/>
        </div>
      </div>
      <div className="row mt-5">
        {getChilds(dataTree)}
      </div>
    </div>
  );
}

export default App;
