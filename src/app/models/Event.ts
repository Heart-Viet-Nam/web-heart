import { Schema, model} from 'mongoose'

const EventSchema = new Schema(
    {
        
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

export default model('Event', EventSchema);