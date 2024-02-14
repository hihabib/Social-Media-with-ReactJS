import NewsFeed from '../../components/NewsFeed/NewsFeed.jsx';
import Header from '../../components/Header/Header.jsx';
import LeftSideBar from './components/LeftSideBar/LeftSideBar.jsx';
import RightSideBar from './components/RightSideBar/RightSideBar.jsx';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react'

const MainFeed = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem('user')) === null){
            navigate("/");
        } else {
            setLoading(false)
        }
    }, []);

    return loading == true ? <h1>Loading...</h1> : (
        <div className="container-fluid">

            <Header/>

            <div className="row">
                <div className="col-md-4">
                    <LeftSideBar/>
                </div>
                <div className="col-md-4">
                    <NewsFeed/>
                </div>
                <div className="col-md-4">
                    <RightSideBar/>
                </div>
            </div>
        </div>
    )
}

export default MainFeed;
