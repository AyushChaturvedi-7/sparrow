import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <>
      <div className="techwave_fn_sign">
        <div className="sign__content">
          <h1 className="logo">Designed by Frenify</h1>
          <form className="login">
            <div className="form__content">
              <div className="form__title">Sign In</div>
              <div className="form__username">
                <label htmlFor="user_login">Username or Email</label>
                <input
                  type="text"
                  className="input"
                  id="user_login"
                  autoCapitalize="off"
                  autoComplete="username"
                  aria-describedby="login-message"
                />
              </div>
              <div className="form__pass">
                <div className="pass_lab">
                  <label htmlFor="user_password">Password</label>
                  <a href="#">Forget Password?</a>
                </div>
                <input
                  type="password"
                  id="user_password"
                  autoComplete="current-password"
                  spellCheck="false"
                />
              </div>
              <div className="form__submit">
                <label className="fn__submit">
                  <input type="submit" name="submit" value="Sign In" />
                </label>
              </div>
              <div className="form__alternative">
                <div className="fn__lined_text">
                  <div className="line"></div>
                  <div className="text">Or</div>
                  <div className="line"></div>
                </div>
                <a href="#" className="techwave_fn_button">
                  <span>Sign in with Google</span>
                </a>
              </div>
            </div>
          </form>
          <div className="sign__desc">
            <p>
              Not a member? <Link href={"/signup"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
