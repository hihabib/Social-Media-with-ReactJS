import NewsFeed from '../../components/NewsFeed/NewsFeed.jsx';
import Header from '../../components/Header/Header.jsx';
import LeftSideBar from './components/LeftSideBar/LeftSideBar.jsx';
import RightSideBar from './components/RightSideBar/RightSideBar.jsx';

const MainFeed = () => {
    return <div className="container-fluid">

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
}

export default MainFeed;
