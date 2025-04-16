import { PostCard } from '../components/posts/PostCard'

export default function Home () {
  const ejemplos = [{
    id: '1',
    title: 'Mi primer post',
    author: 'Gerardo',
    createdAt: '2025-04-20T12:00:00Z',
    summary: 'Este es un ejemplo de contenido de un post que será recortado para vista previa.'
  }, {
    id: '2',
    title: 'Otro tema interesante',
    author: 'Gerardo',
    createdAt: '2025-04-19T10:00:00Z',
    summary: 'Contenido más largo para ver cómo se comporta el componente PostCard...'
  }]
  return (
    <div>
      <h1>Post recientes</h1>
      {ejemplos.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}
