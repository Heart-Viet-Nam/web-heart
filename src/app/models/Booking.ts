import { Schema, model } from 'mongoose';

const DoctorSchema = new Schema(
  {},
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export default model('Doctor', DoctorSchema);
