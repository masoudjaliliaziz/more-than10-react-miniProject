import React, { useEffect, useState } from "react";

function Currency() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState(1);
  const [calcaluating, setCalcaluating] = useState(false);
  useEffect(
    function () {
      setCalcaluating(true);
      async function convert() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        setOutput(data.rates[to]);
      }
      setCalcaluating(false);
      convert();
    },
    [amount, from, to]
  );
  return (
    <div className="rounded-lg mx-auto my-20 w-4/12 bg-slate-100 p-9 text-center flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-2">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          className="rounded-md outline-blue-300 px-4 text-blue-900 font-bold"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-1/8 p-2 bg-blue-500 text-white font-bold rounded-md outline-none"
        >
          <option name="" id="" value="USD">
            USD
          </option>
          <option name="" id="" value="EUR">
            EUR
          </option>
          <option name="" id="" value="CAD">
            CAD
          </option>
          <option name="" id="" value="INR">
            INR
          </option>
        </select>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-1/8 p-2 bg-green-500 text-white font-bold rounded-md outline-none"
        >
          <option name="" id="" value="USD">
            USD
          </option>
          <option name="" id="" value="EUR">
            EUR
          </option>
          <option name="" id="" value="CAD">
            CAD
          </option>
          <option name="" id="" value="INR">
            INR
          </option>
        </select>
      </div>
      {amount > 0 && (
        <p className="font-bold text-xl text-blue-600">
          {output}
          <span className="text-sm text-green-500">{`  ${to}`}</span>{" "}
        </p>
      )}
    </div>
  );
}

export default Currency;
