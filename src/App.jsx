import { useState, useContext, useEffect } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
import "normalize.css";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import Topbar from "./components/Topbar/Topbar";
import Profile from "./pages/Profile";
import Family from "./pages/Family";
import useToken from "./hooks/useToken";
import Homepage from "./pages/Homepage";
import { UserProvider } from "./contexts/UserContext";
import { useFamily } from "./hooks/useFamily";
import FirstLogin from "./pages/FirstLogin";
import FamilyContext, { FamilyProvider } from "./contexts/FamilyContext";

function App() {
    const { light, dark } = useContext(ThemeContext);
    const [theme, setTheme] = useState(light);

    return (
        <>
            <ThemeProvider theme={theme}>
                <UserProvider>
                    <FamilyProvider>
                        <MainLayout>
                            <Topbar themes={{ light, dark }} setTheme={setTheme} />
                            <Router>
                                <Routes>
                                    <Route path='/sign-up' element={<SignUp />} />
                                    <Route path='/sign-in' element={<SignIn />} />
                                    <Route path='/first-login' element={<FirstLogin />} />
                                    <Route
                                        path='/'
                                        element={
                                            <ProtectedRouteGuard>
                                                <Homepage />
                                            </ProtectedRouteGuard>
                                        }>
                                        <Route path='home' element={<Products />} />
                                        <Route path='profile' element={<Profile />} />
                                        <Route path='/family' element={<Family />} />
                                        <Route index path='*' element={<Navigate to='/home' />} />
                                    </Route>
                                </Routes>
                            </Router>
                        </MainLayout>
                    </FamilyProvider>
                </UserProvider>
            </ThemeProvider>
        </>
    );
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();
    const navigate = useNavigate();
    const { setFamilyData } = useContext(FamilyContext);
    const { fetchFamily } = useFamily();

    if (!token) {
        return <Navigate to='/sign-in' />;
    }

    useEffect(() => {
        const userFamily = fetchFamily(token);
        userFamily
            .then((res) => {
                setFamilyData(res);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    navigate("/first-login");
                }
            });
    }, [token]);

    return <>{children}</>;
}

export default App;
