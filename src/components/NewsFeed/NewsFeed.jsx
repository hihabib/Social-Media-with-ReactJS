import PostCard from '../PostCard/PostCard.jsx'
import {useState, useEffect} from 'react'
import {useFormik} from 'formik';
import {saveLocalStorage, getLocalStorage} from '../../utils/localStorage.js';
import {POST} from '../../constants/storageKey.js'
import {useNavigate} from 'react-router-dom';

const NewsFeed = () => {
    // current user
    const user = JSON.parse(window.localStorage.getItem('user'));

    // newsfeed posts
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(getLocalStorage(POST) ?? []);
    }, []);

    // handle post creation
    const {getFieldProps, handleSubmit} = useFormik({
        initialValues: {
          postContent: '',
        },
        onSubmit: ({postContent}, {resetForm}) => {
          //update post statee
         setPosts((prevPosts) => {
             resetForm();
             const newPost = {
                 id: Math.round(Math.random()*100000000),
                 userName: user?.userName,
                 userPicture: "http://placehold.co/30x30",
                 content: postContent,
                 likedBy: []
             };
             // save new post at database
             saveLocalStorage(newPost, POST);
             return [newPost, ...prevPosts ]
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
                    <textarea className="form-control" placeholder={`What's on your mind, ${user?.userName}?`} id="postContent" {...getFieldProps('postContent')} />
                    <label htmlFor="postContent">What's on your mind, {user?.userName}?</label>
                </div>
            </div>
        </div>
        <button type="submit" className="w-100 btn btn-primary mt-3">Publish Post</button>
    </form>

    {/*show all posts*/}
    {posts?.map(post => {
        return (
            <div key={post.id} className="mt-3">
                <PostCard post={post}>{post.content}</PostCard>
            </div>
        )
    })}


    </>
}

export default NewsFeed;
