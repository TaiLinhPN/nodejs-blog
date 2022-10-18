const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
mongoose.plugin(slug);
// slug: "name", unique: true
const Course = new Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, slug: "name", unique: true },
    description: { type: String },
    image: { type: String },
    youtubeId: { type: String },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

Course.plugin(mongooseDelete, { overrideMethods: "all", deletedAt: true });
module.exports = mongoose.model("Course", Course);
