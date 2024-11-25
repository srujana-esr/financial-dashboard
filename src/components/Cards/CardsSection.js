import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/slices/cardsSlice';
import CardComponent from './Card';

const CardsSection = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (!cards || cards.length === 0) {
    return <div>Loading cards...</div>;
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#343C6A]">My Cards</h2>
        <button className="text-[#8BA3CB] hover:underline">See All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
