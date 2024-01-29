const {Story, StorySentence}  = require('../entities/Story');

const getAllStories = async (req, res) => {
  try {
    // Fetch all stories from the database
    const allStories = await Story.findAll({
      order: [['status', 'ASC']],
    });

    // Return the sorted stories in the response
    res.status(200).json({
      items: allStories,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStoryById = async (req, res) => {
  try {
    const { story_id } = req.params;

    // Find the story by ID
    const story = await Story.findByPk(story_id);

    // Check if the story exists
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Fetch the sentences based on the story status
    let sentences;
    if (story.status === 'ongoing') {
      // If the story is ongoing, show only the last sentence
      sentences = await StorySentence.findAll({
        where: { story_id },
        order: [['created_at', 'DESC']],
        limit: 1,
      });
    } else {
      // If the story is completed, show all sentences
      sentences = await StorySentence.findAll({ where: { story_id } });
    }
    // Return the story details along with the sentences
    res.status(200).json({
      id: story.id,
      title: story.title,
      no_of_sentences: story.no_of_sentences,
      topic: story.topic,
      status: story.status,
      sentences: sentences.map((sentence) => ({
        id: sentence.id,
        content: sentence.content,
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createStory = async (req, res) => {
  try {
    const { player_id, title, no_of_sentences, topic } = req.body;

    // Create the story
    const newStory = await Story.create({ player_id, title, no_of_sentences, topic });

    res.status(201).json(newStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addSentenceToStory = async (req, res) => {
  try {
    const { story_id } = req.params;
    const { player_id, content } = req.body;

    // Check if the story exists
    const existingStory = await Story.findByPk(story_id);
    if (!existingStory) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // we can add if story sentence limit is reached already...

    // Add a sentence to the story
    const newSentence = await StorySentence.create({ player_id, story_id, content });

    res.status(201).json(newSentence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateStoryById = async (req, res) => {
  try {
    const { story_id } = req.params;
    const { status } = req.body;

    // Find the story by ID
    const story = await Story.findByPk(story_id);

    // Check if the story exists
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Logic to update the story status in the database
    const updatedStory = await Story.update(
      { status },
      { where: { id: story_id }, returning: true }
    );

    // Respond with the updated story
    res.status(200).json(updatedStory[1][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllStories,
  getStoryById,
  createStory,
  addSentenceToStory,
  updateStoryById,
};
