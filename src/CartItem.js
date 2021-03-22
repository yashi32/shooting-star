import React from 'react';

class CartItem extends React.Component{

    //Creating State in React
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:10,
            img:''
        }

        //Using binding within the constructor class
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    increaseQuantity=()=>{
        console.log("this",this);
        console.log("this.state",this.state);
    }

    render()
    {   
        //Object Destructing
        const {price,title,qty}=this.state;
        return(
            
            <div className="cart-item">

                <div className="left-block">

                    <img style={styles.image}/> 

                </div>
                
                <div className="right-block">

        <div style={{fontSize:30}}> {title}</div>
                    <div style={styles.size}> {price} </div>
                    <div style={styles.size}> {qty}    </div>
                    <div className="cart-item-actions">
                        { /* Buttons */}
                        <img 
                        className="action-icons" 
                        alt="increase" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                        
                        //Using bind within the event handler function
                        //onClick={this.increaseQuantity.bind(this)}
                        
                        onClick={this.increaseQuantity}
                        />
                        <img className="action-icons" 
                        alt="decrease" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg"
                        />
                        <img className="action-icons" 
                        alt="delete" 
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        />
                    </div>
                </div>

            </div>
        )
    }


}
// Adding Styles by creating objects
const styles={
    image:{
        height:160,
        width:150,
        borderRadius:4
    },

    size:{
        fontSize:25
    }
}

export default CartItem;