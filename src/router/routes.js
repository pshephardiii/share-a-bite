import HomePage from '../pages/HomePage/Homepage';
import LandingPage from '../pages/LandingPage/LandingPage';
import UserShowPage from '../pages/UserShowPage/UserShowPage';
import AuthPage from '../pages/AuthPage/AuthPage';

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
		Component: AuthPage,
		key: 'auth',
		path: '/auth'
	},
    {
		Component: UserShowPage,
		key: 'user',
		path: '/usershowpage/:userId'
	}
];

export default routes;