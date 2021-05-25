import Avatar from "antd/lib/avatar/avatar";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { ADD_TWEET } from "../mutations/tweet";
import { GET_ALL_TWEETS } from "../query/tweet";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

const FormAddTweet = () => {
	const [tweetText, setTweetText] = React.useState("");
	const [addTweet] = useMutation(ADD_TWEET);
	const { data, loading, error, refetch } = useQuery(GET_ALL_TWEETS);
	const users: any = localStorage.getItem("user");
	const handleAddTweet = () => {
		try {
			addTweet({
				variables: {
					input: {
						author: JSON.parse(users).name,
						tweetText,
						userId: JSON.parse(users).id,
					},
				},
			}).then((state) => {
				refetch();
				setTweetText("");
			});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className='add-tweet'>
			{" "}
			<Avatar
				size='large'
				className='add-tweet__avatar'
				icon={<UserOutlined />}
			/>
			<TextArea
				className='add-tweet__form'
				placeholder='Что происходит?'
				autoSize={{ minRows: 3, maxRows: 5 }}
				value={tweetText}
				onChange={(e) => setTweetText(e.target.value)}
			/>
			<Button
				className='add-tweet__btn'
				type='primary'
				shape='round'
				size={"large"}
				onClick={handleAddTweet}
			>
				Твитнуть
			</Button>
		</div>
	);
};

export default FormAddTweet;
