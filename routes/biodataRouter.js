const express = require("express")
const router = express.Router()
const biodataController = require("../controller/biodataController")

router.route('/')
  .get(biodataController.index)
  .post(biodataController.store)

router.route('/:id')
  .put(biodataController.update)
  .delete(biodataController.destroy)

router.get("/create", biodataController.create)
router.get("/:id/edit", biodataController.edit)

module.exports = router
