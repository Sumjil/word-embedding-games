import React from 'react'
import {Link} from 'react-router-dom'


let getTitle = (note) => {
  const title = note.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0,45)
  }
  
  return title
}

let getContent = (note) => {
  //Get content after title
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', '')
  content = content.replaceAll(title, '')

  //Slice content and add three dots in over 45 characters to show there is more
  if (content.length > 45) {
      return content.slice(0, 45) + '...'
  } else {
      return content
  }

}



const Listitem = ({note}) => {
    // console.log("props",item)
  return (
    <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>
          <h3>{getTitle(note)}</h3>
          <p>{getContent(note)}</p>
        </div>
        
    </Link>
  )
}

export default Listitem
