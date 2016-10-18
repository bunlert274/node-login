import React, {Component} from 'react';

import $ from 'jquery';
import 'bulma';
import '../assets/css/Login.css';

export class LoginPage extends Component {
    state = {
        title: 'Node Login',
        username: '',
        password: '',
        dataSection: []
    }
    componentDidMount() {
        $('#titleTag').append(this.state.title);
    }

    handleLogin = () => {
        $.ajax({
            type: 'POST',
            url: '/login',
            data: {username: this.state.username, password: this.state.password}
        }).done((data)=> {
            this.setState({dataSection: [data]});
        })
    }

     handleChangeText = (input, e) => {
        let inputName = {};
        inputName[input] = e.target.value;
        this.setState(inputName);
    }

    render() {
        return (
            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <div className="columns">
                            <div className="column is-2 is-offset-5">
                                <section id="loginForm">
                                    <h1 className="title has-text-centered" id="titleTag"></h1>
                                    <h3 className="title has-text-centered" id="titleTag2"></h3>
                                    <p className="control">
                                        <input className="input"
                                                  type="username"
                                                  placeholder="Username"
                                                  onChange={this.handleChangeText.bind(this, 'username')}
                                                  value={this.state.username} />
                                    </p>
                                    <p className="control">
                                        <input className="input"
                                                  type="password"
                                                  placeholder="Password"
                                                  onChange={this.handleChangeText.bind(this, 'password')}
                                                  value={this.state.password} />
                                    </p>
                                    <div className="control is-grouped">
                                        <p className="control">
                                            <button onClick={this.handleLogin.bind(this)}
                                                        className="button is-success">Log in</button>
                                        </p>
                                        <p className="control">
                                            <button className="button">Forgot Password!</button>
                                        </p>
                                    </div>
                                </section>
                                <div id="dataSection">
                                    <ul>
                                    {
                                        this.state.dataSection.map((user, idx) => (
                                                <li key={idx}>{user._id} : {user.username}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
