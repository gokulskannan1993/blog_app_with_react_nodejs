const mongoose = require("mongoose");

// CategorySchema
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
Category.createIndexes();

module.exports = Category;
