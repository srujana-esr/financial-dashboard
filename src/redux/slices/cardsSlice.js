import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCards as fetchCardsApi } from '../../api/cardsApi';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await fetchCardsApi();
  return response;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: { cards: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export default cardSlice.reducer;
