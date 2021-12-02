import Item from "./Jsxdynamicdata";
import "./nest.css"
import { v4 as uuidv4 } from 'uuid'
import FormComponent from "./formComponent";

const Title =()=><h1>บัญชีรายรับ-รายจ่าย</h1>
// const Description = ()=><p>บันทึกข้อมูลบัญชีในแต่ละวันของคุณ</p>


const Transection = ()=>{
    const data = [
        {title:"ค่ารักษาพยาบาล",amount:2000},
        {title:"เงินเดือน",amount:50000},
        {title:"ค่าเดินทาง",amount:500},
        {title:"ค่าเช่าห้อง",amount:8000},
        {title:"ค่าประกัน",amount:2000},
        {title:"ค่ารองเท้า",amount:5000}
    ]
    return(
        <ul className="item-list">
            {data.map((Element)=>{
                return <Item {...Element} key={uuidv4()}/>
            })}
        </ul>
    );
}
const NestedComponent=()=>{
    return(
        <div>
            <Title/>
            <FormComponent/>
            <Transection/>
        </div>
    );
}

export default NestedComponent;