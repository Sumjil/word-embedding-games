import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
// import notes from '../assets/data';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    let [note, setNote] = useState(null) 
    useEffect(() => { 
      getNote() 
    },[id])

    let getNote = async () => {
      if (id ==='new') return
      let response = await fetch(`http://localhost:8000/notes/${id}`)
      let data = await response.json()
      setNote((data))
    }

    const updateNote = async () => {
      try {
        await fetch(`http://localhost:8000/notes/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...note, update: new Date() }),
        });
        // Handle success, e.g., show a success message, update state, etc.
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error updating note:', error);
      }
    };

    const createNote = async () => {
      try {
        await fetch(`http://localhost:8000/notes/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...note, update: new Date() }),
        });
        // Handle success, e.g., show a success message, update state, etc.
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error updating note:', error);
      }
    };




    const deleteNote = async () => {
      try {
        await fetch(`http://localhost:8000/notes/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        navigate('/');
        // Handle success, e.g., show a success message, update state, etc.
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error deleting note:', error);
      }
    };
    

    let handleSubmit = () => {
      if (id !== 'new' && !note.body){
        deleteNote()
      } else if(id !== 'new'){
        updateNote()
      }else if(id === 'new' && note!==null){
        createNote()
      }
      navigate('/');
    }    
  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'><ArrowLeft onClick={handleSubmit}/></Link>
            </h3>
            {id !== 'new' ? (<button onClick={deleteNote}>Delete</button>):(<button onClick={handleSubmit}>Done</button>)}
            
        </div>
        <textarea
              onChange={(e) => {
                setNote({ ...note, body: e.target.value });
              }}
              value={note?.body}
            />
       
    </div>
  )
}

export default NotePage
