import mongoose, { Schema, model, models, Document } from "mongoose";

export interface ITransaction extends Document {
  amount: number;
  description: string;
  date: Date;
}

const TransactionSchema = new Schema<ITransaction>({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

// Explicitly type the model
export const Transaction = models.Transaction as mongoose.Model<ITransaction> || model<ITransaction>("Transaction", TransactionSchema);

