import { useContext } from 'react'
import { NotesContext } from '../context/notes'
import { v4 as uuid4 } from 'uuid'

export function useForm() {

    const { activateForm, setActivateForm, setNotes, notes, note, setNote } = useContext(NotesContext)

    const handleCloseForm = () => {
        setActivateForm(!activateForm)
    }

    const handleChangeNotes = (newNote) => {
        setNotes([...notes, newNote])
    }

    const handleOpenForm = () => {
        setActivateForm(!activateForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { titulo, contenido, color } = Object.fromEntries(new FormData(event.target))
        const newNote = { title: titulo, content: contenido, color: color, id: note.id || uuid4() }
        if (Object.keys(note).length !== 0) {
            setNotes(notes.map((item) => item.id === note.id ? newNote : item))
            setNote({})
        } else {
            handleChangeNotes(newNote)
        }
        handleCloseForm()
    }

    return { activateForm, handleCloseForm, handleSubmit, handleOpenForm }
}

