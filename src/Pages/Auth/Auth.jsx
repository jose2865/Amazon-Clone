import React, {useState, useContext} from "react";
import Classes from "./SignUp.module.css";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {auth} from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {PuffLoader} from "react-spinners";
import {DataContext} from "../../Components/DataProvider/DataProvider";
import {Type} from "../../Utility/Action.type";

function Auth() {
  const [email, setEmail] = useState(""); // hold on the state and sign up
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false, //two properties sign in and sign up to be able to log in to Amazon account, we start as false.
    signUp: false,
  });
  const [{user}, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  // console.log(user);
  //authhandler is called when the form is submitted,  It handles both authentication processes
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      setLoading({...loading, signIn: true}); //loading true here to sign in.
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          //this gives us promise, user await or continue with then.
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });

          setLoading({...loading, signIn: false}); // after signing in we need to make it false, don't need to spin.
          navigate(navStateData?.state?.redirect || "/");
        }) // navigates to the page stored in here
        .catch((error) => {
          // console.log(error.message);

          setError(error.message);
        });
    } else {
      setLoading({...loading, signUp: true});
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({...loading, signUp: false});
          // navigate("/"); //after sign it navigates me to the home page.
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((error) => {
          // console.log(error);
          setError(error.message);
          setLoading({...loading, signUp: false}); //after signing up we need to make it false.
        });
    }
  };

  // console.log(password, email);

  return (
    <section className={Classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* form */}

      <div className={Classes.login__container}>
        <h1>Sign In</h1>

        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
            {/* e is event .target refers to the now input, value refers to those to put in the target value */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={Classes.login__signInButton}
          >
            {loading.signIn ? (
              <PuffLoader color="#000" size={15}></PuffLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZONE FAKE CLONE Conditions of Use &
          sale. Please see out privacy notice, out cookies notice and out
          interest-based ads notice
        </p>

        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={Classes.login__registerButton}
        >
          {loading.signUp ? (
            <PuffLoader color="#000" size={15}></PuffLoader>
          ) : (
            " Create yout Amazon Account"
          )}
        </button>

        {error && (
          <small style={{paddingTop: "5px", color: "red"}}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
