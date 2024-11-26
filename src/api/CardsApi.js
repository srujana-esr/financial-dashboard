export const fetchCards = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          balance: '$5,756',
          cardHolder: 'Eddy Cusuma',
          cardNumber: '3778 **** **** 1234',
          validThru: '12/22',
          theme: 'light',
        },
        {
          id: 2,
          balance: '$2,300',
          cardHolder: 'Jane Doe',
          cardNumber: '4556 **** **** 7890',
          validThru: '08/23',
          theme: 'light',
        },
        {
          id: 3,
          balance: '$9,125',
          cardHolder: 'John Smith',
          cardNumber: '3789 **** **** 5678',
          validThru: '05/24',
          theme: 'light',
        },
        {
          id: 4,
          balance: '$3,800',
          cardHolder: 'Alice Johnson',
          cardNumber: '4999 **** **** 9999',
          validThru: '01/25',
          theme: 'light',
        },
        {
          id: 5,
          balance: '$1,450',
          cardHolder: 'Bob Brown',
          cardNumber: '4111 **** **** 2222',
          validThru: '11/24',
          theme: 'light',
        },
      ]);
    }, 100);
  });
};
