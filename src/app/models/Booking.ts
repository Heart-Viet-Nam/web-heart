import { Schema, model } from 'mongoose';

const BookingSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    time: { type: String, maxlength: 20, required: true },
    note: { type: String }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

export default model('Booking', BookingSchema);
