import { useState } from "react";

const fakeData = [
  {
    title: "fake title 1",
    description: "Whatchamacallit description and other cool stuff",
    key: crypto.randomUUID(),
  },
  {
    title: "fake title 2",
    description: "Whatchamacallit description and other cool stuff",
    key: crypto.randomUUID(),
  },
  {
    title: "fake title 3",
    description: "Whatchamacallit description and other cool stuff",
    key: crypto.randomUUID(),
  },
  {
    title: "fake title 4",
    description: "Whatchamacallit description and other cool stuff",
    key: crypto.randomUUID(),
  },
  {
    title: "fake title 5",
    description: "Whatchamacallit description and other cool stuff",
    key: crypto.randomUUID(),
  },
];

const C1 = () => {
  const [dataOrder, setDataOrder] = useState(fakeData);

  function goLeft() {
    const dataCopy = [...dataOrder];
    dataCopy.push(dataOrder[0]);
    dataCopy.shift();
    setDataOrder(dataCopy);
  }

  function goRight() {
    const dataCopy = [...dataOrder];
    dataCopy.unshift(dataOrder[dataOrder.length - 1]);
    dataCopy.pop();
    setDataOrder(dataCopy);
  }

  return (
    <>
      <div
        id="carrousel-container"
        className="grid justify-center mt-20 bg-blue-100 text-center"
      >
        <div id="carrousel" className="text-2xl">
          <h2>Jibber Jammer</h2>
          <div className="flex py-30 px-10">
            <button className="hover:cursor-pointer mr-5" onClick={goLeft}>
              &lt;
            </button>
            {dataOrder.map((data, index) => {
              return (
                <div
                  key={data.key}
                  className={`flex flex-col justify-between py-5 px-5 mr-10 border-2 border-black rounded-xl ${
                    index === 2 && "selected"
                  }`}
                >
                  <h3 className="pb-2">{data.title}</h3>
                  <p className="pb-2">{data.description}</p>
                  <a href="/">Learn More</a>
                </div>
              );
            })}
            <button className="hover:cursor-pointer" onClick={goRight}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default C1;
