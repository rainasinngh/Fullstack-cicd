// backend/models/User.js

const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  notifications: { type: Boolean, default: true },
  emailUpdates: { type: Boolean, default: true },
  reminderTime: { type: String, default: '09:00' },
});

const statsSchema = new mongoose.Schema({
  moodScore: { type: Number, default: 0 },
  stressLevel: { type: String, default: 'Low' },
  sleepQuality: { type: String, default: 'Fair' },
  anxietyLevel: { type: String, default: 'Low' },
});

const sessionSchema = new mongoose.Schema({
  therapist: String,
  date: Date,
  type: String,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You can hash this later
  role: { type: String, default: 'user' },
  avatar: String,
  preferences: preferencesSchema,
  stats: statsSchema,
  lastAssessment: { type: Date },
  upcomingSession: sessionSchema,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);