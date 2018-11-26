const VisStoreClient = require("./../visualization/vis.store.client");
const HttpStatus = require("../../../constants/httpStatus");

exports.create = async function(req, res) {
  let vis = await VisStoreClient.findOneVisById(req.body.visualization_id);
  let oldVisStars = vis.userStars;
  let addUserStar = [req.body.user_id];
  let newVisStars = oldVisStars.concat(addUserStar);
  let paramsToUpdate = {"userStars": newVisStars};
  console.log(paramsToUpdate);
  VisStoreClient.updateVis(req.body.visualization_id, paramsToUpdate)
  .catch(err => {
    res.status(HttpStatus.BAD_REQUEST).send(err);
  })
  .then(updatedVis => {
    res.status(HttpStatus.OK).json(updatedVis);
  });
};

exports.delete = function(req, res) {
  VisStoreClient.deleteVis(req.params.visualization_id)
    .catch(error => {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    })
    .then(deleted => {
      res.status(HttpStatus.OK).json(deleted);
    });
};
