import tweetRepository from "../repositories/tweetRepository.js";

function postTweet (req, res) {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = usuarios.find(user => user.username === username);

  tweetRepository.addTweet(username, tweet, avatar);

  res.status(201).send('OK, seu tweet foi criado');
};

function getUserTweets (req, res) {
  const { username } = req.params;

  const tweetsDoUsuario = tweetRepository.filterUserTweets(username);

  res.status(200).send(tweetsDoUsuario);
};

function getTweets (req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }

  if (tweets.length <= 10) {
    return res.send(tweetRepository.reverseTweets());
  }

  res.status(200).send(tweetRepository.getLimitedTweets(page));
};




const tweetsController = {
  postTweet,
  getUserTweets,
  getTweets
};

export default tweetsController;