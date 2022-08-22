import React, { Component } from "react";
import ShoeList from "./ShoeList";
import ShoeDetail from "./ShoeDetail";
import Nav from "./Nav";

class ShoeShop extends Component {
  titleClassName = `
      title uppercase text-5xl tracking-wide font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#83b4ac] via-indigo-700 to-violet-900
    `;
  subTitleClassName = "sub-title text-lg hover:tracking-wider mb-4";
  transitionClassName = "transition-all duration-[500ms]";
  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <main>
          <section className="shop__area">
            <div className="container">
              <div className="content__wrapper">
                <div className="heading text-center mb-4">
                  <h3 className={this.titleClassName}>SHOPPING YOUR SHOES</h3>
                  <h4
                    className={
                      this.subTitleClassName + this.transitionClassName
                    }
                  >
                    Choose the right shoe for your feet
                  </h4>
                </div>
                <ShoeList />
                <ShoeDetail />
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default ShoeShop;
