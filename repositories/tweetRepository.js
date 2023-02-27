import Tweet from "../classes/tweetClass.js";

const tweets = [];

function addTweet(username, tweet, avatar) {
  tweets.push(new Tweet(username, tweet, avatar));
};

function filterUserTweets(username) {
  return tweets.filter(t => t.username === username);
}

function getLimitedTweets(page) {
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  return [...tweets].reverse().slice(start, end);
}

function reverseTweets() {
  return [...tweets].reverse();
}

function tweetsSize() {
  return tweets.length;
}

const tweetRepository = {
  addTweet,
  filterUserTweets,
  reverseTweets,
  getLimitedTweets,
  tweetsSize
};

export default tweetRepository;