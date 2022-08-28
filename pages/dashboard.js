import React, { Component } from "react";
import { useState, useEffect } from "react";
import main from "../ethereum/main";
import web3 from "../ethereum/web3";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout.js";
import { Link } from "../routes";
function ChainIndex() {
  const [chains, setChains] = useState([]);
  const [role, setRole] = useState("");

  const isRegistered = async (e) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const status = await main.methods.isRegistered(accounts[0]).call();
      const role = await main.methods.checkUser(accounts[0]).call();
      setRole(role);
    } catch (err) {
      console.log(err);
    }
  };

  function renderChains() {
    const items = chains.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/products/${address}`}>
            <a> View Product</a>
          </Link>
        ),
        fluid: true, //css to stretch
      };
    });
    return <Card.Group items={items} />;
  }
  useEffect(() => {
    const chains = async () => {
      const chains = await main.methods.getDeployedChains().call();
      setChains(chains);
    };
    chains();
    isRegistered();
  }, []);

  return (
    <Layout>
      <div>
        <h3>All Products</h3>
        <br />

        {role == "Supplier" && (
          <>
            <Link route="/products/new">
              <a>
                <Button
                  floated="right"
                  content="Add Product"
                  icon="add circle"
                  primary={true}
                />
              </a>
            </Link>
            <Link route="/products/myProducts">
              <a>
                <Button
                  floated="right"
                  content="Your Products"
                  primary={true}
                />
              </a>
            </Link>
          </>
        )}
      </div>
      {renderChains()}
    </Layout>
  );
}

// class ChainIndex extends Component {
//   static async getInitialProps() {
//     const chains = await main.methods.getDeployedChains().call();
//     const accounts = await web3.eth.getAccounts();
//     const ownChains = await main.methods.checkUser(accounts[0]).call();

//     return { chains };
//   }
//   isRegistered = async (e) => {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       const status = await main.methods.isRegistered(accounts[0]).call();
//       const role = await main.methods.checkUser(accounts[0]).call();
//       console.log(role);
//     } catch (err) {
//       console.log(err);
//     }

//     return status[0];
//   };
//   renderChains() {
//     const items = this.props.chains.map((address) => {
//       return {
//         header: address,
//         description: (
//           <Link route={`/products/${address}`}>
//             <a> View Product</a>
//           </Link>
//         ),
//         fluid: true, //css to stretch
//       };
//     });
//     return <Card.Group items={items} />;
//   }

//   render() {
//     return (
//       <Layout>
//         <div>
//           <h3>All Products</h3>

//           <Link route="/products/new">
//             <a>
//               <Button
//                 floated="right"
//                 content="Add Product"
//                 icon="add circle"
//                 primary={true}
//               />
//             </a>
//           </Link>
//         </div>
//         <div>{this.renderChains()}</div>
//       </Layout>
//     );
//   }
// }
export default ChainIndex;
