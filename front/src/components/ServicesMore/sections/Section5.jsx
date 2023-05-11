import { completedProjetsList } from "../../../const/consts";

const Section5 = () => {
  return (
    <section className="servicesMoreSection5">
      <div className="container">
        <h1 className="servicesMoreSection5_title">
          <span>
            10 000+ COMPLETED <br /> PROJECTS
          </span>
        </h1>
        <div className="row">
          <div className="col-3">
            <ul className="servicesMoreSection5_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesMoreSection5_list_item">
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesMoreSection5_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesMoreSection5_list_item">
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesMoreSection5_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesMoreSection5_list_item">
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="servicesMoreSection5_list">
              {completedProjetsList.map((item) => {
                return (
                  <li key={item.text} className="servicesMoreSection5_list_item">
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <button className="servicesMoreSection5_btn">more projects</button>
      </div>
    </section>
  );
};

export default Section5;
