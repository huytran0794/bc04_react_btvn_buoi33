import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "./redux/actions/cartAction";
import { viewDetailAction } from "./redux/actions/viewDetailAction";

class Shoe extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.shoe;
    let flexCenterClass = "flex justify-center items-center";
    return (
      <div className="shoe card w-3/12 p-5" id={id} onClick={() => {}}>
        <div className="card__content h-full flex flex-col gap-4 bg-slate-100 shadow-md rounded-lg p-2 relative cursor-pointer">
          <div className="heading">
            <div
              className={`stock bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold uppercase rounded-[10px] p-1 w-1/3 ${flexCenterClass} gap-1`}
            >
              <span className="title">Stock</span>
              <span className="char">:</span>
              <span className="number">{quantity}</span>
            </div>
          </div>
          <div className="thumb p-3 h-1/2 basis-1/2 flex items-center justify-center ">
            <div className="img-wrapper w-52 h-52 max-w-2xl overflow-hidden">
              <img
                src={image}
                alt=""
                className="min-w-full max-w-full min-h-full object-cover"
              />
            </div>
          </div>
          <div className="details p-2 flex-1 flex flex-col justify-between">
            <div className="name text-2xl mb-3 font-bold text-[#363636]">
              {name}
            </div>
            <div className="short-desc mb-4">{shortDescription}</div>
            <div className="bottom flex justify-between">
              <div
                onClick={() => {
                  this.props.handleGetShoeDetail(this.props.shoe);
                }}
                className="cursor-pointer bg-gradient-to-r from-red-600 to-red-300 text-white uppercase font-medium rounded-lg flex justify-center items-center px-2"
              >
                View details
              </div>
              <div className="price text-2xl text-red-500 font-semibold text0">
                $ {price}
              </div>
              <div className="links flex items-center">
                <span className="fa-solid fa-heart btn-wish font-medium text-xl mr-5 cursor-pointer hover:scale-125 hover:text-indigo-800 duration-500"></span>
                <span
                  onClick={() => {
                    this.props.handleAddToCart(this.props.shoe);
                  }}
                  className="fa-solid fa-cart-plus btn-add-cart text-xl cursor-pointer hover:scale-125 hover:text-indigo-800 duration-500"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleGetShoeDetail: (value) => {
      dispatch(viewDetailAction(value));
    },
    handleAddToCart: (value) => {
      dispatch(addToCartAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Shoe);
