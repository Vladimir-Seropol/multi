import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormProvider";
import Step1 from "./components/pages/AuthPages/Step1";
import Step2 from "./components/pages/AuthPages/Step2";
import Home from "./components/pages/OtherPages/HomePage/Home";
import Notifications from "./components/pages/OtherPages/NotificationsPage/Notifications"; 
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route
            path="/step2"
            element={
              <ProtectedRoute requiredFields={["email", "password"]}>
                <Step2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute requiredFields={["authCode"]}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute requiredFields={["authCode"]}>
                <Notifications />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;