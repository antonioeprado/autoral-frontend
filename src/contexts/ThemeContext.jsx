import { createContext } from "react";

const themes = {
    light: {
        name: "light",
        mainColor: "#ffffff",
        secondaryColor: "#0e101c",
        textColor: "#2d2d2d",
        subTitleColor: "#ec5990",
        terciaryColor: "#516391",
        topbarTextColor: "#fafafa",
    },
    dark: {
        name: "dark",
        mainColor: "#081229",
        secondaryColor: "#191d3a",
        textColor: "#ffffff",
        subTitleColor: "#ec5990",
        terciaryColor: "#516391",
        topbarTextColor: "#fafafa",
    },
};

const ThemeContext = createContext(themes);

export default ThemeContext;
