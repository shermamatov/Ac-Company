import React, { useState } from "react";
import EqSecondBlock1 from "./EqSecondBlocks/EqSecondBlock1/EqSecondBlock1";
import EqSecondBlock2 from "./EqSecondBlocks/EqSecondBlock2/EqSecondBlock2";
import EqSecondBlock3 from "./EqSecondBlocks/EqSecondBlock3/EqSecondBlock3";
import BestOffBlock2 from "../../BestOffers/BestOffers1/BestOff1Blocks/BestOff1Block2/BestOffBlock2";
import Enjeneers from "../../Home/block/block5/Enjeneers";
import OurProjectsPhotos from "../../Home/block/block9/OurProjectsPhotos";
import LatestNews from "../../Home/block/block10/LatestNews";
import Partners from "../../Home/block/block11/Partners";

const EqSecond = () => {
    const [categActive, setCategActive] = useState(true);
    const [modal, setModal] = useState(false);

    return (
        <div onClick={() => setModal(false)}>
            <EqSecondBlock1
                categActive={categActive}
                setCategActive={setCategActive}
            />
            <EqSecondBlock2
                categActive={categActive}
                setCategActive={setCategActive}
                modal={modal}
                setModal={setModal}
            />
            <EqSecondBlock3 />
            <BestOffBlock2 />
            <Enjeneers />
            <OurProjectsPhotos />
            <LatestNews />
            <Partners />
        </div>
    );
};

export default EqSecond;
