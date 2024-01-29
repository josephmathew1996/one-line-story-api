const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Story = sequelize.define('story', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
  no_of_sentences: {
    type: DataTypes.INTEGER,
    require: true,
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ongoing', 'completed'),
    defaultValue: 'ongoing', 
  },
},{
  underscored: true, // Use underscored naming conventions
  underscoredAll: true,
});

const StorySentence = sequelize.define('story_sentence', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  story_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  underscored: true, // Use underscored naming conventions
  underscoredAll: true,
});

// Establishing the foreign key relationship
StorySentence.belongsTo(Story, { foreignKey: 'storyId' });
Story.hasMany(StorySentence, { foreignKey: 'storyId' });

module.exports = {
  Story,
  StorySentence,
};
