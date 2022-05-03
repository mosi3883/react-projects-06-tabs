import React from 'react';

const TabMenu = ({ jobs, jobIndex, onClick }) => {
  const handleClick = (index) => {
    onClick(index);
  };
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => (
        <button
          key={item.id}
          onClick={() => handleClick(index)}
          className={`job-btn ${index === jobIndex ? 'active-btn' : ''}`}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
