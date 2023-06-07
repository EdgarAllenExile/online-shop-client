import React from 'react';
import AllOrders from '../components/AllOrders';


const Admin = () => {
    

    return (
        <>
            <div>
                <h1>Admin Page</h1>
            </div>
            <div>
                <h2>Orders</h2>
                <AllOrders />
            </div>
        </>
    )
}

export default Admin;