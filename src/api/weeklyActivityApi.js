export const fetchWeeklyActivity = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { day: 'Sat', deposit: 200, withdraw: 500 },
          { day: 'Sun', deposit: 300, withdraw: 400 },
          { day: 'Mon', deposit: 400, withdraw: 300 },
          { day: 'Tue', deposit: 500, withdraw: 600 },
          { day: 'Wed', deposit: 200, withdraw: 100 },
          { day: 'Thu', deposit: 300, withdraw: 500 },
          { day: 'Fri', deposit: 400, withdraw: 400 },
        ]);
      }, 1000);
    });
  };
  