import useFetchData from "../hooks/useFetchData";

const PostData = () => {

    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <div className="text-4xl">Loading...</div>
    if (error) return <div className="text-4xl text-red-500">{error}</div>

    return (
        <div>
            <h1 className="text-center text-5xl my-8">
                Post Data
            </h1>
            {
                data.map(post => <div key={post.id} className="mb-5 px-10">
                    <h3 className="text-2xl mb-3">Title: {post.title}</h3>
                    <h3 className="text-xl">Description: {post.body}</h3>
                    <hr />
                </div>)
            }
        </div>
    )
}

export default PostData