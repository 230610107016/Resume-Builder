import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResumeBuilder from "../pages/ResumeBuilder/ResumeBuilder";
// import ResumePreview from "../pages/ResumePreview/ResumePreview";
// import Templates from "../pages/Templates/Temp";
// import MyResumes from "../pages/MyResumes/MyResumes";
// import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/builder/:id" element={<ResumeBuilder />} />

        {/* <Route path="/preview/:id" element={<ResumePreview />} /> */}

        {/* <Route path="/templates" element={<Templates />} /> */}

        {/* <Route path="/my-resumes" element={<MyResumes />} /> */}

        {/* <Route path="/profile" element={<Profile />} /> */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

