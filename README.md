# One-Line-Story-Game API

This API server provides endpoints for managing one-line-story-game.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
  - [Create a New Story](#create-a-new-story)
  - [Fetch All Stories](#fetch-all-stories)
  - [Add a Sentence to a Story](#add-sentence-to-story)
  - [View a Story](#view-a-story)
  - [Patch a Story](#update-a-story)
- [Migrate Users](#migrate-users)
- [How to start the server](#start-the-server)
- [Docker](#docker)

## Prerequisites

- Node.js
- Express framework
- npm or yarn
- Docker (optional)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/josephmathew1996/one-line-story-api.git
cd one-line-story-api
```

## Endpoints

### Create a new story

URL: /stories

Method: POST

Request Body:
```json
{
  "title": "The Amazing Story",
  "no_of_sentences": 3,
  "topic": "Adventure"
}
```

Response Body: 
```json
{
  "id": 1,
  "title": "The Amazing Story",
  "no_of_sentences": 3,
  "topic": "Adventure",
  "status": "ongoing",
  "createdAt": "2022-01-25T12:00:00Z",
  "updatedAt": "2022-01-25T12:00:00Z"
}
```

### Fetch all stories

URL: /stories

Method: GET

Response Body: 
```json
{
  "ongoing": [
    {
      "id": 1,
      "title": "The Amazing Story",
      "no_of_sentences": 3,
      "topic": "Adventure",
      "status": "ongoing"
    }
  ],
  "completed": []
}
```

### Add sentence to story

URL: /stories/:storyId/sentences

Method: POST

Request Body:
```json
{
  "content": "Once upon a time..."
}
```

Response Body:
```json
{
  "id": 1,
  "content": "Once upon a time...",
  "storyId": 1,
  "createdAt": "2022-01-25T12:00:00Z",
  "updatedAt": "2022-01-25T12:00:00Z"
}
```

### View a story
URL: /stories/:storyId

Method: GET

Response Body:
```json
{
  "id": 1,
  "title": "The Amazing Story",
  "no_of_sentences": 3,
  "topic": "Adventure",
  "status": "ongoing",
  "sentences": ["Once upon a time...", "In a land far, far away...", "The end."]
}
```


### Update a story

URL: /stories/:storyId

Method: PATCH

Request Body:
```json
{
  "status": "completed"
}
```

Response Body: 
```json
{
  "id": 1,
  "title": "The Amazing Story",
  "no_of_sentences": 3,
  "topic": "Adventure",
  "status": "completed",
  "sentences": ["Once upon a time...", "In a land far, far away...", "The end."]
}
```

Note: 

I haven't included many user input validations and other business logic that should be added from the realistic point of view. I have only covered the happy path and the limited scope of the user stories provided in the coding challenge. There are lot of improvements and optimisations that can be added to this api server.

## Migrate users 

We are using `sequelize-cli` library to perform db migration.

Migration file is already created and stored inside `migrations` folder.

Run the migration

Syntax: 

```bash
npx sequelize-cli db:migrate --url 'mysql://your_database_username:your_database_password@127.0.0.1:3306/your_database_name'
```

```bash
npx sequelize-cli db:migrate --url 'mysql://myuser:password@localhost:3308/storygame'
```

## Start the server

Follow all the commands in the `Makefile`
