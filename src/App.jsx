
import { useState } from "react"
function App() {
  const[bill,setBill]=useState();
  const[tip,setTip]=useState(0);
  const[ftip,setFtip]=useState(0);
  let percentage=Math.round((tip+ftip)/2);
  let finalPay=(bill*percentage)/100;
  console.log(percentage);
return (
    
    <div className=" mx-auto my-12 flex flex-col justify-center items-center gap-5 w-[30%]">
     
    <div>
      <label htmlFor="">how much was the bill?</label>
      <input className="bg-slate-100" type="text" value={bill} onChange={(e)=>{setBill(e.target.value)}} />
    </div>
    <div>
      <label htmlFor="">how did you like the service?</label>
      <select name="" id="" value={tip} onChange={(e)=>{setTip(Number(e.target.value))}}>
<option value="0">dissatisfied(0%)</option>
<option value="5">it was okay(5%)</option>
<option value="10">it was good(10%)</option>
<option value="20">amazing(20%)</option>

      </select>
    </div>
    <div>
      <label htmlFor="">how did your friend like the service?</label>
      <select name="" id="" value={ftip} onChange={(e)=>{setFtip(Number(e.target.value))}}>
<option value="0">dissatisfied(0%)</option>
<option value="5">it was okay(5%)</option>
<option value="10">it was good(10%)</option>
<option value="20">amazing(20%)</option>

      </select>
    </div>

    <h1>ypu pay ${Number(bill)+Number(finalPay)} (${bill}+${finalPay})</h1>
    <button className="bg-green-600 p-2 rounded-lg text-white " onClick={()=>{
      setBill(" ");
      setTip(0);
      setFtip(0);
    }}>reset</button>
    </div>
  )
}

export default App
