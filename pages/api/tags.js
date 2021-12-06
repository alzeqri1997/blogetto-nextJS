import { tags } from '../../data'

export default function Tags(req, res) {
  res.status(200).json({ tags })
}
