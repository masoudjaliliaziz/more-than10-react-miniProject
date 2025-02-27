import React, { useState } from "react";
import Bill from "./childComponents/Bill";
import Tip from "./childComponents/Tip";
import Calc from "./childComponents/Calc";
import Reset from "./childComponents/Reset";

function CalcaluateTheBill() {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState(0);
  const [ftip, setFtip] = useState(0);
  let percentage = Math.round((tip + ftip) / 2);
  let finalPay = (bill * percentage) / 100;
  return (
    <div className=" mx-auto my-12 flex flex-col justify-center items-center gap-5 w-[30%]">
      <Bill bill={bill} setBill={setBill} />
      <Tip tip={tip} setTip={setTip}>
        how did you like the service?
      </Tip>
      <Tip tip={ftip} setTip={setFtip}>
        how did your friend like the service?
      </Tip>
      {bill > 0 && (
        <>
          <Calc bill={bill} finalPay={finalPay} />
          <Reset onSetBill={setBill} onSetFtip={setFtip} OnSetTip={setTip} />
        </>
      )}
    </div>
  );
}

export default CalcaluateTheBill;
