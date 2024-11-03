const Post = async ({ params }) => {
    const { userId, postId } = await params;

    return (
        <div>
            <p>User: {userId}</p>
            <p>Post: {postId}</p>
        </div>
    );
};

export default Post;
