import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name: String,
  email: String,
  password: string
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minLength: 4
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
})

export const User = mongoose.model<User>("Users", userSchema)