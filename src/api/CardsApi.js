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
            theme: 'dark',
          },
          {
            id: 2,
            balance: '$2,300',
            cardHolder: 'Jane Doe',
            cardNumber: '4556 **** **** 7890',
            validThru: '08/23',
            theme: 'light',
          },
        ]);
      }, 1000);
    });
  };
  