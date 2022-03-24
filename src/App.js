import { Container } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';

import { Movies, Search, Series, Trending } from './Pages';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="app">
				<Container>
					<Switch>
						<Route path="/" component={Trending} exact />
						<Route path="/movies" component={Movies} />
						<Route path="/series" component={Series} />
						<Route path="/search" component={Search} />
					</Switch>
				</Container>
			</div>

			<SimpleBottomNavigation />
		</BrowserRouter>
	);
}

export default App;
