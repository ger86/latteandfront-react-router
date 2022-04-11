import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./views/AboutMe";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Project from "./views/Project";
import Thanks from "./views/Thanks";
import { ABOUT_ME, CONTACT, HOME, THANKS } from "./config/routes";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Projects from "./views/Projects";
import ProjectsList from "./views/ProjectsList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT_ME} element={<AboutMe />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path="/projects" element={<Projects />}>
            <Route index element={<ProjectsList />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path={THANKS} element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
