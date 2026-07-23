import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"

function App() {
    const [username,setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSearch(){

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
        console.log(data)
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
    <div>
        <h1>GitHub User </h1>
        <SearchBar 
            username={username}
            setUsername={setUsername}
            onSearch={handleSearch}
        />
        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}
        
        <UserCard 
            user={user}
        />
    </div>
  );
}

export default App
