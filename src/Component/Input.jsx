
import "./input.css"
import { useState } from "react"

const Input = () => {

    const [myInput, setMyInput] = useState("")
    const [myList, setMyList] = useState([])


    const handleChange = (event) => {
        setMyInput(event.target.value)
    }
    //ruduce this one
    //CRUD operation in cases
    const onSave = (event) => {
        setMyList((item) => [...item, myInput])
    }

    console.log(`my input = ${ myInput }`)
    console.log(`list array: ${ myList }`)


    return <>

        <form>
            <input onChange={handleChange} className="myInput" type="text" placeholder="What are your plans for the day." />
        </form>

        <br />
        <button onClick={onSave}>Save</button>
        <button >Delete</button>
        <button >Edit</button>
        <button >Mark Done</button>
        <div>
            {myList.map((item, ) => {
                return <p>{item}</p>
            })}

        </div>
    </>
}

export default Input