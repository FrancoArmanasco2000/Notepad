import './Note.css';
import { NotesContext } from '../context/notes';
import { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";

export function Note({ title, content, color, id }) {

    const { setNote, setActivateForm, activeForm, notes, setNotes } = useContext(NotesContext)

    const detectColor = () => {
        if (color === 'red') return 'red'
        if (color === 'green') return 'green'
        if (color === 'blue') return 'blue'
    }

    const handleChangeNote = () => {
        setNote({ title, content, color, id })
        setActivateForm(!activeForm)
    }

    const handleDeleteNote = () => {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <div>
            <MdDeleteForever className='trash' onClick={handleDeleteNote}/>
            <div className={`note ${detectColor()}`} onClick={handleChangeNote}>
                <h1 className='title-note'>{title}</h1>
                <p className='content-note'>{content}</p>
            </div>
        </div>
    )
}
