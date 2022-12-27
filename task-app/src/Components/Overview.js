//this should just render tasks, while App.js will handle the input field with logic

import React from 'react';

const Overview = (props) => {
    const { tasks } = props;
  
    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    );
  };

export default Overview;