import { useState } from 'react';
import ContactList from './components/ContactList.jsx'

const App = () => {
  const [X, setX] = useState(0)

  return (
    <>
    <ContactList />
    </>
  )
}

export default App
