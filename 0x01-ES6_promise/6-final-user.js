import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];

  const handleSignUp = async () => {
    try {
      const user = await signUpUser(firstName, lastName);
      results.push({ status: 'fulfilled', value: user });
    } catch (error) {
      results.push({ status: 'rejected', value: error.toString() });
    }
  };

  const handleUpload = async () => {
    try {
      const upload = await uploadPhoto(fileName);
      results.push({ status: 'fulfilled', value: upload });
    } catch (error) {
      results.push({ status: 'rejected', value: error.toString() });
    }
  };

  await Promise.all([handleSignUp(), handleUpload()]);

  return results;
}
