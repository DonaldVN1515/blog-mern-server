import mongose from 'mongoose';

const PostSchema = mongose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
			default: 'Anonymous',
		},
		attachment: String,
		likeCount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const PostModel = mongose.model('Post', PostSchema);
