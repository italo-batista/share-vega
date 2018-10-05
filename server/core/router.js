/**
 * Api routes.
 */

const path = require("path");
const express = require("express");
const endpoint = require("../constants/endpoint");

const visRoutes = require("./visualization/vis.router");
const userRoutes = require("./user/user.router");
const authRoutes = require("./auth/auth.router");

const STATIC_FILES_DIRECTORY = path.join(__dirname, "../../static");

module.exports = app => {
  
  // Serving static files
  app.use("/static", express.static(STATIC_FILES_DIRECTORY));

  app.use(endpoint.VISUALIZATION, visRoutes);
  app.use(endpoint.USER, userRoutes);
  app.use(endpoint.AUTH, authRoutes);
};
