import React from 'react'

function Bill({bill,setBill}) {
  return (
    <div>
    <label htmlFor="">how much was the bill?</label>
    <input className="bg-slate-100" type="text" value={bill} onChange={(e)=>{setBill(e.target.value)}} />
  </div>
  )
}

export default Bill