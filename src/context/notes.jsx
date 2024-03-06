import { createContext, useState } from "react";


export const NotesContext = createContext()


export function NotesProvider({ children }) {

    const [ note, setNote ] = useState({})

    const [ notes, setNotes ] = useState([])  

    const [activateForm, setActivateForm] = useState(false)

    return (
        <NotesContext.Provider value={{
            note,
            setNote,
            notes,
            setNotes,
            activateForm,
            setActivateForm
        }}>
            {children}
        </NotesContext.Provider>
    )
}