const LeftSideBar = () => {

    const {userName} = JSON.parse(window.localStorage.getItem('user'))

    
    return  <ul className="list-group w-50">
                <li className="list-group-item">{userName}</li>
            </ul>
}

export default LeftSideBar;
