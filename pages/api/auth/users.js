
import db from '../../../utils/db';
import User from '../../users';

export default async function handler(req, res) {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.status(200).json(users);
}