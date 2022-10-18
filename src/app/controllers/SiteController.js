const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { json } = require("express");
class SiteController {
  index(req, res, next) {
    Course.find()
      .then((course) => res.json(course))
      .then((course) =>
        res.render("home", {
          course: multipleMongooseToObject(course),
        })
      )
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
