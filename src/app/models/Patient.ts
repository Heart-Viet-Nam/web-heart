import { Schema, model} from 'mongoose'

const PatientSchema = new Schema(
    {
        fullname: { type: String, maxlength: 50, required: true },
        sex: { type: Number, max: 2, required: true },
        phone: { type: Number, max: 20, required: true },
        email: {type: String, maxlength: 30, required: true},
        address: {type: String, maxlength: 100},
        image: {type: String, maxlength: 300},
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

export default model('Patient', PatientSchema);