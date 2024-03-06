import './FormNote.css';
import { useId } from 'react'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { NotesContext } from '../context/notes'


export function FormNote() {

    const { note } = useContext(NotesContext)
    const { title, content, color } = note
    const { handleCloseForm, handleSubmit } = useForm()

    const edit = Object.keys(note).length !== 0

    const titleId = useId()
    const contentId = useId()
    const colorId = useId()


    return (
        <form className="form" onSubmit={handleSubmit}>
            <button className='close-form' onClick={handleCloseForm}>❌</button>
            <label htmlFor={titleId} className='subtitle-1'>Title</label>
            <input type="text" className='input-title' id={titleId} name='titulo' defaultValue={note ? title : ' '} required />
            <label htmlFor={titleId} className='subtitle-2'>Content</label>
            <textarea type="text" className='input-content' id={contentId} name='contenido' defaultValue={note ? content : ' '} required />
            <label htmlFor={colorId}>Color note</label>
            <select
                id={colorId}
                name="color"
                className="select-color"
                defaultValue={note ? color : ""}
                required
            >
                <option value="">Select a color</option>
                <option value="red" style={{ backgroundColor: "#EC7063", color: "white" }}>
                    Red
                </option>
                <option
                    value="green"
                    style={{ backgroundColor: "#58D68D", color: "white" }}
                >
                    Green
                </option>
                <option
                    value="blue"
                    style={{ backgroundColor: "#5DADE2", color: "white" }}
                >
                    Blue
                </option>
            </select>
            <button className={edit ? 'btn-edit' : 'btn-add'} >{edit ? 'Edit' : 'Add'}</button>
        </form>
    )
}