import { useNavigate, useParams } from 'react-router-dom'
import { characters } from '../assets/characters.ts'
export default function Character() {
  const params = useParams()
  const navigate = useNavigate()
  const id: string | undefined = params.id

  function doSomeLogic() {
    // logic

    setTimeout(() => {
      navigate('/')
    }, 2000)

    // logic done and go somwhere
  }

  // logic get data from api with infos from id
  const foundCharacter = characters.find((character) => character.id == id)
  return (
    <>
      <h1>{foundCharacter.name}</h1>
      <img src={foundCharacter.image} alt={''} />
      <button onClick={doSomeLogic}>Do logic and then go to home</button>
    </>
  )
}
