import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
	mutation registerUser($input: UserRegisterInput) {
		registerUser(input: $input) {
			name
			email
			password
			password2
		}
	}
`;
