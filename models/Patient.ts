import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  bloodGroup: { type: String, required: true },
  disease: { type: String, required: true },
  admissionDate: { type: Date, required: true },
  dischargeDate: { type: Date },
  status: { type: String, required: true, enum: ['Admitted', 'Discharged', 'ICU', 'Emergency'] },
  history: [{
    date: Date,
    note: String
  }]
}, { timestamps: true });

// Export the model, avoiding overwrite errors upon Next.js HMR
export default mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
