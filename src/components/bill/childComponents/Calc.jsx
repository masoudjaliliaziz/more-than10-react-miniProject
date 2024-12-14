import React from 'react'

function Calc({bill,finalPay}) {
  return (
    <h1>ypu pay ${Number(bill)+Number(finalPay)} (${bill}+${finalPay})</h1>
  )
}

export default Calc