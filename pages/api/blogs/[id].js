import { blogs } from '../../../data'

export default function blogHandler(req, res) {
  const { id } = req.query
  const blog = blogs.find((blog) => blog.id === Number(id))
  res.status(200).json({ blog })
}
