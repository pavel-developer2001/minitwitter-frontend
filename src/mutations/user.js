import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
	mutation registerUser($input: UserRegisterInput) {
		registerUser(input: $input) {
			id
			name
			email
			token
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($input: UserLoginInput) {
		loginUser(input: $input) {
			id
			name
			email
			token
		}
	}
`;
