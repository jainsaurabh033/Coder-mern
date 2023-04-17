import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Navigation from "./components/Shared/Navigation/Navigation.js";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/Shared/Loader/Loader";

function App() {
  // call refresh endpoint
  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading, please wait.." />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<GuestRoute Component={Home} />}></Route>
        <Route
          path="/authenticate"
          element={<GuestRoute Component={Authenticate} />}
        />
        <Route
          path="/activate"
          element={<SemiProtectedRoute Component={Activate} />}
        />
        <Route path="/rooms" element={<ProtectedRoute Component={Rooms} />} />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ Component }) => {
  //const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    return <Navigate to="/rooms" />;
  } else {
    return <Component />;
  }
};

const SemiProtectedRoute = ({ Component }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return <Component />;
  } else {
    return <Navigate to="/rooms" />;
  }
};

const ProtectedRoute = ({ Component }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return <Navigate to="/activate" />;
  } else {
    return <Component />;
  }
};

export default App;
