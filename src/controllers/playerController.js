const Player  = require('../entities/player');

const getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Player.findAll();
    res.status(200).json(allPlayers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPlayers,
};
