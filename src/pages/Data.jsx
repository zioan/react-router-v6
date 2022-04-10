import { Navigate } from 'react-router-dom'

function Data() {
  const status = 200

  if (status === 404) {
    return <Navigate to='/' />
  }

  return <h2>Data</h2>
}

export default Data
