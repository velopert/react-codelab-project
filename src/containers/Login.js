import React from 'react';
import { Authentication } from 'components';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Authentication mode={true}/>
            </div>
        );
    }
}

export default Login;
