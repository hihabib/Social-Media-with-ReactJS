import {likePostDB, isAlreadyLiked, unlikePostDB} from "../../utils/post.js"
import {useState} from 'react';
import {getCurrentUser} from '../../utils/user.js'
import { BiLike } from "react-icons/bi";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { IoIosCloseCircle } from "react-icons/io";

const PostCard = ({post, children}) => {
    // current user
    const currentUser = getCurrentUser();

    const {userName, userPicture, id, likedBy: likedByProps} = post;

    const [likedBy, setLikedBy] = useState(likedByProps);
    const [likes, setLikes] = useState(likedBy.length);
    const [isLiked, setIsLiked] = useState(likedBy.find(user => user === currentUser?.userName) !== undefined);
    const [showLikesList, setShowLikesList] = useState(false);


    const likePost = (id, userName) => {
        if(!isAlreadyLiked(id, userName)){
            // like
            setIsLiked(true);
            setLikedBy((prevState) => {
                return [...prevState, userName]
            })
            setLikes(prevLikes => ++prevLikes);
            likePostDB(id, userName)
        } else {
            // unlike
            setIsLiked(false);

            setLikedBy((prevState) => {
                const clone = [...prevState];
                const index = clone.findIndex(user => user === userName);
                clone.splice(index, 1);
                return clone;
            })
            setLikes(prevLikes => --prevLikes);
            unlikePostDB(id, userName)
        }

    }

    // splited text
    const shortContentLength = 100;
    // post content as array
    const postContentArr = children.split("");
    // splited part of post
    const deletedPart = postContentArr.splice(shortContentLength, (postContentArr.length - shortContentLength)).join("");
    const [isShortContent, setIsShortContent] = useState(deletedPart !== '');

    // show full post
    const showFullContent = () => {
        setIsShortContent(false);
    }


    return (<>
        {/*Likes list modal*/}
        <Modal closeIcon={<IoIosCloseCircle style={{fontSize: "2rem"}}/>} open={showLikesList} onClose={() => setShowLikesList(false)} center>
            <div className="">
                <ul className="list-group list-group-flush" style={{width: "400px"}}>
                    {likedBy.map(userName => {
                        return(
                            <li key={userName} className="list-group-item">{userName}</li>
                        )
                    })}
                </ul>
            </div>
        </Modal>
        <div className="card">
            <div className="p-2 d-flex gap-2 align-items-center">
                <div><img className="rounded-circle" src={userPicture}/></div>
                <div><strong>{userName}</strong></div>
            </div>
            <div className="p-2">{postContentArr.join("")}{isShortContent ? (
                <>
                <span> ...</span><button onClick={showFullContent} className="btn btn-link p-0">See more</button>
                </>
            ) : <>{deletedPart}</>}</div>

            {likes !== 0 && <div><button onClick={() => setShowLikesList(true)} className="px-2 btn btn-link w-auto"><BiLike /> {likes}</button></div>}
            <div className="p-2 d-flex gap-2 align-items-center">
                <div className="w-100"><button onClick={() =>likePost(id, currentUser?.userName) } className={`btn ${isLiked ? "btn-primary" : "btn-light"} btn-sm w-100`}><BiLike /> Like</button></div>
                <div className="w-100"><button className="btn btn-light btn-sm w-100">Comments</button></div>
                <div className="w-100"><button className="btn btn-light btn-sm w-100">Share</button></div>
            </div>
        </div>
    </>)
}

export default PostCard;
