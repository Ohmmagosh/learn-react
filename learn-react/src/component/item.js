import PropTypes from 'prop-types';

import './item.css'


const Item =(props)=>{
    const {title,amount} = props
    const status = amount<0 ?  "expense":"income"
    const symmol = amount<0 ?  "-":"+"

    return (
        <li className={status}>{title}<span>{symmol}{Math.abs(amount)}</span>

        </li> 
    );
}
Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item