import React from "react";
import { Routes, Route } from "react-router-dom";

//==========PAGES==========
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import HomePageUnloggedIn from "./pages/HomePage/HomePageUnloggedIn/HomePageUnloggedIn";
import AssignTaskPage from "./pages/ModuleAssign/AssignTaskPage/AssignTaskPage";
import AssignEmployeeTaskPage from "./pages/ModuleAssign/AssignEmployeeTaskPage/AssignEmployeeTaskPage";

//==========COMPONENTS==========
import Footer from "./components/Footer/Footer";

//==========CONTEXT==========
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectLoggedIn from "./contexts/ProtectRoutes/ProtectLoggedIn";
import ProtectUnloggedIn from "./contexts/ProtectRoutes/ProtectUnloggedIn";
import EmployeeTask from "./pages/ModuleAssign/EmployeeTaskPage/EmployeeTask";
import CreateTaskPage from "./pages/ModuleAssign/CreateTaskPage/CreateTaskPage";
import AssignVehicle from "./pages/ModuleAssign/AssignVehiclePage/AssignVehicle";
import AssignRoute from "./pages/ModuleAssign/AssignRoutePage/AssignRoute";
import UpdateTask from "./pages/ModuleAssign/UpdateTaskPage/UpdateTask";
import CreateRoute from "./pages/ModuleRoute/CreateRoute/CreateRoute";
import UpdateRoute from "./pages/ModuleRoute/UpdateRoute/UpdateRoute";

//==========MAIN APP==========
function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectLoggedIn>
                <Login />
              </ProtectLoggedIn>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectLoggedIn>
                <SignUp />
              </ProtectLoggedIn>
            }
          />
          {/* Else use ProtectUnloggedIn */}
          <Route
            path="/home"
            element={
              <ProtectUnloggedIn>
                <HomePage />
              </ProtectUnloggedIn>
            }
          />
          {/* If not logged in, then use ProtectLoggedIn */}
          <Route
            path="/"
            element={
              <ProtectLoggedIn>
                <HomePageUnloggedIn />
              </ProtectLoggedIn>
            }
          />
          <Route path="/assignTask/:slug" element={<AssignEmployeeTaskPage />} />
          <Route path="/assignTask" element={<AssignTaskPage />} />
          <Route path="/viewDetailTask" element={<EmployeeTask />} />
          <Route path="/createTask" element={<CreateTaskPage />} />
          <Route path="/createTask/assignVehicle" element={<AssignVehicle />} />
          <Route path="/createTask/assignRoute" element={<AssignRoute />} />
          <Route path="/updateTask" element={<UpdateTask />} />
          <Route path="/updateTask/assignVehicle" element={<AssignVehicle />} />
          <Route path="/updateTask/assignRoute" element={<AssignRoute />} />
          <Route path="/createRoute" element={<CreateRoute />} />
          <Route path="/updateRoute" element={<UpdateRoute />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
