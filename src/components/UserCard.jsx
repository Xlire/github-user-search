import { FaGithub } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function UserCard({user}){

    // console.log(user)
    if(!user){
        return null
    }
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

        </div>

        <a
            className="profile-link"
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