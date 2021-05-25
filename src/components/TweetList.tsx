import Avatar from "antd/lib/avatar";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import {
	HeartOutlined,
	MessageOutlined,
	RetweetOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { GET_ALL_TWEETS } from "../query/tweet";
type TweetListItemProps = {
	author: string;
	text: string;
	date: string;
	picture: string;
	likes: number;
	retweets: number;
	comments: number;
};
const TweetListItem: React.FC<TweetListItemProps> = ({
	author,
	text,
	date,
	picture,
	likes,
	retweets,
	comments,
}) => {
	return (
		<div className='tweet-list-item'>
			<Avatar size='large' icon={<UserOutlined />} />
			<div className='tweet-list-item__content'>
				<div className='tweet-list-item__head'>
					<strong className='tweet-list-item__head-name'> {author}</strong>
					<span className='tweet-list-item__head-time'> · {date}</span>
				</div>
				<div className='tweet-list-item__body'>
					<p className='tweet-list-item__body-text'>{text}</p>
					{picture ? (
						<Image
							className='tweet-list-item__body-img'
							width={400}
							height={400}
							src={picture}
						/>
					) : null}
				</div>
				<div className='tweet-list-item__foot'>
					<div className='tweet-list-item__foot-setting'>
						<Button
							className='tweet-list-item__foot-setting-icon'
							type='default'
							shape='circle'
							icon={<MessageOutlined />}
							size={"large"}
						/>
						<span className='tweet-list-item__foot-setting-count'>
							{comments}
						</span>
					</div>
					<div className='tweet-list-item__foot-setting'>
						<Button
							className='tweet-list-item__foot-setting-icon'
							type='default'
							shape='circle'
							icon={<RetweetOutlined />}
							size={"large"}
						/>
						<span className='tweet-list-item__foot-setting-count'>
							{retweets}
						</span>
					</div>
					<div className='tweet-list-item__foot-setting'>
						<Button
							className='tweet-list-item__foot-setting-icon'
							type='default'
							shape='circle'
							icon={<HeartOutlined />}
							size={"large"}
						/>
						<span className='tweet-list-item__foot-setting-count'>{likes}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const TweetList = () => {
	const { data, loading, error, refetch } = useQuery(GET_ALL_TWEETS);
	return (
		<div className='tweet-list'>
			{!loading ? (
				data.getAllTweets.map((tweet: any) => (
					<TweetListItem
						key={tweet.id}
						author={tweet.author}
						text={tweet.tweetText}
						date={tweet.createdAt}
						picture={tweet.pictureTweet}
						likes={tweet.countLikes}
						retweets={tweet.countRetweets}
						comments={tweet.countComments}
					/>
				))
			) : (
				<p>Loading</p>
			)}
		</div>
	);
};

export default TweetList;
