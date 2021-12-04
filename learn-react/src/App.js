import React, { useEffect } from 'react';
import './App.css';
import FormComponent from './component/formComponent';
import Transection from './component/Transection';
import { useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/reportComponent';

function App(){
  const initState = [
    {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
    {id:2,title:"เงินเดือน",amount:20000},
    {id:3,title:"ค่าข้าว",amount:-500},
    {id:4,title:"ขายของ",amount:5000}
  ]
  const [item,setItems] = useState(initState)
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
    const expense = (amount.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1

    setReportIncome(income)
    setReportExpense(expense)
  },[item,reportIncome,reportExpense])
  return(
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
        <h1>บัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transection item = {item}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
