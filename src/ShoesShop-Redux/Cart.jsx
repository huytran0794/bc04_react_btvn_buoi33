import React, { Component } from "react";
import { connect } from "react-redux";
import { closeCartAction } from "./redux/actions/cartAction";
import CartItemList from "./CartItemList";

export class Cart extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <>
        <div
          className="modal fixed top-0 left-0 z-10 w-full h-full p-3"
          id="cart-modal"
        >
          <div className="modal-content relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-fit max-w-4xl max-h-[calc(90vh-3.5rem)] bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="modal-header p-2 border-b flex justify-between items-center">
              <h4 className="uppercase text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3d665f] via-indigo-700 to-violet-900">
                Your Shopping Cart
              </h4>
              <span
                onClick={this.props.handleCloseCart}
                className="btn btn-close block h-full cursor-pointer text-xl duration-700 text-zinc-600 ml-auto mr-4 hover:scale-125"
              >
                &times;
              </span>
            </div>
            <div className="modal-body p-2 overflow-auto">
              <div className="container">
                <div className="content-wrapper flex flex-wrap">
                  <CartItemList />
                </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
        <div
          onClick={this.props.handleCloseCart}
          className="overlay fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-gray-500/40 z-[2]"
        ></div>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    open: state.cartReducer.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCloseCart: () => {
      dispatch(closeCartAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
