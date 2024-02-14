import {POST} from '../constants/storageKey.js';
import {getLocalStorage, replaceLocalStorage} from './localStorage.js';


export const isAlreadyLiked = (id, userName) => {
    const allPosts = getLocalStorage(POST);
    for(let i = 0; i < allPosts.length; i++){
        if(allPosts[i].id === id){
            if(allPosts[i].likedBy.includes(userName)){
                return true;
            } else {
                return false;
            }
            break;
        }
    }
    return false;
}

export const likePostDB = (id, userName) => {
    const allPosts = getLocalStorage(POST);
    for(let i = 0; i < allPosts.length; i++){
        if(allPosts[i].id === id){
            // add username from likedBy list
            allPosts[i].likedBy = [...allPosts[i].likedBy, userName]
            break;
        }
    }
    replaceLocalStorage(allPosts, POST);
}

export const unlikePostDB = (id, userName) => {
    const allPosts = getLocalStorage(POST);
    for(let i = 0; i < allPosts.length; i++){
        if(allPosts[i].id === id){
            // remove username from likedBy list
            const index = allPosts[i].likedBy.findIndex((el) => el === userName);
            allPosts[i].likedBy.splice(index, 1);
            break;
        }
    }
    replaceLocalStorage(allPosts, POST);
}
