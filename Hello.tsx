import React, { useState } from 'react';
import cn from 'classnames';

const arr = [1,2,3,4,5,5,5,76,87,9,89,87,90,34]

export const Pagination = ({pageNumber = 0}) => {
  const [activeItem, setActiveItem] = useState<number>(pageNumber);
  return (
    <div
      className='pagination'>

        {arr.map((item, idx) => (
          <button
            key={item}
            className={cn('item', { 'itemActive': activeItem === idx })}
            onClick={() => setActiveItem(idx)}
          >{item}</button>
        ))}
      </div>
  );
};
