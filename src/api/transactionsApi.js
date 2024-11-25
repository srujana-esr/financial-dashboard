export const fetchTransactions = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            label: 'Deposit from my Card',
            date: '28 January 2021',
            amount: '-$850',
            type: 'expense',
          },
          {
            id: 2,
            label: 'Deposit Paypal',
            date: '25 January 2021',
            amount: '+$2,500',
            type: 'income',
          },
          {
            id: 3,
            label: 'Jemi Wilson',
            date: '21 January 2021',
            amount: '+$5,400',
            type: 'income',
          },
        ]);
      }, 1000);
    });
  };
  