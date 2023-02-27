const tweets = [];

function addTweet(username, tweet, avatar) {
  tweets.push({ username, tweet, avatar });
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

const tweetRepository = {
  addTweet,
  filterUserTweets,
  reverseTweets,
  getLimitedTweets
};

export default tweetRepository;