import React from 'react'
import {Link} from 'react-router'

import './scss/base.scss';

export default class _template extends React.Component {
    render() {
        let fullHero = this.props.location.pathname === '/',
            heroBody;

        if (fullHero) {
            heroBody = (
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            <img src="/images/logo.png" alt="Logo" style={{height: 150}}/>
                        </h1>
                        <h2 className="subtitle">
                            Community Portal
                        </h2>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className={`hero is-dark ${fullHero ? 'is-fullheight' : ''}`}>
                    <div className="hero-head">
                        <header className="nav">
                            <div className="container">
                                <div className="nav-left">
                                    <Link to='/' className="nav-item">
                                        <img src="/images/logo.png" alt="Logo"/>
                                    </Link>
                                </div>
                                <div className="nav-right nav-menu is-flex-desktop is-hidden-touch">
                                    <Link to='/servers/' className="nav-item">Servers</Link>
                                    <Link to='/rules/' className="nav-item">Rules</Link>
                                    <Link to='/partners/' className="nav-item">Partners</Link>
                                    <Link to='/events/' className="nav-item">Events</Link>
                                    <a href="https://forum.lfgame.rs/" className="nav-item" target="_blank">Forum</a>
                                    <a href="https://discord.me/lfg" className="nav-item" target="_blank">Discord</a>
                                </div>
                                <div className="nav-right nav-menu is-flex-touch is-hidden-desktop">
                                    <Link to='/' className="nav-item">Home</Link>
                                    <Link to='/servers/' className="nav-item">Game Servers</Link>
                                    <Link to='/rules/' className="nav-item">Rules</Link>
                                </div>
                            </div>
                        </header>
                    </div>
                    {heroBody}
                </div>
                {fullHero ? null : (
                    <section className="section">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </section>
                )}
                {fullHero ? null : (
                    <footer className="footer">
                        <div className="container">
                            <div className="content has-text-centered">
                                <p>
                                    Community Portal by <strong>Looking For Gamers, Inc.</strong>
                                </p>
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        )
    }
}
