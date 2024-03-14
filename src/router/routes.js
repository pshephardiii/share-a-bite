import HomePage from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage/LandingPage';
import UserShowPage from '../pages/UserShowPage/UserShowPage';

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
		Component: UserShowPage,
		key: 'user',
		path: '/usershowpage/:userId'
	}
];

export default routes;