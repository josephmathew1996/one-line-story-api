const express = require('express');
const { createStory, getAllStories, addSentenceToStory, getStoryById, updateStoryById } = require('../controllers/storyContoller');

const router = express.Router();

router.get('', getAllStories);
router.post('', createStory);

router.get('/:story_id', getStoryById);
router.patch('/:story_id', updateStoryById)

router.post('/:story_id/sentences', addSentenceToStory);

module.exports = router;
