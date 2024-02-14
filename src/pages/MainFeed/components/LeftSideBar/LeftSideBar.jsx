const LeftSideBar = () => {

    const user = JSON.parse(window.localStorage.getItem('user'))


    return  <ul className="list-group w-50">
                <li className="list-group-item">{user?.userName}</li>
            </ul>
}

export default LeftSideBar;
