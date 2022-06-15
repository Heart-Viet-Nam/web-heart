import { Schema, model } from 'mongoose';

const InternalAccountSchema = new Schema(
    {
        username: { type: String, maxlength: 30, unique: true, required: true },
        password: { type: String, maxlength: 300, required: true },
        role: { type: Number, max: 2, required: true },
        history: { type: Date },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
  );
  
export default model('InternalAccount', InternalAccountSchema);