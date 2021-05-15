import Avatar from "antd/lib/avatar";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import {
	HeartOutlined,
	MessageOutlined,
	RetweetOutlined,
} from "@ant-design/icons";

const TweetListItem = () => {
	return (
		<div className='tweet-list-item'>
			<Avatar size='large' icon={<UserOutlined />} />
			<div className='tweet-list-item__content'>
				<div className='tweet-list-item__head'>
					<strong className='tweet-list-item__head-name'> Dark side</strong>
					<span className='tweet-list-item__head-time'> · 5 минут назад</span>
				</div>
				<div className='tweet-list-item__body'>
					<p className='tweet-list-item__body-text'>
						Murders at the House of Death by Masahiro Imamura and Masaru
						Miyokawa has ended today with Chapter 24 in Shonen Jump+ App. Final
						Volume 4 will be out on July 2nd.
					</p>
					<Image
						className='tweet-list-item__body-img'
						width={400}
						height={400}
						src='https://pbs.twimg.com/media/E1W_V5OXMAQoi7s?format=png&name=small'
					/>
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
						<span className='tweet-list-item__foot-setting-count'>1500</span>
					</div>
					<div className='tweet-list-item__foot-setting'>
						<Button
							className='tweet-list-item__foot-setting-icon'
							type='default'
							shape='circle'
							icon={<RetweetOutlined />}
							size={"large"}
						/>
						<span className='tweet-list-item__foot-setting-count'>1500</span>
					</div>
					<div className='tweet-list-item__foot-setting'>
						<Button
							className='tweet-list-item__foot-setting-icon'
							type='default'
							shape='circle'
							icon={<HeartOutlined />}
							size={"large"}
						/>
						<span className='tweet-list-item__foot-setting-count'>1500</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const TweetList = () => {
	return (
		<div className='tweet-list'>
			<TweetListItem />
			<TweetListItem />
			<TweetListItem />
			<TweetListItem />
		</div>
	);
};

export default TweetList;
