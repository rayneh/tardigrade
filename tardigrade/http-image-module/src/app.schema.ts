import * as mongoose from 'mongoose';

export const PictureSchema = new mongoose.Schema({
  tokenId: String,
  counter: Number,
  image: String,
  metadata: String,
  // other fields as necessary
});

export interface Picture extends mongoose.Document {
  tokenId: string;
  counter: number;
  image: string;
  metadata: string;
  // other fields
}
