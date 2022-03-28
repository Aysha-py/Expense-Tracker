  import React,{useState} from 'react'
  
  function AddTransaction() {

    const [text,setText] =useState('')
    const [amount,setAmount] =useState(0)
    return (
      <div>
          <h3>
              Add New Transaction
          </h3>
          <form>
              <label htmlFor='text'>Text</label>
              <input type='text' placeholder='enter text ...' value={text}  onChange={(e)=>setText(e.target.value)}></input>
              <label htmlFor='amount'>Amount</label>
              <input type='number' placeholder='enter Amount ...' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
              <button type='submit' className='btn'>Submit</button>
          </form>
      </div>
    )
  }
  
  export default AddTransaction