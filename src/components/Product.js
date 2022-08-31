
const Product = (props) =>{
    return (
        <div className='produktContainer'>
            
            <img src={props.img} />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button>BUY NOW</button>
        </div>

    )
}
export default Product
