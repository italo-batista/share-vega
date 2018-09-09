var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VisualizationSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  gist_link: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateLastUpdate: {
    type: Date
  },
  forkedBy: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    default: []
  }
});

var Visualization = mongoose.model("Visualization", VisualizationSchema);

module.exports = Visualization;
