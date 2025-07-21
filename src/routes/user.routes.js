const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  testUserController,
  testApiResponse,
  testBodyRequest,
  testFormDataRequest,
  testFormDataImageRequest,
} = require("../controllers/UserController");



router.get("/", testUserController);
router.get("/test", testApiResponse);
router.post("/", testBodyRequest);
router.post("/check-form-data", testFormDataRequest);
router.post("/image-upload", upload.single("file"), testFormDataImageRequest);

module.exports = router;
