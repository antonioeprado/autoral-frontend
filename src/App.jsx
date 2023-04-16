import { useState, useContext } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
import "normalize.css";
import SignIn from "./pages/SignIn";
import Topbar from "./components/Topbar/Topbar";
import useToken from "./hooks/useToken";
import Homepage from "./pages/Homepage";
import { UserProvider } from "./contexts/UserContext";

function App() {
    const { light, dark } = useContext(ThemeContext);
    const [theme, setTheme] = useState(light);

    return (
        <>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <MainLayout>
                        <Topbar themes={{ light, dark }} setTheme={setTheme} />
                        <Router>
                            <Routes>
                                <Route path='/sign-up' element={<SignUp />} />
                                <Route path='/sign-in' element={<SignIn />} />
                                <Route
                                    path='/home'
                                    element={
                                        <ProtectedRouteGuard>
                                            <Homepage />
                                        </ProtectedRouteGuard>
                                    }></Route>
                            </Routes>
                        </Router>
                    </MainLayout>
                </UserProvider>
            </ThemeProvider>
        </>
    );
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();

    if (!token) {
        return <Navigate to='/sign-in' />;
    }

    return <>{children}</>;
}

export default App;
