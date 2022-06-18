import { Schema, model } from 'mongoose';

const StaffSchema = new Schema(
  {
    fullname: { type: String, maxlength: 50, required: true },
    sex: { type: Number, max: 2, required: true },
    phone: { type: Number, max: 20, required: true },
    language: { type: String, maxlength: 15, required: true },
    email: { type: String, maxlength: 30, required: true },
    image: { type: String, maxlength: 300 },
    account: {
      type: Schema.Types.ObjectId,
      ref: 'InternalAccount',
      required: true,
      unique: true
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export default model('Staff', StaffSchema);
