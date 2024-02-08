const PostCard = ({userName, userPicture, children}) => {
    return <div className="card">
        <div className="p-2 d-flex gap-2 align-items-center">
            <div><img className="rounded-circle" src={userPicture}/></div>
            <div><strong>{userName}</strong></div>
        </div>
        <div className="p-2">{children}</div>
    </div>
}

export default PostCard;
