import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GoogleTranslate from './components/GoogleTranslate'

const App = () => {
    const [fade, setFade] = useState("opacity-100");
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setFade("opacity-0"); // Start fade-out
        setLoading(true); // Show loading spinner

        const timeout = setTimeout(() => {
            setFade("opacity-100"); // Fade-in new content
            setLoading(false); // Hide loading spinner
        }, 500); // Transition duration

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [location.pathname]); // Runs on every route change

    return (
        <div className="min-h-screen relative">
            {/* Loading Spinner */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50 font-medium">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Apply fade-in and fade-out animation */}
            <div className={`transition-opacity duration-500 ${fade}`}>
                <Outlet />
            </div>
            <GoogleTranslate />
        </div>
    );
};

export default App;
