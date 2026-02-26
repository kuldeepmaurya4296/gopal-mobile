import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Handled smoothly by SmoothScroll component using Lenis
    }, [pathname]);

    return null;
};

export default ScrollToTop;
