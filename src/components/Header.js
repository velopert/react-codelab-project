import React from 'react';

class Header extends React.Component {
    render() {

        const loginButton = (
            <li>
                <a><i className="material-icons">vpn_key</i></a>
            </li>
        );

        const logoutButton = (
            <li>
                <a><i className="material-icons">lock_open</i></a>
            </li>
        );

        return (
            <nav>
                <div className="nav-wrapper blue darken-1">
                    <a className="brand-logo center">MEMOPAD</a>

                    <ul>
                        <li><a><i className="material-icons">search</i></a></li>
                    </ul>

                    <div className="right">
                        <ul>
                            { this.props.isLoggedIn ? logoutButton : loginButton }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
