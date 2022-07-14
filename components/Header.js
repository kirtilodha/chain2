import React from 'react';
import { Menu } from 'semantic-ui-react';
// import { Link } from '../routes';

export default()=>{
    return(
        <Menu style={{marginTop: '10px'}}>

            {/* <Link route="/"> */}
              <Menu.Item> <a className="item">BuyIt</a> </Menu.Item>
                {/* </Link> */}

            <Menu.Menu position="right">
            {/* <Link route="/"> */}
            <Menu.Item>  <a className="item">Products</a> </Menu.Item>
                {/* </Link> */}

                {/* <Link route="/campaigns/new"> */}
                <Menu.Item> <a className="item">+</a> </Menu.Item>
                {/* </Link> */}
            </Menu.Menu>
        </Menu>
    );
}