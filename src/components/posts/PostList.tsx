import { useEffect, useState } from 'react'
import { PostCard } from './PostCard'
import { getAllPosts } from '../../services/postService'

export function PostList () {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts()
        setPosts(posts)
        setLoading(false)
      } catch (err) {
        console.error('Error al cargar los posts')
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])
  if (loading) return <p>Cargando posts...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='post-list'>
      {posts.length === 0
        ? (
          <p>No hay publicaicones aun</p>
          )
        : (
            posts.map(post => <PostCard key={post.id} {...post} />)
          )})
    </div>
  )
}
