import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./Components/Header/Banner";
import HeaderSlider from "./Components/Slider/HeaderSlider";
import Header from "./Components/Header/Header";
import HomeSlider from "./Components/Slider/HomeSlider";
import Contacts from "./Components/Pages/Contacts";
import Rform from "./Components/Form/Rform";
import Presentation from "./Components/Presentation/Presentation";
import Discounts from "./Components/Discounts/Discounts";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header />
            <HomeSlider />
          </Route>
          <Route path="/contact">
            <h2>Contacts</h2>
            <Contacts />
          </Route>
          <Route path="FAQ">
            <h2>faq</h2>
          </Route>
          <Route path="/">
            <Banner />
            <HomeSlider />
            <Rform />
            <Presentation />
            <Discounts />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
