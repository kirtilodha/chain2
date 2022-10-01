import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default()=>{
    return(
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
        <div className="w-screen h-10  mb-20 px-16 pt-2 ">
        <div className="decoration-double font-serif text-xl inline p-5 float-left">BuyIt</div>
        <div className="decoration-double font-serif text-xl inline p-5 float-right">Products</div>
        <div className="decoration-double font-serif text-xl inline p-5 float-right">+</div>

        </div>
    );
}