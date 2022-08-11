import { useState } from "react";
import React from 'react'

const DisplayList = ({filelist}) => {
    const [firstTime,setfirstTime]=useState(false)
    
  return (
    <div id='displaylist'>
        {filelist.length > 0 ?<header>Search result</header>:'' }
        
        <ul>
            
          
           {  filelist.length > 0 ?
                filelist.map(
                    file =>(
                        <ol key={file.id}>{file.name}<a  target="_blank"  href={`https://www.googleapis.com/drive/v3/files/${file.id}` }><span id='openicon'className="material-symbols-outlined" >open_in_browser</span></a>
                        </ol>
                    )
                ) : ''
            }
            
        </ul>
    </div>
  )
}


export default DisplayList