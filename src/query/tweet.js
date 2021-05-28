import { gql } from "@apollo/client";

export const GET_ALL_TWEETS = gql`
  query {
    getAllTweets {
      id
      author
      createdAt
      tweetText
      pictureTweet
      countLikes
      countRetweets
      countComments
    }
  }
`;
