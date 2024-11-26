export const fetchBalanceHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: "Jul", amount: 200 },
        { month: "Aug", amount: 550 },
        { month: "Sep", amount: 275 },
        { month: "Oct", amount: 450 },
        { month: "Nov", amount: 320 },
        { month: "Dec", amount: 600 },
        { month: "Jan", amount: 250 },
      ]);
    }, 100);
  });
};
