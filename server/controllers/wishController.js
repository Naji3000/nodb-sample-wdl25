const wishes = [
  {
    name: "Switzerland",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Peak_of_the_Matterhorn%2C_seen_from_Zermatt%2C_Switzerland.jpg"
  },
  {
    name: "Brazil",
    image: "https://live.staticflickr.com/2857/10410362514_4fbd678882_b.jpg"
  }
];

const getWishes = (req, res) => {
  res.json(wishes);
};

const addWish = (req, res) => {
  wishes.push(req.body);
  res.json(wishes);
};

const deleteWish = (req, res) => {
  wishes.splice(+req.params.id, 1);
  res.json(wishes);
};

module.exports = {
  getWishes,
  addWish,
  deleteWish
};
