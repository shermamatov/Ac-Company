import React from "react";
import "./Location.scss";
const Location = () => {
    return (
        <div className="location">
            <div className="location_text_block">
                <p>OUR WORKS</p>
                <h2>Our latest project locations</h2>
                <p className="location_text_desc">
                    We offer a wide range of HVAC services catered to both{" "}
                    <br />
                    residential and commercial clients. Even the all-powerful{" "}
                    <br />
                    Pointing has no control about the blind texts.
                </p>
            </div>
            <div className="location_map_block">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.121129090489!2d-73.99754091555948!3d40.71534989763234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2845c4a543%3A0xf28678cdeaa1208c!2zNzMgQ2FuYWwgU3QsIE5ldyBZb3JrLCBOWSAxMDAwMiwg0KHQqNCQ!5e0!3m2!1sru!2skg!4v1681408995557!5m2!1sru!2skg"
                    width="100%"
                    height="400"
                    title="map"
                    style={{ border: "none" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe title="map1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12132.994193713528!2d72.81609734999999!3d40.5139971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681426914519!5m2!1sru!2skg" width="100%" height="400" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Location;
