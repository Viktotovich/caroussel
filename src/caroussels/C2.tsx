import fakeData from "./data";
import "../assets/c2-animation.css";

//animations done in an external css file
const C2 = () => {
  function goLeft() {
    //
  }

  function goRight() {
    //
  }

  return (
    <>
      <div id="carrousel-container">
        <div id="carrousel">
          <h2>Jibber Jabber</h2>
          <div id="card-container">
            <button className="mr-5">&lt;</button>
            {fakeData.map((data, index) => {
              return (
                <div
                  key={data.key}
                  className={`card ${index === 2 && "selected"}`}
                >
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <a href="/">Learn More</a>
                </div>
              );
            })}
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default C2;
