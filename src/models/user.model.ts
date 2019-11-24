import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document{
  name: string;
  email: string;
  birthdayDate?: Date;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  birthdayDate: { type: Date }
});

export default model<UserInterface>('User', userSchema);