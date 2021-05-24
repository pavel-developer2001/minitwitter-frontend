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
