const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../util/mongoose");

class MeController {
  storedCourses(req, res, next) {
    Promise.all([Course.find(), Course.countDocumentsDeleted()])
      .then(([course, deletedCount]) =>
        res.render("me/storedCourses", {
          deletedCount,
          course: multipleMongooseToObject(course),
        }))
      .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findDeleted()
      .then((course) =>
        res.render("me/trashCourses", {
          course: multipleMongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
