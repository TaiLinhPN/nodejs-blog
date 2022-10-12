const router = require("express").Router();

const courseController = require("../app/controllers/CourseController");

router.get("/:slug", courseController.show)
router.get("/", courseController.index);
module.exports = router;
