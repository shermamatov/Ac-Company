import { questions_list } from "../../../const/consts";

const Section4 = () => {
    return (
        <section className="servicesMoreSection4">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="servicesMoreSection4_title">FAQ</h1>
                        <h3 className="servicesMoreSection4_subtitle">What problems can arise during heating?</h3>
                        <p className="servicesMoreSection4_text">We offer a wide range of HVAC services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-6">
                        <ul className="servicesMoreSection4_list">
                            {
                                questions_list.map(item =>{
                                    return <li key={item.id} className="servicesMoreSection4_list_item">{item.text}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="servicesMoreSection4_list">
                            {
                                questions_list.map(item =>{
                                    return <li key={item.id} className="servicesMoreSection4_list_item">{item.text}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <button className="servicesMoreSection4_btn">more questions</button>
            </div>
        </section>
    );
}

export default Section4;
