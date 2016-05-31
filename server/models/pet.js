var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Schema for the pets
var PetSchema = new Schema({
  name: String,
  id: { type: String, required: true, index: { unique: true } },
  description: String,
  imageSrc:String,
  type:String
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
