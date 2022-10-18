const router = require("express").Router();

const courseController = require("../app/controllers/CourseController");


router.get("/", courseController.index);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);
router.delete("/:id/destroy", courseController.destroy);
router.patch("/:id/restore", courseController.restore);
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show)
module.exports = router;
