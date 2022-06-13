import multer from "multer";
import moment from "moment-timezone";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = moment(Date.now())
      .tz("Asia/Ho_Chi_Minh")
      .format("DDMMYYYYHHmmss");
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

const upload = multer({ storage: storage });
