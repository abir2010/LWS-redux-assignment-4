import "./App.css";
import HomeContainer from "./components/HomeContainer";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <HomeContainer />
            </div>
        </Provider>
    );
}

export default App;
