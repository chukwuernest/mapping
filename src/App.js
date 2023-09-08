import './App.css'
import Bio from './bio'
import Contact from './contact'

function createcontact(conn) {
  return (
    <Bio
      key={conn.id}
      name={conn.name}
      image={conn.image}
      phone={conn.phone}
      email={conn.email}
    />
  )
}

function App() {
  return <div>{Contact.map(createcontact)}</div>
}

export default App
