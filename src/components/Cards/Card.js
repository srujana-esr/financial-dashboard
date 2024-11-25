import React, { useState } from 'react';
import Icon from '../Icon';

const Card = ({ card }) => {
  const [isHovered, setIsHovered] = useState(card.theme === 'dark');

  return (
    <div
      className={`rounded-2xl shadow-md transition-all duration-300 ${
        isHovered ? 'bg-dark-gradient text-white' : 'bg-white text-[#343C6A]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-6'>
      <div className="flex justify-between items-center pb-4">
        <div>
        <p className={`text-xs font-semibold ${isHovered ? 'text-white':'text-[#718EBF]'}`}>Balance</p>
        <h3 className="text-xl font-bold mt-2">{card.balance}</h3>
        </div>
        <Icon
          name={isHovered ? 'icon-ChipCardLight' : 'icon-ChipCardDark'}
          className={`${isHovered ? 'text-white' : 'text-[#8BA3CB]'}`}
          size={35}
        />
      </div>
      <div className="flex items-center mt-4">
        <div>
          <p className="text-xs">CARD HOLDER</p>
          <p className="font-semibold">{card.cardHolder}</p>
        </div>
        <div className='pl-8 ml-4'>
          <p className="text-xs">VALID THRU</p>
          <p className="font-semibold">{card.validThru}</p>
        </div>
      </div>
      </div>
      <div className="px-6 py-3 border-t border-gray-200" >
      <div className="flex justify-between items-center">
        <p className="font-mono text-xl">{card.cardNumber}</p>
        <Icon
          name={isHovered ? 'icon-contactLight':'icon-contactless'}
          className={`${isHovered ? 'text-white' : 'text-[#8BA3CB]'}`}
          size={35}
        />
      </div>
      </div>
    </div>
  );
};

export default Card;
