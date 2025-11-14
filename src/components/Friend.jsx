import { useParams } from "react-router-dom"
import myFriends from "../assets/my-friends.json"

const Friend = () => {

    const { id } = useParams();
    const myFriend = myFriends.find(friend => friend.id == id);

    if (!myFriend) return <h1 className="text-4xl text-red-600 mt-10">Friend not found</h1>

    return (
        <div className='text-4xl text-blue-600'>
            <h2 className="mb-4">Name: {myFriend.name}</h2>
            <p className="mb-4">Email: {myFriend.email}</p>
            <p className="mb-4">Phone: {myFriend.mobile}</p>
            <p className="mb-4">Address: {myFriend.city}</p>

            {
                myFriend.team && <div className="flex gap-10">
                    {
                        myFriend.team.map(mem => <p key={mem.member} className="w-[200px] border border-red-500">{mem.member}</p>)
                    }
                </div>
            }
        </div>
    )
}

export default Friend