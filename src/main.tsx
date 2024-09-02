import { StrictMode } from "react";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/index.tsx";
import About from "./pages/about/index.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import PatientSignup from "./components/patientRegistartionForm/index.tsx";
import DoctorSignup from "./components/doctorRegistrationForm/index.tsx";
import Doctors from "./pages/doctors/index.tsx";
import Testing from "./pages/testing/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/patientSignup" element={<PatientSignup />} />
      <Route path="/doctorSignup" element={<DoctorSignup />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/testing" element={<Testing />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
