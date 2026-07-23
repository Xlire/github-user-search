function UserCard({user}){

    console.log(user)
    if(!user){
        return null
    }
    return(
        <div>
            < img src={user.avatar_url}
            alt={user.login}
            width="150"/>
            <h2>{user.name}</h2>
            <p>Bio: {user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Repositories: {user.public_repos}</p>
            <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            >
            View GitHub Profile
            </a>
        </div>
    )
}

export default UserCard