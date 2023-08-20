import mongoose from 'mongoose';

const sequenceSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequenceValue: { type: Number, default: 1 }
});

sequenceSchema.statics.generateOrderNumber = async function() {
  const sequenceDoc = await this.findByIdAndUpdate(
    'order_sequence',
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true }
  );
  return `#O${sequenceDoc.sequenceValue.toString().padStart(6, '0')}`;
};

const Sequence = mongoose.model('Sequence', sequenceSchema);

export default Sequence;
