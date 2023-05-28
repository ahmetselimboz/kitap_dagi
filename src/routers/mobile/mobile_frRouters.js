const router = require('express').Router();
const mobile_frController = require("../../controllers/mobile/mobile_frControllers");

router.get("/homepage", mobile_frController.getMobileHomepage)

router.post('/comment/:id', mobile_frController.postComment)

router.post('/newcomment', mobile_frController.postNewComment);

module.exports = router;