import { useContext } from "react/cjs/react.development"
import DataContext from "../data/DataContext"
import './reportComponent.css'

const ReportComponent=()=>{
    const {income,expense}=useContext(DataContext)
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h2>{income-expense}</h2>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>    
                    <p className="report plus">{income}</p>    
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>    
                    <p className="report minus">{expense}</p> 
                </div>
            </div>
        </div>
    )
}

export default ReportComponent