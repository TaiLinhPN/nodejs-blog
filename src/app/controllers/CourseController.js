const Course = require("../models/Course");
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require("../../util/mongoose");
class CourseController {

  index(req, res, next) {
    Course.find()
      .then((course) =>
        res.render("courses/allCourses", {
          course: multipleMongooseToObject(course),
        })
      )
      .catch(next);
  }
  show(req, res, next) {
    // console.log(req.params.slug);
    const slug = req.params.slug;
    Course.findOne({ slug })
      .then((course) =>
        res.render("courses/detail", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new CourseController();
