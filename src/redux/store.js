import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardsSlice';
import transactionReducer from './slices/transactionsSlice';

const store = configureStore({
  reducer: {
    cards: cardReducer,
    transactions: transactionReducer,
  },
});

export default store;
