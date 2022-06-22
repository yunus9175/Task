import React, { useState, useRef, useEffect } from 'react';
import DropBox from './DropBox';

const Dashboard = () => {
  const [option, setOption] = useState([
    { id: 1, label: 'React', value: 'react' },
    { id: 2, label: 'Angular', value: 'angular' },
    { id: 3, label: 'Vue', value: 'vue' },
    { id: 4, label: 'Ember', value: 'ember' },
  ]);
  // const searchRef = useRef(null);
  // useEffect(() => {
  //   console.log('searchRef ', searchRef.current);
  // }, [openDrop]);

  return (
    <div>
      <h2>welcome to Dashboard</h2>
      <DropBox options={option} setOption={setOption} />
    </div>
  );
};

export default Dashboard;
