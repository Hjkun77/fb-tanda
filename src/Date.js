import React from 'react';

const Date = props => {
  const { weekday, date } = props;
  return (
    <div>
      <p className="weekday">{weekday}</p>
      <p className="date">{date}</p>
    </div>
  );
}

export default Date;
