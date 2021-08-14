import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


//animation aos
import aos from "aos";
import "../node_modules/aos/dist/aos.css";

//pages
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Faculty from "./components/pages/faculty/Faculty";
import Notice from "./components/pages/notice/Notice";
import Library from "./components/pages/Library";

import Books from "./components/pages/books/Books";
import Event from "./components/pages/events/Event";
import Alumni from "./components/pages/Alumni";
import Login from "./components/pages/login/Login";
import Thesis from "./components/pages/Thesis";
import Projects from "./components/pages/Projects";

import Questions from "./components/pages/questions/Questions";
import Session from "./components/pages/questions/Session";
import { NoticeDescription } from "./components/pages/notice/NoticeDescription";
import { QuestionsList } from "./components/pages/questions/QuestionsList";
import { EventDescrption } from "./components/pages/events/EventDescription";
import Footer from "./components/layout/Footer";

function App() {
  aos.init({
    duration: 500,
  });

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="/notice" component={Notice} />
          <Route exact path="/notice/:noticeId" component={NoticeDescription} />

          <Route exact path="/library" component={Library} />
          <Route exact path="/library/books" component={Books} />
          <Route exact path="/library/thesis" component={Thesis} />
          <Route exact path="/library/projects" component={Projects} />
          <Route exact path="/library/questions" component={Questions} />
          <Route
            exact
            path="/library/questions/:semester"
            component={Session}
          />
          <Route
            exact
            path="/library/questions/:semester/:year"
            component={QuestionsList}
          />
          <Route exact path="/event" component={Event} />
          <Route exact path="/event/:eventId" component={EventDescrption} />

          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
