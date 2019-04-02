import React, { Component } from "react";
import bg_image from "./assets/bookApp.jpg";
import Icon1 from "./assets/icon1.png";
import Icon2 from "./assets/icon2.png";
import Icon3 from "./assets/icon3.png";
import Icon4 from "./assets/icon4.png";
import eve from "./assets/eve.png";
import eliot from "./assets/elliot.jpg";
import jenny from "./assets/jenny.jpg";
import arrow_front from "./assets/icons8-right-96.png";
import "./style/style.css";

class App extends Component {
  state = {
    active: 1
  };

  onNext = val => {
    this.setState({ active: val });
  };
  render() {
    return (
      <div>
        <Layout
          onNext={this.onNext}
          state={this.state}
          active={this.state.active}
        >
          <Component1 active={this.state.active} />
          <Component2 active={this.state.active} />
        </Layout>

        <LoginScreen active={this.state.active} onNext={this.onNext} />
        <ScreenFour active={this.state.active} onNext={this.onNext} />
      </div>
    );
  }
}

const Layout = props => (
  <div
    className={props.active > 2 ? "bg-main hide" : "bg-main"}
    style={{ backgroundImage: "url('" + bg_image + "')" }}
  >
    <div className="contents">
      {props.children}

      <div className="navigator">
        <div className="indicators">
          <li
            className={props.state.active === 1 ? "active" : null}
            onClick={() => props.onNext(1)}
          />
          <li
            className={props.state.active === 2 ? "active" : null}
            onClick={() => props.onNext(2)}
          />
          <li
            className={props.state.active === 3 ? "active" : null}
            onClick={() => props.onNext(3)}
          />
        </div>

        <button onClick={() => props.onNext(props.state.active + 1)}>
          <img src={arrow_front} alt="arrow-front" />
        </button>
      </div>

      <a
        href="/"
        className="skip-control"
        onClick={e => {
          e.preventDefault();
          props.onNext(3);
        }}
      >
        Skip Intro
      </a>
    </div>
  </div>
);

const ScreenFour = ({ active }) => (
  <div className="bg-main2" style={active < 4 ? { display: "none" } : null}>
    <div className="content-inner">
      <img src={Icon4} alt="icon 1" />
      <h2>Thank you!</h2>

      <p>
        You have submitted your first book review. Now its time to make some
        friends.
      </p>
      <br />
      <button className="sign-button" type="submit">
        Add Friends
      </button>

      <div className="content-bottom">
        <h3>You may also be interested in:</h3>
        <div className="grid-system">
          <div className="content-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('" + eve + "')" }}
            />
            <h4>Scar Tissue</h4>
            <p>Anthony Kiedis</p>
          </div>
          <div className="content-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('" + eliot + "')" }}
            />
            <h4>Lazy Warlords</h4>
            <p>Eliot Menis</p>
          </div>
          <div className="content-card">
            <div
              className="card-image"
              style={{ backgroundImage: "url('" + jenny + "')" }}
            />
            <h4>The Wastelands</h4>
            <p>Jenny Peterson</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LoginScreen = ({ active, onNext }) => {
  return (
    <div
      className={active !== 3 ? "bg-main hide2" : "bg-main"}
      style={{ backgroundImage: "url('" + bg_image + "')" }}
    >
      <div
        className={active !== 3 ? "login-container hide" : "login-container"}
      >
        <img src={Icon3} alt="icon 1" />
        <h2>Welcome!</h2>

        <p>
          Create your account to get started. After that, you can share books
          and make friends.
        </p>

        <form
          onSubmit={e => {
            e.preventDefault();
            onNext(4);
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="ducawizard@gmail.com"
                required={true}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input
                type="password"
                placeholder="***********"
                required={true}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="repassword">Type Password Again</label>
            <div className="input-group last">
              <input
                type="password"
                placeholder="***********"
                required={true}
              />
            </div>
          </div>

          <button className="sign-button" type="submit">
            Sign Up
          </button>
          <p className="sign-status">
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const Component1 = ({ active }) => (
  <div className={active === 1 ? "content-top" : "content-top hide"}>
    <img src={Icon1} alt="icon 1" />

    <h2>Read Books</h2>

    <p>
      Create your account to get started. After that, you can share books and
      make friends.
    </p>
  </div>
);

const Component2 = ({ active }) => (
  <div
    className={
      active === 2
        ? "content-top"
        : active < 2
        ? "content-top hide2"
        : "content-top hide"
    }
  >
    <img src={Icon2} alt="icon 1" />

    <h2>Review Them</h2>

    <p>
      Create your account to get started. After that, you can share books and
      make friends.
    </p>
  </div>
);

export default App;
