import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/slices/transactionsSlice';

const RecentTransactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (!transactions || transactions.length === 0) {
    return <div>No recent transaction.</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-[#343C6A]">Recent Transaction</h2>
      <ul className="mt-4 space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
            <div>
              <p className="font-medium">{transaction.label}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
            <p className={`text-lg ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
