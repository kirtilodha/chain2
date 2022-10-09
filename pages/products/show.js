import React, { Component } from "react";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";

// import Chain from "../../ethereum/chain";
import { Card, Grid } from "semantic-ui-react";
import PayForm from "../../components/PayForm";

import Header from "../../components/Header.js";

import { ethers } from "ethers";
import Product from "../../build/Product.json";

function ProductShow() {
  //   if (typeof window !== 'undefined') {
  //     const hostname = window.location.href;
  //     const address = hostname.substring(31);
  //  }
  // state = {
  //   role: "",
  // };
  const [role, setRole] = useState("");
  const [details, setDetails] = useState([]);

  const isRegistered = async () => {
    try {
      const { ethereum } = window;

      if (ethereum && typeof window !== "undefined") {
        const hostname = window.location.href;
        const address = hostname.substring(31);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(address, Product.abi, signer);
        // console.log(contract);
        const summary = await contract.getSummary();
        setDetails(summary);
        console.log(summary);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const summary = [
    {
      header: parseInt(details[0]),
      meta: "Price of the product",
      description: "Pay the price to buy the product",
      style: { overflowWrap: "break-word" },
    },
    {
      header: details[7],
      meta: "Status",
      description: "Check the current status of the product.",
      style: { overflowWrap: "break-word" },
    },
    {
      header: new Date(parseInt(details[8] * 1000)).toLocaleDateString("en-US"),
      meta: "Updated on",
      description: "Shows the recent updated status time.",
      style: { overflowWrap: "break-word" },
    },
    {
      header: parseInt(details[1]),
      meta: "Number of buyers",
      description: "Number of people bought this product",
      style: { overflowWrap: "break-word" },
    },
    {
      header: details[2],
      meta: "Address of Manager",
      description: "The manager is the seller of this product",
      style: { overflowWrap: "break-word" },
    },
    {
      header: details[3],
      meta: "Address of Farmer",
      description: "The farmer is the seller of this product",
      style: { overflowWrap: "break-word" },
    },
    {
      header: details[4],
      meta: "Address of Distributor",
      description: "The distributor buys and ships the product.",
      style: { overflowWrap: "break-word" },
    },
    {
      header: details[5],
      meta: "Address of Retailer",
      description:
        "The retailer receives the product and sell to the customer.",
      style: { overflowWrap: "break-word" },
    },
  ];

  const items = summary.map((address) => {
    return (
      <div class="bg-white p-4 m-2 w-1/2 rounded-lg shadow-lg inline-block">
        <h3 class="text-2xl font-bold mb-2 text-gray-800">{address.header}</h3>
        <p class="text-gray-700">{address.meta}</p>
        <h6 class="text-xl  mb-2 text-gray-600">{address.description}</h6>
      </div>
    );
  });
  useEffect(() => {
    isRegistered();
  }, []);

  return (
    <div className="bg-slate-300 h-full w-screen px-10">
      <Header />
      <div className="mb-6">
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black float-left">
          Product
        </h3>
        <br />
      </div>
      <div>
        {items}
        {/* <PayForm address={this.props.address} /> */}

        <div>
        <b>Update Status</b>
        <div>
          <input type="radio" value="Processed" name="status" /> Processed{" "}
          <br />
          <input type="radio" value="Packed" name="status" /> Packed <br />
          <input type="radio" value="Sell" name="status" /> Ready to sell <br />
        </div>

        <button className="authButtons">Update</button>
        </div>

      </div>
      {/* <Grid>
        <Grid.Column width={10}>{items}</Grid.Column>

        <Grid.Column width={6}> */}
      {/* <PayForm address={this.props.address} /> */}
      {/* <b>Update Status</b>
          <div>
            <input type="radio" value="Processed" name="status" /> Processed{" "}
            <br />
            <input type="radio" value="Packed" name="status" /> Packed <br />
            <input type="radio" value="Sell" name="status" /> Ready to sell{" "}
            <br />
          </div>
          <button className="authButtons">Update</button>
        </Grid.Column>
      </Grid> */}
    </div>
  );
}

export default ProductShow;
