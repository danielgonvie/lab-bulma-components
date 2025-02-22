import React, { Component } from 'react'

export default class BulmaNavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
          <button className="button is-info">Login</button>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
              <span>Signup</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
