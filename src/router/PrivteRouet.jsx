import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivteRouet(props) {

    let auth=true;

    return (
        <div>
            auth ? <Outlet /> : <Navigate to="/singin" />
        </div>
    );
}

export default PrivteRouet;