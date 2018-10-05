const VisStoreClient = require("./vis.store.client");
const HttpStatus = require("../../../constants/httpStatus");

exports.index = function(req, res) {
  VisStoreClient.findVisz()
    .catch((err) => {
      res.status(HttpStatus.BAD_REQUEST).json(err);
    })
    .then((result) => {
      res.status(HttpStatus.OK).json(result);
    });
};

exports.show = function(req, res) {
  VisStoreClient.findVisById(req.params.visualization_id)
    .catch((error) => {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    })
    .then((fic) => {
      res.status(HttpStatus.OK).json(fic);
    });
};

exports.create = function(req, res) {
  VisStoreClient
    .createVis(req.body)
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(createdVis => {
      res.status(HttpStatus.OK).json(createdVis);
    });
};

exports.update = function(req, res) {
  VisStoreClient
    .updateVis(req.params.visualization_id, req.body)
    .catch(err => {
      res.status(HttpStatus.BAD_REQUEST).send(err);
    })
    .then(createdVis => {
      res.status(HttpStatus.OK).json(createdVis);
    });
};

exports.delete = function(req, res) {
  VisStoreClient
    .deleteVis(req.params.fic_id)
    .catch((error) => {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    })
    .then((deleted) => {
      res.status(HttpStatus.OK).json(deleted);
    })
};
