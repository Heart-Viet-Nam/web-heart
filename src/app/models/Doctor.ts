import { Schema, model } from 'mongoose';

const DoctorSchema = new Schema(
  {
    fullname: { type: String, maxlength: 50, required: true },
    sex: { type: Number, max: 2, required: true },
    phone: { type: Number, max: 20, required: true },
    language: { type: String, maxlength: 15, required: true },
    email: { type: String, maxlength: 30, required: true },
    address: { type: String, maxlength: 100, required: true },
    specialist: { type: String, maxlength: 200, required: true },
    research: { type: String, maxlength: 500 },
    image: { type: String, maxlength: 300 }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export default model('Doctor', DoctorSchema);
