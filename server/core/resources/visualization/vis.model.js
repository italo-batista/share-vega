const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisualizationSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  gist_link: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateLastUpdate: {
    type: Date,
    default: Date.now
  },
  forkedBy: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    default: []
  },
  userStars: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"        
      }
    ],
    default: []
  }
});

const Visualization = mongoose.model("Visualization", VisualizationSchema);

module.exports = Visualization;
