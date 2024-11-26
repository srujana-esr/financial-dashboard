export const fetchExpenseStatistics = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { category: 'Entertainment', value: 30 },
          { category: 'Bill Expense', value: 15 },
          { category: 'Investment', value: 20 },
          { category: 'Others', value: 35 },
        ]);
      }, 1000);
    });
  };
  