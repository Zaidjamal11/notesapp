import { Box } from '@mui/material';
import { useState } from 'react';

//components
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from './components/Notes';


import { NoteObject } from './models/note';



function App() {

  const [notes, setNotes] = useState<NoteObject[]>([]);

  const addNotes = (note: NoteObject) => {
    setNotes( [note, ...notes]);

  }



  return (
    <>
    <Header />
    <Box style={{ padding: 20}}> 
    <CreateNote addNotes={addNotes} />
    <Notes />
    </Box>
    
    
    
    </>
    
      
  
  );
}

export default App;
