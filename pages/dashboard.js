import React, { Component } from "react";
import { useState, useEffect } from "react";
// import main from "../ethereum/main";
// import web3 from "../ethereum/web3";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout.js";
import Header from "../components/Header.js";

import { Link } from "../routes";
import { ethers } from "ethers";
import MainChain from "../build/MainChain.json";

function ChainIndex() {
  const [chains, setChains] = useState([]);
  const [role, setRole] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const isRegistered = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          MainChain.abi,
          signer
        );
        const status = await contract.isRegistered(
          "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        );
        console.log(parseInt(status));
        // console.log(parseInt(status))
        // if(parseInt(status)==1) Router.pushRoute("/dashboard")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const items = chains.map((address) => {
    return (
      <div class="bg-white p-6 m-5 rounded-lg shadow-lg inline-block">
        <h2 class="text-2xl font-bold mb-2 text-gray-800">{address}</h2>
        <p class="text-gray-700">
          <Link route={`/products/${address}`}>
            <a> View Product</a>
          </Link>
        </p>
      </div>
    );
  });

  const getChains = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          MainChain.abi,
          signer
        );
        const chains = await contract.getDeployedChains();
        console.log(chains);
        setChains(chains);
        // console.log(parseInt(status))
        // if(parseInt(status)==1) Router.pushRoute("/dashboard")
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChains();
    isRegistered();
  }, []);

  return (
    <div className="bg-slate-300 h-screen w-screen px-10">
      {/* <Layout> */} <Header />
      <div>
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black">
          All Products
        </h3>
        <br />

        {/* {role == "Supplier" && ( */}
        <>
          <Link route="/products/new">
            <a>
            <h3 class="text-xl font-bold mr-4 text-gray-800 float-right">Add Product</h3>

              {/* <Button
                // floated="right"
                content="Add Product"
                icon="add circle"
                primary={true}
                className="float-right"
              /> */}
            </a>
          </Link>
          <Link route="/products/myProducts">
            <a>
            <h3 class="text-xl font-bold mr-4 text-gray-800 float-right">Your Products</h3>

              {/* <Button 
              // floated="right" 
              content="Your Products" 
              primary={true} 
              className="float-right" /> */}
            </a>
          </Link>
        </>
        {/* )} */}
      </div>
      {items}
    </div>
  );
}

export default ChainIndex;
