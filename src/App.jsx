import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"
import { FaGithub } from "react-icons/fa";

function App() {
    const [username,setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [darkmode, setDarkmode] = useState(false)

    async function handleSearch(){

        if(!username.trim()){
            setError("Please enter a username.");
            setUser(null)
            return
        }

        setLoading(true)
        setError("")
        try{

        const url = `https://api.github.com/users/${username}`
        
        const response = await fetch(url)

        if (!response.ok) {
        throw new Error("User not found");
        }

        const data = await response.json()

        setUser(data)
        // console.log(data)
        }

        catch(error){
            setUser(null)
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div className={darkmode? "app dark" : "app"}>
        <button id='dark-light-button' onClick={() => setDarkmode(!darkmode)}>{darkmode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>
        <h1 className="header-title">
            <FaGithub className="github-icon" />
            GitHub User Finder
        </h1>
        <SearchBar 
            username={username}
            setUsername={setUsername}
            onSearch={handleSearch}
            loading={loading}
        />
        {loading && <p className='loading'>Loading...</p>}

        {error && <p className='error'>{error}</p>}
        
        <UserCard
            user={user}
        />
    </div>
  );
}

export default App
