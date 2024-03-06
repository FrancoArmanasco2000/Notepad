import './App.css'
import { Note } from './components/Note.jsx'
import { FormNote } from './components/FormNote'
import { NotesContext } from './context/notes.jsx'
import { useContext } from 'react'
import { useForm } from './hooks/useForm'


function App() {

  const { handleOpenForm } = useForm()

  const { activateForm , notes } = useContext(NotesContext)

  return (
    <div className='container'>
      <h1 className='title'>Notepad 📓</h1>
      <div className='notes'>
        {
          notes.map((note, index) => {
            const { title, content, color, id } = note
            return (
              <Note key={index} title={title} content={content} color={color} id={id} />
            )
          })
        }
      </div>

      <button className='new-note' onClick={handleOpenForm}>+</button>

      {activateForm && <FormNote />}

    </div>
  )
}

export default App
