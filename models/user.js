var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.SchemaTypes.ObjectId;

var userSchema = new Schema({
  name: { type: String },
  email: { type: String }
}),
  User;

User = mongoose.model('User', userSchema);
module.exports = User;