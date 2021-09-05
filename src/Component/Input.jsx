
import "./input.css"
import { useState, useReducer } from "react"

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [
                ...state,
                action.payload
            ]

        case "DELETE":
            return state.filter((items) => items.id !== action.payload)

        case "DONE":
            return state.map((items) => items.id === action.payload ? { ...items, isDone: !items.isDone } : items)

        default:
            return state
    }
}


const Input = () => {

    const [myInput, setMyInput] = useState("")
    const [state, dispatch] = useReducer(reducer, [])


    const handleChange = (event) => {
        setMyInput(event.target.value)
    }

    const handleSave = () => {
        dispatch({
            type: "ADD", payload: {
                id: Date.now(),
                title: myInput,
                isDone: false
            }
        })
    }

    const handleDel = (itemId) => {
        dispatch({ type: "DELETE", payload: itemId })
    }

    const isComplete = (itemId) => {
        dispatch({ type: "DONE", payload: itemId })
    }


    console.log(state)
    return <>

        <form>
            <input onChange={handleChange} value={myInput} className="myInput" type="text" placeholder="What are your plans for the day." />
        </form>

        <br />
        <button onClick={handleSave}>Save</button>
        <button >Edit</button>
        <button >Mark Done</button>
        <div>
            {state.map((item) => {
                return <div key={item.id} className="display">
                    <input type="checkbox" checked={item.isDone} onChange={() => isComplete(item.id)} />
                    <p>{item.title}</p>
                    <button onClick={() => handleDel(item.id)} >Del</button>
                </div>
            })}

        </div>
    </>
}

export default Input