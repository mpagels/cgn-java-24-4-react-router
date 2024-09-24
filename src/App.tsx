import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.tsx'
import Blog from './pages/Blog.tsx'
import Aboutme from './pages/Aboutme.tsx'
import StartPage from './pages/StartPage.tsx'
import Character from './pages/Character.tsx'
import { characters } from './assets/characters.ts'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={'/aboutme'}>About me</Link>
        </li>

        <li>
          <Link to={'/contact'}>Contact</Link>{' '}
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={'/character/' + character.id}>{character.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path={'/'} element={<StartPage />} />
        <Route path={'/aboutme'} element={<Aboutme />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/blog'} element={<Blog />} />
        <Route path={'/character/:id'} element={<Character />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
