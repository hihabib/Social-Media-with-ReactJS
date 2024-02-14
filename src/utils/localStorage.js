export const saveLocalStorage = (data, key) => {
    try {
        const hasData = JSON.parse(window.localStorage.getItem(key));
        if(hasData === null){
            const newPost = [data];
            window.localStorage.setItem(key, JSON.stringify(newPost));
            return true;
        } else {
            window.localStorage.setItem(key, JSON.stringify([...hasData, data]))
        }
    } catch(error){
        console.error(error);
        return false;
    }
}

export const replaceLocalStorage = (data, key) => {
    window.localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorage = (key) => {
    try{
        return JSON.parse(window.localStorage.getItem(key));
    } catch(error){
        console.log(error);
        return []
    }
}
