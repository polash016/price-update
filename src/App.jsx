import "./App.css";
import { IoReloadCircleSharp } from "react-icons/io5";
import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem("lastValue");
    return storedValue ? parseFloat(storedValue) : 990000;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIncrement = (Math.random() * 0.5 + 0.01).toFixed(2);
      const newValue = (
        parseFloat(value) + parseFloat(randomIncrement)
      ).toFixed(2);
      setValue(newValue);
      localStorage.setItem("lastValue", newValue);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [value]);
  return (
    <div className="md:flex gap-4 mt-6 w-[90%] mx-auto">
      <div className="border border-gray-400 bg-[#F2F7FA] p-4 w-full md:w-[50%]">
        <div className="mt-10 text-center mb-3">
          <h1 className="text-4xl font-semibold text-[#809CAF] mb-3">
            Plunk Home Value<sup>TM</sup>
          </h1>
          <p className="text-2xl text-[#969B9A]">
            Delivers real-time valuation for <br /> 104+ million homes
            nationwide
          </p>
        </div>
        <div className="mx-8 bg-white p-3 border rounded-lg shadow-md">
          <div className="flex justify-around items-center mt-4">
            <div>
              <h1 className="text-xl font-bold text-[#00022C]">
                Plunk Home Value<sup className="text-xs">TM</sup>
              </h1>
            </div>
            <div>
              <IoReloadCircleSharp />
            </div>
          </div>
          <div className="text-center space-y-4 mt-12">
            <h1 className="animated-value text-6xl font-bold text-[#0E446B]">
              ${value}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#00986C] font-bold text-xl">
              <BsArrowUp />
              <h1>
                $290.62<sub>/day</sub>
              </h1>
            </div>
            <button
              disabled
              className="flex items-center gap-3 mx-auto px-3 py-1 text-white font-bold bg-[#87B3FA] border rounded-lg"
            >
              Improve Accuracy <BsArrowRight className="text-2xl" />
            </button>
          </div>
          <div className="flex gap-1 justify-center items-center mt-10 mb-4">
            <h3 className="text-center font-semibold">powered by</h3>{" "}
            <img
              className="w-18 h-8"
              src="https://static.wixstatic.com/media/d95e4b_9795ab28ac554ed3bf47b7c0013ff6a3~mv2.png/v1/fill/w_374,h_167,al_c,q_85,usm_2.00_1.00_0.00,enc_auto/Plunk%C2%AE-GradientHoriz_VA_padded-smallAsset%205.png"
              alt=""
            />
          </div>
        </div>
        <button className="block mx-auto my-6 p-4 text-white bg-[#2B77FC] hover:bg-[#043A60] border rounded-2xl">
          Plunk Home Value<sup>TM</sup> API
        </button>
      </div>
      <div className="border border-gray-400 rounded-md bg-lime-200"></div>
    </div>
  );
}

export default App;
