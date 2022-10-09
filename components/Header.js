import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    // <Menu>

    //     <Link route="/">
    //        <a className="item">BuyIt</a>
    //         </Link>

    //     <Menu.Menu position="right">
    //     <Link route="/">
    //   <a className="item">Products</a>
    //         </Link>

    //         <Link route="/products/new">
    //      <a className="item">+</a>
    //         </Link>
    //     </Menu.Menu>
    // </Menu>
    <div className="w-full h-20 mb-20 px-16 pt-2 shadow-lg">
      <Link route="/">
        <a className="item">
          <div className="decoration-double font-serif text-xl inline p-5 float-left">
            BuyIt
          </div>
        </a>
      </Link>
      <Link route="/">
        <a className="item">
          <div className="decoration-double font-serif text-xl inline p-5 float-right">
            Products
          </div>
        </a>
      </Link>
      <Link route="/products/new">
        <a className="item">
          <div className="decoration-double font-serif text-xl inline p-5 float-right">
            +
          </div>
        </a>
      </Link>
    </div>
  );
};
