const { Schema, model } = require('mongoose');
const Populate = require('../util/autoPopulate.js');

const commentSchema = new Schema(
	{
		userId: {
			type: String,
		},
		text: {
			type: String,
		},
		likes: {
			type: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Like',
				},
			],
			default: [],
		},
		isReply: {
			type: Boolean,
			default: false,
		},
		parentComment: {
			type: String,
		},
		replies: {
			type: [
				{
					type: Schema.Types.ObjectId,
					ref: 'Comment',
				},
			],
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

commentSchema
	.pre('find', Populate('replies'))
	.pre('findOne', Populate('replies'))
	.pre('find', Populate('likes'))
	.pre('findOne', Populate('likes'));

module.exports = model('Comment', commentSchema);
