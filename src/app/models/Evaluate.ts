import { Schema, model } from 'mongoose';

const EvaluateSchema = new Schema(
  {
    feeling: { type: String },
    experience: { type: String },
    suggestion: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export default model('Evaluate', EvaluateSchema);
