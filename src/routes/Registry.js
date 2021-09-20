import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
function Registry(){

    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e)=>{
        e.preventDefault();
        let tempRegistry = [...registryData]
        tempRegistry.push(textInput)
        setRegistryData(tempRegistry)
        setTextInput("")
    }

    useEffect(()=>{
        if(textInput.length>10) setError(true)
        else setError(false)
    },[textInput])


    const removeItem = (index)=>{
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index)=>{
        if(error) return
        let newData = [...registryData]
        newData[index] = textInput;

        setRegistryData(newData)
    }

    return (
    <div>
    <h1>Registry</h1>
    <Link to="/">Click here to go Home</Link>
    <form onSubmit={addItem}>

    <label>
        
    Text input:
    
    <input type="text" value={textInput} onChange={(e)=>setTextInput(e.target.value)} />
    </label>
<input type="submit" value="Submit" />

    </form>
{error ? <span style={{color:"red"}}>Error occured</span>:null}
<ol>
{
    registryData.map((item,k)=>{
        return (
            <li key={k}>{item} <button onClick={()=>removeItem(k)}>Remove</button>
            <button onClick={()=>editItem(item)}>Update</button>
            </li>
        )
    })
}
</ol>
    </div>

    )
}


export default Registry