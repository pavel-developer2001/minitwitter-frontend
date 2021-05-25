import { gql } from "@apollo/client";
export const ADD_TWEET = gql`
	mutation addTweet($input: TweetCreateInput) {
		addTweet(input: $input) {
			id
			author
			tweetText
		}
	}
`;
