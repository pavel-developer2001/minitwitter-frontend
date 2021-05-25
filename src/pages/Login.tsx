import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { LOGIN_USER } from "../mutations/user";
import { useMutation } from "@apollo/client/react/hooks/useMutation";

const Login = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [loginUser] = useMutation(LOGIN_USER);
	const history = useHistory();
	const handleLoginUser = (e: any) => {
		e.preventDefault();
		try {
			loginUser({
				variables: {
					input: {
						email,
						password,
					},
				},
			}).then((state) => {
				console.log(state.data.loginUser);
				setEmail("");
				setPassword("");
				localStorage.setItem("user", JSON.stringify(state.data.loginUser));
				localStorage.setItem("token", state.data.loginUser.token);
				history.push(`/`);
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						prefix={<UserOutlined className='site-form-item-icon' />}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Item>
				<div className='auth__params'>
					<Link to='/register' className='auth__link'>
						Зарегистрироваться
					</Link>
					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							onClick={handleLoginUser}
						>
							Войти
						</Button>
					</Form.Item>
				</div>
			</Form>
		</div>
	);
};
export default Login;
