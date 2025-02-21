import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* {delivery} */}
            <span>
              <SlLocationPin />
            </span>
            <div className={classes.delivery}>
              <p>delievered to</p>
              <span>United States</span>
            </div>
          </div>
          <div className={classes.search}>
            <BsSearch size={25} />
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon */}
          </div>

          {/* left side finished here */}

          {/* right side link */}

          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="Flag of the United States"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            {/*three components*/}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* {Orders} */}
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a to="/cart" className={classes.cart}>
              <BiCart size={35} />

              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
