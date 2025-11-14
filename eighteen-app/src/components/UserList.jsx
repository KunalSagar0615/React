import useFetchData from "../hooks/useFetchData";

const UserList = () => {

    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

    if (loading) return <div className="text-4xl">Loading...</div>
    if (error) return <div className="text-4xl text-red-500">{error}</div>

    return (
        <div>
            <h1 className="text-center">User List</h1>
            {
                data.map(user => <div key={user.id} >
                    <h3>Name: {user.name}</h3>
                    <h3>Name: {user.username}</h3>
                    <h3>Email: {user.email}</h3>
                    <hr />
                </div>)
            }
        </div>
    )
}

export default UserList