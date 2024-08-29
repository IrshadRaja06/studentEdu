import React from 'react';

const Card = (props) => {
  const { icon, number, data, bgColor } = props;

  return (
    <div>
      <div className="card  text-white">
        <div className={`row rounded ${bgColor}`}>
          <i className={`${icon} fs-1 col text-start p-4`}></i>
          <p className='text-end col fs-4 p-4'>{number}</p>
          <p className='text-end fs-5 px-4'>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
