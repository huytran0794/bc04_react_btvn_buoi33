import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="bg-gray-300/30">
        <div className="container">
          <div className="nav-wrapper flex items-center justify-between py-4 ">
            <div className="nav-brand uppercase text-4xl cursor-pointer text-slate-500 hover:text-slate-700 duration-500">
              ECOMMERCE
            </div>
            <div className="nav-icon ">
              <div className="cart flex items-center relative">
                <i className="fa-solid fa-bag-shopping text-2xl cursor-pointer"></i>
                <div className="number-items text-white flex items-center justify-center bg-indigo-600 rounded-full w-4 h-4 absolute top-0 right-[-10px]">
                  <span className="text-xs">{this.props.cart.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};
export default connect(mapStateToProps)(Nav);
