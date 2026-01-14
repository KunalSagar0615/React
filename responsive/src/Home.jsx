import { useState } from "react"

const Home = () => {

    const [input, setInput] = useState('');
    const [name, setName] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const greetUser = () => {
        setName(input);
        setInput('');
    }

    return (
        <div className="text-4xl text-center my-10">
            <input type="text" placeholder="Enter your name.." className="border rounded-2xl p-3" onChange={handleChange} value={input} />

            <div className="mt-10">
                <button type="button" className="bg-slate-700 text-white rounded-2xl p-4" onClick={greetUser}>Greet</button>
            </div>

            {
                name.length > 0 && <h1 className="text-6xl mt-10">Good Morning, {name}!! </h1>
            }
        </div>
    )
}

export default Home