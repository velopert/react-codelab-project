import React from 'react';
import { Header } from 'components';

class App extends React.Component {
    render(){
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                { isAuth ? undefined : <Header/> }
                { this.props.children }
            </div>
        );

    }
}

export default App;
