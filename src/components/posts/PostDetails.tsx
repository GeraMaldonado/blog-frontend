import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById, type Post } from '../../services/postService.ts'

export function PostDetails () {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<post | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(id)
        setPost(post)
      } catch (err) {
        console.error(err)
        setError('No se encontró el post. ')
      }
    }
    fetchPost()
  }, [id])

  if (error) return <p>{error}</p>
  if (!post) return <p>Cargando post...</p>

  return (
    <article className='post-detail'>
      <h1>{post.title}</h1>
      <p className='post-meta'>
        Por <strong>{post.author}</strong> - {new Date(post.createAt).toLocaleString()}
      </p>
      <div className='post-content'>{post.summary}</div>
    </article>
  )
}
