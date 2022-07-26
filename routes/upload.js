const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    cloudinary.uploader.upload(
      req.file.path,
      { folder: "test" },
      async (err, result) => {
        if (err) throw err;

        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
