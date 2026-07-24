import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function UserCard({user, repos}){

    // console.log(user)
    if(!user){
        return null
    }

    const joinedDate = new Date(
    user.created_at
    ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
    
    <div className="user-card">

        <img
            className="avatar"
            src={user.avatar_url}
            alt={user.login}
        />

        <h2>{user.name}</h2>

        <p className="bio">
            {user.bio || "No bio available"}
        </p>

        <div className="stats">

            <div className="stat">
                <h3>{user.followers}</h3>
                <p>Followers</p>
            </div>

            <div className="stat">
                <h3>{user.following}</h3>
                <p>Following</p>
            </div>

            <div className="stat">
                <h3>{user.public_repos}</h3>
                <p>Repositories</p>
            </div>

        </div>

        <div className="details">

            <p>
                <FaMapMarkerAlt />
                {" "}
                {user.location || "Unknown location"}
            </p>

            <p>
            Joined {joinedDate}
            </p>

        </div>

        <a
            className="profile-link"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
        >
            View GitHub Profile
        </a>

        <h3>Top 5 Repositories</h3>

        <div className="repo-list">
            {repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                    <a href={repo.html_url} target="blank" rel="nonreferrer">{repo.name}</a>
                    <p>⭐ {repo.stargazers_count}</p>
                </div>
            ))}
        </div>
    </div>

    
)
}

export default UserCard