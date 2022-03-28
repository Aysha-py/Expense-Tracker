import React from 'react'


function Transaction({transaction}) {

  const sign = transaction.amount < 0 ? "-" : "+"
  return (
    <li className='minus'>
        {transaction.text} <span> ${sign}{Maths.abs(transaction.amount)}</span> 
        <button className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction