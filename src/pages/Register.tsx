import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};
	return (
		<div className='auth'>
			<Form
				name='normal_login'
				className='login-form'
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item
					name='username'
					rules={[{ required: true, message: "Введите имя" }]}
				>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						placeholder='Введите имя'
					/>
				</Form.Item>
				<Form.Item
					name='email'
					rules={[{ required: true, message: "Введите email" }]}
				>
					<Input
						prefix={<MailOutlined className='site-form-item-icon' />}
						placeholder='Введите email'
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: "Введите пароль" }]}
				>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='Введите пароль'
					/>
				</Form.Item>
				<Form.Item
					name='password2'
					rules={[{ required: true, message: "Введите пароль повторно" }]}
				>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password2'
						placeholder='Введите пароль повторно'
					/>
				</Form.Item>
				<div className='auth__params'>
					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
						>
							Зарегистрироваться
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};

export default Register;
