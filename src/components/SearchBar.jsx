function SearchBar({username,setUsername, onSearch, loading}){
    function handleSubmit(event){
        event.preventDefault()
        onSearch()
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-input" type="text" placeholder="Enter Github username"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
            ></input>
            <button className="search-button" type="submit" disabled={loading}>Search</button>
        </form>
    )
}

export default SearchBar;