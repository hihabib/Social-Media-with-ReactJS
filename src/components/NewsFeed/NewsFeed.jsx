import PostCard from '../PostCard/PostCard.jsx'
import {useState} from 'react'
import {useFormik} from 'formik';

const NewsFeed = () => {
    // current user
    const {userName} = JSON.parse(window.localStorage.getItem('user'))

    // newsfeed posts
    const [posts, setPosts] = useState([
        {
            id: "123456",
            userName: "Arafat",
            userPicture: "http://placehold.co/30x30",
            content: "This is my new post"
        }
    ]);

    // handle post creation
    const {getFieldProps, handleSubmit} = useFormik({
        initialValues: {
          postContent: '',
        },
        onSubmit: ({postContent}, {resetForm}) => {
          //update post statee
         setPosts((prevPosts) => {
             resetForm();
             return [{
                 id: Math.round(Math.random()*100000000),
                 userName: userName,
                 userPicture: "http://placehold.co/30x30",
                 content: postContent
             }, ...prevPosts ]
         })
        },
    });
    return <>

    {/*Create post form*/}
    <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center gap-2">
            <div>
                <img className="rounded-circle" src="http://placehold.co/50x50"/>
            </div>
            <div className="flex-shrink-0 flex-grow-1">
                <div className="form-floating">
                    <textarea className="form-control" placeholder={`What's on your mind, ${userName}?`} id="postContent" {...getFieldProps('postContent')} />
                    <label htmlFor="postContent">What's on your mind, {userName}?</label>
                </div>
            </div>
        </div>
        <button type="submit" className="w-100 btn btn-primary mt-3">Publish Post</button>
    </form>

    {/*show all posts*/}
    {posts.map(post => {
        return (
            <div key={post.id} className="mt-3">
                <PostCard userName={post.userName} userPicture={post.userPicture}>{post.content}</PostCard>
            </div>
        )
    })}


    </>
}

export default NewsFeed;
