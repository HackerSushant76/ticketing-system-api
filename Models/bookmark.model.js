const { default: mongoose } = require("mongoose");

const bookmarkSchema = mongoose.Schema(
  {
    category: String,
    title: String,
    message: String,
  },
  { timestamps: true }
);
const Bookmark = mongoose.model("bookmarkedticket", bookmarkSchema);

module.exports = {Bookmark}
