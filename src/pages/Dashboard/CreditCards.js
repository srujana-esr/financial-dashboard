import React, { useEffect, useState } from 'react';
import { fetchCards } from '../../api/CardsApi';
import Card from '../../components/Cards/Card';

const CreditCardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await fetchCards();
      setCards(fetchedCards); // Display all cards
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardsPage;
