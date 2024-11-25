import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactions as fetchTransactionsApi } from '../../api/transactionsApi';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const response = await fetchTransactionsApi();
    return response;
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: { transactions: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export default transactionSlice.reducer;
