import React, { createContext, useContext, useState } from "react";
export const chelContext = createContext();
export const useChel = () => useContext(chelContext);
const ChelContext = ({ children }) => {
    const [checked1, setCheked1] = useState(false);
    const [checked2, setCheked2] = useState(false);
    const [checked3, setCheked3] = useState(false);
    const [checked4, setCheked4] = useState(false);
    // ! это для 2 функции
    function border() {
        const h1 = document.querySelectorAll("h1");
        const h2 = document.querySelectorAll("h2");
        const h3 = document.querySelectorAll("h3");
        const h4 = document.querySelectorAll("h4");
        const h5 = document.querySelectorAll("h5");
        const p = document.querySelectorAll("p");
        const li = document.querySelectorAll("li");
        const a = document.querySelectorAll("a");
        const elemArr = [p, h5, li, h1, h3, a, h2, h4];
        for (let i of elemArr) {
            for (let j of i) {
                checked2 ? j.classList.add("bord") : j.classList.remove("bord");
            }
        }
    }
    // ! это для 3 функции
    function bigFontSize() {
        const h1 = document.querySelectorAll("h1");
        const p = document.querySelectorAll("p");
        const h4 = document.querySelectorAll("h4");
        const h5 = document.querySelectorAll("h5");
        for (let i of h1) {
            checked3
                ? i.classList.add("big_fz_h1")
                : i.classList.remove("big_fz_h1");
            console.log(i);
        }
        for (let i of h4) {
            checked3
                ? i.classList.add("big_fz_h4")
                : i.classList.remove("big_fz_h4");
            console.log(i);
        }
        for (let i of h5) {
            checked3
                ? i.classList.add("big_fz_h5")
                : i.classList.remove("big_fz_h5");
            console.log(i);
        }
        for (let i of p) {
            checked3
                ? i.classList.add("big_fz_p")
                : i.classList.remove("big_fz_p");
            console.log(i);
        }
    }
    const value = {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        checked4,
        setCheked4,
        border,
        bigFontSize,
    };
    return (
        <chelContext.Provider value={value}>{children}</chelContext.Provider>
    );
};

export default ChelContext;
