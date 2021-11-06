const { gql } = require('apollo-server-express');

module.exports = gql`
	type Comment {
		id: ID!
		userId: ID!
		text: String!
		likes: [Like]
		isReply: Boolean!
		parentComment: ID!
		replies: [Comment]
		createdAt: String
	}

	type Like {
		id: ID!
		userId: ID!
		createdAt: String
	}

	type Blog {
		id: ID!
		userId: ID!
		title: String!
		text: String!
		categories: [String]
		keywords: [String]
		viewedBy: [String]
		views: Int
		likes: [Like]
		comments: [Comment]
		createdAt: String!
		updatedAt: String
	}

	type User {
		id: ID!
		displayName: String
		blogs: [Blog]
		following: [String]
		bookmarks: [String]
		spotifyId: String
		googleId: String
		facebookId: String
		email: String!
		token: String!
		createdAt: String!
		updatedAt: String
	}

	input RegisterInput {
		email: String!
		displayName: String!
		password: String!
		confirmPassword: String!
	}

	input LoginInput {
		email: String!
		password: String!
	}

	input UpdatePasswordInput {
		password: String!
		newPassword: String!
		confirmNewPassword: String!
	}

	input UpdateUserInput {
		email: String
		displayName: String
	}

	type Query {
		getUser(userId: ID!): User
		getUsers: [User]
	}

	type Mutation {
		# Auth
		register(registerInput: RegisterInput): User!
		login(loginInput: LoginInput): User!

		# User
		updatePassword(updatePasswordInput: UpdatePasswordInput): User
		updateUser(updateUserInput: UpdateUserInput): User
	}
`;
