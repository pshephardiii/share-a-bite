import HomePage from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage/LandingPage';
import UserShowPage from '../pages/UserShowPage/UserShowPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PostCreatePage from '../pages/PostCreatePage/PostCreatePage';


const routes = [
	{
		Component: HomePage,
		key: 'home',
		path: '/home'
	},
	{
		Component: LandingPage,
		key: 'shareabite',
		path: '/shareabite'
	},
	{
		Component: SearchPage,
		key: 'search',
		path: '/search'
	},
	{
		Component: PostCreatePage,
		key: 'createpost',
		path: '/createpost'
	},
    {
		Component: UserShowPage,
		key: 'user',
		path: '/usershowpage/:userId'
	}
];

export default routes;