const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  index(req, res, next) {
    Course.find()
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
