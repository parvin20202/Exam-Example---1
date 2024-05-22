import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddCoursePage from "./pages/AddCoursePage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import "./assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad-course" element={<AddCoursePage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer /> */}
      hello
    </>
  );
}

export default App;
