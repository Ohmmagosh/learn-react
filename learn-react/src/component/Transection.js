import Item from "./item";
import "./Transection.css"




const Transection = (props)=>{
    const {item} = props
    return(
        <div>
            <ul className="item-list">
                {item.map((Element)=>{
                    return <Item {...Element} key={Element.id}/>
                })}
            </ul>
        </div> 
    );
}

export default Transection;