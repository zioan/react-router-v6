import { useNavigate } from 'react-router-dom'

function Blog() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <h2>Blog</h2>
      <button onClick={goHome}>Go Home</button>
    </>
  )
}

export default Blog
