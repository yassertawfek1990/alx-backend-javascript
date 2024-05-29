import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let v = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    v = { photo, user };
  } catch (err) {
    v = { photo: null, user: null };
  }
  return v;
}
