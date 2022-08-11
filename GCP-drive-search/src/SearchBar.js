import React ,{useState} from 'react'
import axios from 'axios'

import DisplayList from './DisplayList'

export default function SearchBar() {
    let [searchValue,setsearchValue]= useState('')
    let [filelist,setFilelist] = useState([])
    let [loaderState,setLoaderState]=useState(false)
    const [firstTime,setfirstTime]=useState(false)
    function search(){
        setfirstTime(true)
        if( searchValue.length === 0){
            alert('it is a empty string')
        }
        else{
            setFilelist([])
            setLoaderState(true)
        axios.get('http://localhost:9090/search',{
            params:{
                q:searchValue
            }
        }).then(res => {
            
            setFilelist(res.data)
            setLoaderState(false)
        })
        .catch(res => {
            console.log(res)
        })}
        
        
    }

    const handlechange=(event)=>{
        setsearchValue(event.target.value)
    }
  return (
    <div>
        <input id='searchbar' type='text' onChange={handlechange} placeholder='Search here'></input>
        <button onClick={search}>
            <span className="material-symbols-outlined">
            search
            </span>
        </button>
        {   
            loaderState && <div class="loader" ></div>
        }
         
        <DisplayList filelist={filelist}></DisplayList>
        {
            firstTime && filelist.length === 0 ? loaderState ? '': <h3>no match found</h3> :''
        }
    </div>
  )
}
