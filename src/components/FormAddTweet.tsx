import Avatar from "antd/lib/avatar/avatar";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";

const FormAddTweet = () => {
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
			/>
			<Button
				className='add-tweet__btn'
				type='primary'
				shape='round'
				size={"large"}
			>
				Твитнуть
			</Button>
		</div>
	);
};

export default FormAddTweet;
