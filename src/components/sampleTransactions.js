//add expenses 
const daysAgo = 226;

const getRandomDate = (daysAgo) => {
  const today = new Date();
  const randomDay = Math.floor(Math.random() * daysAgo);
  const date = new Date(today);
  date.setDate(today.getDate() - randomDay);
  return date;
};

const getRandomAmount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const unorderedTransactions = [];

const categories = ['Groceries', 'Dinner' , 'Takeout','Shopping', 'Entertainment', 'Bills', 'Savings', 'Gas Station', 'Donations', 'Home Maintenance', 'Subscriptions', 'Health/Fitness', 'Pet Care', 'Gift'];
const necessityLevels = ['Essential', 'Optional', 'Savings'];

for (let i = 0; i < 300; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const necessity = necessityLevels[Math.floor(Math.random() * necessityLevels.length)];
  const amount = getRandomAmount(10, 100);
  const description = `${category}`;
  const date = getRandomDate(daysAgo);
  const type = 'expense';

  unorderedTransactions.push({
    type,
    amount,
    description,
    date,
    necessity,
    category,
  });
}

//add income
for (let i = 0; i < 90; i++) {
  const type = 'Income';
  const category = 'Income';
  const description = 'Income';
  const necessity = '';
  const date = getRandomDate(daysAgo);
  const amount = getRandomAmount(300, 500);

  unorderedTransactions.push({
    type,
    amount,
    description,
    date,
    necessity,
    category,
  });
}

const sampleTransactions = unorderedTransactions.slice().sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

export default sampleTransactions;
