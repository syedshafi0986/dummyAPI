import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  campaignId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'inactive'],
    default: 'inactive'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  leadsGenerated: {
    type: Number,
    default: 0
  },
  conversionRate: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    required: true
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;
