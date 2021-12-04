import React, { useEffect } from 'react';
import './App.css';
import FormComponent from './component/formComponent';
import Transection from './component/Transection';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/reportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App(){
  const initData =[
    {id:1,title:"เงินเดือน",amount:50000},
    {id:2,title:"ค่าบ้าน",amount:-5000}
  ]
  const [item,setItems] = useState(initData)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem =(newItem)=>{
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
  }
  useEffect(()=>{
    const amount =item.map(item=>item.amount)
    const income = amount.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = ((amount.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1)

    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[item,reportIncome,reportExpense])
// // reducer-state
//   const [ShowReport,setShowReport] = useState(false)
//   const reduce = (state,action)=>{
//     switch(action.type){
//       case "Show" :
//         return setShowReport(true)
//       case "Hide" :
//         return setShowReport(false)
//       default:
//     }
//   }
//   const [result,dispatch] = useReducer(reduce,ShowReport)
  return(
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense}}>
        <div className="container">
          <h1>บัญชีรายรับ - รายจ่าย</h1>
          
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" element={<ReportComponent/>}/>
              </Routes>
              <Routes>
                <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem}/><Transection item = {item}/></>}/>
              </Routes>
            </div>
          </Router>
          
          {/* {ShowReport && <ReportComponent/>} */}
          {/* <h1>{result}</h1> */}
          {/* <button onClick={()=>dispatch({type:"Show"})}>เพิ่ม</button>
          <button onClick={()=>dispatch({type:"Hide"})}>ลด</button> */}
        </div>
     </DataContext.Provider>   
  );
}

export default App;
