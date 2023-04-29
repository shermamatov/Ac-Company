import React, { useEffect, useState } from "react";
import partner1 from '../../../../images/partner1.png'
import partner2 from '../../../../images/partner2.png'
import partner3 from '../../../../images/partner3.png'
import partner4 from '../../../../images/partner4.png'
import './partners.scss'
export default function Partners() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className='partners'>
        <div className="container">
            <div className="partners__inner">
                <img className={width<860?'d-none':''} src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
                <img className={width<860?'d-none':''} src={partner1} alt="" />
                <img className={width<860?'d-none':''} src={partner2} alt="" />
            </div>
        </div>
    </div>
  )
}
