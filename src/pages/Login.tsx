import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
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
					name='password'
					rules={[{ required: true, message: "Введите пароль" }]}
				>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='Введите пароль'
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
