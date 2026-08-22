import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";

function AddToDo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return  
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex gap-2 max-w-md mx-auto mt-6 px-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your todo..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                Add Todo
            </button>
        </form>
    );
}

export default AddToDo;