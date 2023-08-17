import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from "./actions/index"
const App = () => {
  const myState=useSelector((state)=> state.changeTheNumber)
  const dispatch=useDispatch()
  return (
    <>
      <div
      className='container'>
        <h1>Increament</h1>
        <h4>using React and Redux</h4>
        <div className='quantity'>
         <a className='quantity_minus' title='Decrement'><span>-</span></a>
               <input name="quantity" type='text' className='quantity__input' value={myState}></input>
               <button className='quantity_plus' title='Increment' onClick={()=>{
                   dispatch(incNumber)
               }} > +</button>
               
        </div>
      </div>
    </>
  )
}

export default App
