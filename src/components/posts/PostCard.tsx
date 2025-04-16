import { Link } from 'react-router-dom'
import './PostCard.css'

interface PostCardProps {
  id: string
  title: string
  author: string
  createAt: string
  summary: string
}

export function PostCard ({ id, title, author, createdAt, summary }: PostCardProps) {
  const preview = summary.length > 200 ? summary.slice(0, 200) + '...' : summary

  return (
    <div className='post-card'>
      <h2>{title}</h2>
      <p className='post-meta'>
        Por <strong>{author}</strong> - {new Date(createdAt).toLocaleString()}
      </p>
      <p>{preview}</p>
      <Link to={`/post/${id}`} className='read-more'>Leer ma</Link>

    </div>
  )
}
