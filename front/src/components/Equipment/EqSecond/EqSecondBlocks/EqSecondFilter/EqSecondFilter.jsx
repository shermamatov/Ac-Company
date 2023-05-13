import React from "react";
import "./EqSecondFilter.scss";
import EqSecondSlider from "./EqSecondSlider";
const EqSecondFilter = () => {
    return (
        <div className="EqSecond_filter" onClick={(e) => e.stopPropagation()}>
            <div className="EqSecond_filter_top">
                <h2>Price Range</h2>
                <EqSecondSlider />
                <div className="Eq_line"></div>
                <div className="EqSecond_filter_bottom">
                    <h2>Product Features</h2>
                    <div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">All</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Ready to Ship</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Low NOx</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Ultra-Low NOx</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Scratch & Dent Savings</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Eq_line"></div>
            <div className="EqSecond_filter_bottom">
                <h2>Tonag</h2>
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 0-1 Ton</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 1-2 Ton</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 2-3 Ton</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">3-4 Ton</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">4-5 Ton</label>
                    </div>
                </div>
            </div>
            <div className="Eq_line"></div>
            <div className="EqSecond_filter_bottom">
                <h2>Furnace Efficiency / AFUE</h2>
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 80%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 92%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns"> 96%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">97%</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">98%</label>
                    </div>
                </div>
            </div>
            <div className="Eq_line"></div>
            <div className="EqSecond_filter_bottom">
                <h2>Brand</h2>
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">AirQuest</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Goodman</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Thermo Pride</label>
                    </div>
                </div>
            </div>
            <div className="Eq_line"></div>
            <div className="EqSecond_filter_bottom">
                <h2>Manufacturer</h2>
                <div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Lenox</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Goodman</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns" />
                        <label for="horns">Carrier</label>
                    </div>
                </div>
            </div>
            <button>Save</button>
        </div>
    );
};

export default EqSecondFilter;
