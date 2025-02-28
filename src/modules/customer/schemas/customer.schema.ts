// src/modules/user/entities/user.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type CustomerDocument = Customer & Document;

// Define a separate class for Privacy Settings
class PrivacySettings {
  @Prop({ default: true })
  showLocation: boolean;

  @Prop({ default: true })
  showSavingsGoals: boolean;

  @Prop({ default: 'public', enum: ['public', 'friends', 'private'] })
  profileVisibility: 'public' | 'friends' | 'private';

  @Prop({ default: 'public', enum: ['public', 'friends', 'private'] })
  defaultPostPrivacy: 'public' | 'friends' | 'private';
}
@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.password;
      return ret;
    },
  },
})
export class Customer {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  profilePicture?: string;

  @Prop()
  bio?: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: false })
  isPremium: boolean;

  @Prop({ default: 'user' })
  role: string;

  // Location data for location-based networking
  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: { type: [Number], default: [0, 0] },
  })
  location: {
    type: 'Point';
    coordinates: number[];
  };

  @Prop({ type: [String], default: [] })
  interests: string[];

  // Wallet and Rewards
  @Prop({ default: 0 })
  coins: number;

  @Prop({ default: 0 })
  vouchers: number;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Voucher' }],
    default: [],
  })
  earnedVouchers: MongooseSchema.Types.ObjectId[];

  // Savings related fields
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'SavingsGoal' }],
    default: [],
  })
  savingsGoals: MongooseSchema.Types.ObjectId[];

  @Prop({ default: 0 })
  totalSaved: number;

  // Chat related fields
  @Prop({ type: Map, of: Number, default: {} })
  chatStreaks: Map<string, number>;

  @Prop({ default: 0 })
  totalChatCoins: number;

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  friends: MongooseSchema.Types.ObjectId[];

  // Post related fields
  @Prop({ default: 0 })
  totalPosts: number;

  @Prop({ default: 0 })
  totalReels: number;

  @Prop({
    type: {
      monthlyPostCount: { type: Number, default: 0 },
      monthlyReelCount: { type: Number, default: 0 },
      lastPostDate: { type: Date, default: null },
      lastReelDate: { type: Date, default: null },
    },
    default: {},
  })
  postMilestones: {
    monthlyPostCount: number;
    monthlyReelCount: number;
    lastPostDate: Date | null;
    lastReelDate: Date | null;
  };

  // Monetization and Ad System
  @Prop({ default: 0 })
  adsWatched: number;

  @Prop({ default: 0 })
  adEarnings: number;

  @Prop()
  premiumExpiryDate?: Date;

  // Activity tracking for analytics
  @Prop({ default: Date.now })
  lastActive: Date;

  @Prop({ default: 0 })
  loginCount: number;

  // Account settings
  @Prop({ default: true })
  notificationsEnabled: boolean;

  @Prop({ type: PrivacySettings, default: () => new PrivacySettings() })
  privacySettings: PrivacySettings;

  // Authentication-related properties
  @Prop()
  passwordResetToken?: string;

  @Prop()
  passwordResetExpires?: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

// Middleware to hash password before saving
CustomerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    (this as any).password = await bcrypt.hash((this as any).password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Indexes
CustomerSchema.index({ location: '2dsphere' });
CustomerSchema.index({ email: 1 });
CustomerSchema.index({ interests: 1 });
