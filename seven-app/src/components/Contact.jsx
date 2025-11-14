import { Link, Outlet } from "react-router-dom"
import myFriends from "../assets/my-friends.json"

const Contact = () => {

    return (
        <div className="h-[90vh] bg-cyan-200 p-5 flex gap-10">
            <ul className="text-3xl">
                {
                    myFriends.map(friend => <li className="mb-5" key={friend.id}>
                        <Link to={`${friend.id}`}>{friend.name}</Link>
                    </li>)
                }
            </ul>

            <Outlet />

        </div>
    )
}

export default Contact