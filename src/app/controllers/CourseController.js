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

  // [GET]
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST]
  store(req, res, next) {

    if (req.require.hasOwnProperty("_sort")) {
      res.json({ a: "ok" });
      return;
    }

    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.youtubeId}/mqdefault.jpg`;

    const course = new Course(formData);
    console.log(course);
    course.save()
      .then(() => res.redirect("/courses"))
      .catch(next);
  }

  edit(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .then((course) =>
        res.render("courses/update", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  update(req, res, next) {
    const formData = req.body;
    formData.image = `http://img.youtube.com/vi/${req.body.youtubeId}/mqdefault.jpg`;
    Course.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  delete(req, res, next) {
    Course.delete({ _id: req.params.id })

      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/me/trash/courses"))
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
