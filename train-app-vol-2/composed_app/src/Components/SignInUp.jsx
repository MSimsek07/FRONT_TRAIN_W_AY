import React, { Component } from "react";

export class SignInUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first,
    };
  }
  render() {
    return (
      <div className="signInUpContainer">
        <div className="signUpContainer">
          <form>
            <h1>Hesap Oluştur</h1>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />

            <input type="text" date="" id="" />
            <input type="email" name="" id="" />
            <div style={{ display: "flex", gap: "10px", accentColor: "black" }}>
              <Components.Input type="radio" name="gender" value="Erkek" />{" "}
              Erkek
              <Components.Input type="radio" name="gender" value="Kadın" />{" "}
              Kadın
              <Components.Input type="radio" name="gender" value="Diğer" />{" "}
              Diğer
            </div>
            <input type="password" name="" id="" />
            <input type="password" name="" id="" />
            <button> Hesap Oluştur </button>
          </form>
        </div>
        <div className="signInContainer">
          <form action="">
            <h1>Giriş</h1>
            <input type="text" name="" id="" />
            <input type="password" name="" id="" />
            <a href=""></a>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInUp;
