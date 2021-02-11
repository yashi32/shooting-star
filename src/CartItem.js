import React from 'react';

class CartItem extends React.Component{

    render()
    {
        return(
            
            <div className="cart-item">

                <div className="left-block">

                    <img style={styles.image}/> 

                </div>
                
                <div className="right-block">

                    <div style={{fontSize:30}}> Phone</div>
                    <div style={styles.size}> 9999  </div>
                    <div style={styles.size}> 1     </div>
                    <div className="cart-item-actions">
                        { /* Buttons */}
                        <img className="action-icons" alt="increase" src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"/>
                        <img className="action-icons" alt="decrease" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612801892~hmac=037b4a465de2e9fc3d21e3b8886f0e56"/>
                        <img className="action-icons" alt="delete" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1612801541~hmac=3491687ed00da1666135e2a2dd52936f"/>
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