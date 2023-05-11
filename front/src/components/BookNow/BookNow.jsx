import React, { useEffect, useState } from "react";
import BookNowBlock1 from "./blocks/BookNowBlock1/BookNowBlock1";
import BookNowForm1 from "./blocks/BookNowForm1/BookNowForm1";
import BookNowForm2 from "./blocks/BookNowForm2/BookNowForm2";
import BookNowForm3 from "./blocks/BookNowForm3/BookNowForm3";

const BookNow = () => {
    const [book, setBook] = useState(localStorage.getItem("book") || "form1");
    useEffect(() => {
        if (!localStorage.getItem("book")) {
            localStorage.setItem("book", "form1");
        }
    }, []);
    function setLocal(value) {
        if (localStorage.getItem("book")) {
            localStorage.setItem("book", value);
            setBook(value);
        } else {
            localStorage.setItem("book", "form1");
            setBook("form1");
        }
    }
    return (
        <div className="container">
            <BookNowBlock1 />
            {book == "form1" && <BookNowForm1 setLocal={setLocal} />}
            {book == "form2" && <BookNowForm2 setLocal={setLocal} />}
            {book == "form3" && <BookNowForm3 setLocal={setLocal} />}
        </div>
    );
};

export default BookNow;
