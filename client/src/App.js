import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
	return (
		<Router>
			<div className="App">
				<div
					style={{
						margin: '20px',
					}}
				>
					<Link to="/">Home</Link>
					&nbsp;&nbsp;&nbsp;
					<Link to="/otherpage">Other Page</Link>
				</div>
				<div>
					<Route exact path="/" component={Fib} />
					<Route path="/otherpage" component={OtherPage} />
				</div>
			</div>
		</Router>
	);
}

export default App;
