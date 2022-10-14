const router = require("express").Router();

const courseController = require("../app/controllers/CourseController");


router.get("/", courseController.index);
router.get("/create", courseController.create);
router.get("/:slug", courseController.show)
module.exports = router;
