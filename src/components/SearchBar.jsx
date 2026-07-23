function SearchBar({username,setUsername, onSearch}){
    function handleSubmit(event){
        event.preventDefault()
        onSearch()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Github username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
            ></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;