import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../mutations/user";

const Register = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");

	const [newUser] = useMutation(REGISTER_USER);

	const handleRegisterUser = (e: any) => {
		e.preventDefault();
		try {
			newUser({
				variables: {
					input: {
						name,
						email,
						password,
						password2,
					},
				},
			}).then((state) => {
				console.log(state.data.registerUser);
			});
		} catch (e) {
			console.log(e);
		}
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
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Item>
				<Form.Item
					name='email'
					rules={[{ required: true, message: "Введите email" }]}
				>
					<Input
						prefix={<MailOutlined className='site-form-item-icon' />}
						placeholder='Введите email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
						value={password2}
						onChange={(e) => setPassword2(e.target.value)}
					/>
				</Form.Item>
				<div className='auth__params'>
					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							onClick={handleRegisterUser}
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
