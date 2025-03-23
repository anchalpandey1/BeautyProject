import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import './App.css'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop/>
			<Routers />
		</BrowserRouter>
	);
}

export default App;
