import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon';
import { fetchTransactions } from '../../redux/slices/transactionsSlice';

const transactionIcons = {
  card: {
    icon: 'icon-card',
    background: '#FFF5D9',
  },
  paypal: {
    icon: 'icon-paypal',
    background: '#E7EDFF',
  },
  other: {
    icon: 'icon-other',
    background: '#DCFAF8',
  },
};

const getIconType = (label) => {
  if (label.toLowerCase().includes('card')) return 'card';
  if (label.toLowerCase().includes('paypal')) return 'paypal';
  return 'other';
};

const RecentTransactions = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  if (!transactions || transactions.length === 0) {
    return <div>No Recent Transactions</div>;
  }

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#343C6A]">Recent Transactions</h2>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
      <ul className="space-y-4">
        {transactions.map((transaction) => {
          const iconType = getIconType(transaction.label);
          return (
            <li key={transaction.id} className="flex items-center space-x-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: transactionIcons[iconType].background }}
              >
                <Icon
                  name={transactionIcons[iconType].icon}
                  size={20}
                  className="text-[#343C6A]"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#343C6A]">
                  {transaction.label}
                </p>
                <p className="text-xs text-[#8BA3CB]">{transaction.date}</p>
              </div>
              <div
                className={`text-sm font-bold ${
                  transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {transaction.amount}
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
