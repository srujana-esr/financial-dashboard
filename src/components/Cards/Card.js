import React from 'react';
import Icon from '../Icon';

const CardComponent = ({ card }) => {
  const isDark = card.theme === 'dark';

  return (
    <div
      className={`rounded-lg p-6 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Balance</p>
          <h2 className="text-2xl font-bold">{card.balance}</h2>
        </div>
        <Icon
          name={isDark ? 'icon-ChipCardLight' : 'icon-ChipCardDark'}
          size={32}
        />
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm uppercase">Card Holder</p>
          <p className="text-lg font-medium">{card.cardHolder}</p>
        </div>
        <div>
          <p className="text-sm uppercase">Valid Thru</p>
          <p className="text-lg font-medium">{card.validThru}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-mono">{card.cardNumber}</p>
        <Icon
          name={isDark ? 'icon-contactless' : 'icon-contactLight'}
          size={24}
        />
      </div>
    </div>
  );
};

export default CardComponent;
