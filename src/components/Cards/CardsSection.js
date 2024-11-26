import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import { fetchCards } from '../../api/CardsApi';

const CardsSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await fetchCards();
      setCards(fetchedCards.slice(0, 2)); // Only the first 2 cards
    };
    fetchData();
  }, []);

  return (
    <div className="mb-7">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#343C6A]">My Cards</h2>
        <a href="/credit-cards" className="text-md font-bold hover:text-[#343C6A] text-[#8BA3CB] hover:underline">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
