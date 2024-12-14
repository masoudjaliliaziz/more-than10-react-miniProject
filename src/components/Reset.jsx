import React from 'react'

function Reset({onSetBill,OnSetTip,onSetFtip}) {
  return (
    <button className="bg-green-600 p-2 rounded-lg text-white " onClick={()=>{
        onSetBill(" ");
        OnSetTip(0);
        onSetFtip(0);
      }}>reset</button>
  )
}

export default Reset