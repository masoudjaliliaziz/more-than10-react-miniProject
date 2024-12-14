import React from 'react'

function Tip({children,tip,setTip}) {
  return (
    <div>
    <label htmlFor="">{children}</label>
    <select name="" id="" value={tip} onChange={(e)=>{setTip(Number(e.target.value))}}>
<option value="0">dissatisfied(0%)</option>
<option value="5">it was okay(5%)</option>
<option value="10">it was good(10%)</option>
<option value="20">amazing(20%)</option>

    </select>
  </div>
  )
}

export default Tip