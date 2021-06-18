import {nanoid} from 'nanoid';
import { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList'
import Search from './components/Search'

const App=()=>{
    const [notes,setNotes]=useState([
        {
            id:nanoid(),
            text:"This is my first note",
            date:"15/04/2021",
        },
        {
            id:nanoid(),
            text:"This is my second note",
            date:"20/04/2021",
        },
        {
            id:nanoid(),
            text:"This is my third note",
            date:"21/04/2021",
        },
        {
            id:nanoid(),
            text:"This is my fourth note",
            date:"22/04/2021",
        }
]);

    const [searchText,setSearchText]=useState('');
    const [darkMode,setDarkMode]=useState(false);
    const addNote=(text)=>{
        const date=new Date();
        const newNote={
            id:nanoid(),
            text:text,
            date:date.toLocaleDateString(),
        }
        const newNotes=[...notes,newNote];
        setNotes(newNotes);
    }
    const deleteNote=(id)=>{
       const newNotes= notes.filter((note)=>note.id!==id);
       setNotes(newNotes);

    }
    return(
        <div className={`${darkMode && 'dark-mode'}`} >
            <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText}/>
            <NotesList notes={notes.filter((note)=>
                note.text.toLowerCase().includes(searchText)
            )} 
             handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        </div>
        </div>
        
       
    )
}
export default App;