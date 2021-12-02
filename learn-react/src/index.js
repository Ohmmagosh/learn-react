
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const data =(
//   <div>
//       <h1>
//         Hello React4
//       </h1>
//   </div>
// )

// //การสร้าาง class component
// class HelloComponent2 extends react.Component{
//   render(){
//     return <h1>Hello class component</h1>
//     }
// }

// function HelloComponent(){
//   return data;
// }
ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
