//add expenses 
const daysAgo = 365;

const getRandomDate = (daysAgo) => {
  const today = new Date();
  const randomDay = Math.floor(Math.random() * daysAgo);
  const date = new Date(today);
  date.setDate(today.getDate() - randomDay);
  return date;
};

<<<<<<< HEAD
const getRandomAmount = (min, max) => {  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const unorderedTransactions = [];
=======
const getRandomAmount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const unorderedTransactions = [];

>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
const categories = ['Groceries', 'Dinner' , 'Takeout','Shopping', 'Entertainment', 'Bills', 'Savings', 'Gas Station', 'Donations', 'Home Maintenance', 'Subscriptions', 'Health/Fitness', 'Pet Care', 'Gift'];
const necessityLevels = ['Essential', 'Optional', 'Savings'];

for (let i = 0; i < 300; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const necessity = necessityLevels[Math.floor(Math.random() * necessityLevels.length)];
<<<<<<< HEAD
  const amount = getRandomAmount(10, 500);
=======
  const amount = getRandomAmount(10, 300);
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
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

<<<<<<< HEAD
for (let i = 0; i < 250; i++) {
=======
//add income
for (let i = 0; i < 150; i++) {
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
  const type = 'Income';
  const category = 'Income';
  const description = 'Income';
  const necessity = '';
  const date = getRandomDate(daysAgo);
  const amount = getRandomAmount(300, 600);

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
