import FormData from 'form-data';
import axios from 'axios';

export const uploadFile = async (uploadFile: Express.Multer.File, fieldName: string) => {
  const form = new FormData();
  form.append(fieldName, uploadFile?.buffer, uploadFile?.originalname);
  const imagePath = await axios.post(process.env.DOMAIN_UPLOAD!, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'X-HelloGIT-Key': process.env.SECRET_KEY_UPLOAD!,
      'X-HelloGIT-Host': process.env.HOSTNAME_UPLOAD!
    }
  });

  return imagePath;
};
