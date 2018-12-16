const VisStoreClient = require("./../visualization/vis.store.client");
const HttpStatus = require("../../../constants/httpStatus");
const utils = require("../.././../utils/util");

exports.create = async function(req, res) {
  let vis = await VisStoreClient.findOneVisById(req.body.visualization_id);
  let oldVisStars = vis.userStars;
  let addUserStar = [req.body.user_id];
  let newVisStars = oldVisStars.concat(addUserStar);
  let paramsToUpdate = { userStars: newVisStars };
  VisStoreClient.updateVis(req.body.visualization_id, paramsToUpdate)
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(updatedVis => {
      res.status(HttpStatus.OK).json(updatedVis);
    });
};

exports.delete = async function(req, res) {
  let vis = await VisStoreClient.findOneVisById(req.body.visualization_id);
  utils.removeItemFromArray(vis.userStars, req.body.user_id);

  let paramsToUpdate = { userStars: vis.userStars };
  VisStoreClient.updateVis(req.body.visualization_id, paramsToUpdate)
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(updatedVis => {
      res.status(HttpStatus.OK).json(updatedVis);
    });
};
