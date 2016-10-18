import React, {Component} from 'react';

import 'bulma';
export class Header extends Component {
    render() {
        return (
            <section className="hero is-info">
                <div className="hero-head">
                    <div className="container-fluid">
                        <nav className="nav">
                            <div className="nav-left"></div>
                            <div className="nav-center">
                                <h1 className="nav-item is-barnd">Node Login</h1>
                            </div>
                            <span className="nav-toggle" id="nav-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div className="nav-right nav-menu" id="nav-menu">
                                <a className="nav-item">Logout</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}
