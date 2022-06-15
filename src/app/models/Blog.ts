import { Schema, model} from 'mongoose'

const BlogSchema = new Schema(
    {
        title: {type: String, maxlength: 300, required: true},
        description: {type: String, maxlength: 500, required: true},
        content: {type: String, required: true},
        thumbnail: {type: String, required: true}
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

export default model('Blog', BlogSchema);