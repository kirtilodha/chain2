import React, { Component } from "react";
import { useState, useEffect } from "react";
import main from "../../ethereum/main";
import web3 from "../../ethereum/web3";
import { Card, Button } from "semantic-ui-react";
import Layout from "../../components/Layout.js";
import { Link } from "../../routes";

function MyProducts() {
  const [myChains,setMyChains]= useState([]);

  useEffect(()=>{
    const myChains= async ()=>{
      const accounts = await web3.eth.getAccounts();
      const items = await main.methods.getOwnChains(accounts[0]).call();
      setMyChains(items);
    }
    myChains();
  },[])
  function render(){
    const items = myChains.map((address)=>{
      return{
        header: address,
        description: (
          <Link route={`/products/${address}`}>
            <a> View Product</a>
          </Link>
        ),
        fluid: true, //css to stretch
      }
    })
    return <Card.Group items={items} />;
  }
  
  return (
    <Layout>
      <div>
        <h3>My Products</h3>
        <br />

          {render()}
      </div>
    </Layout>
  );
}

export default MyProducts;
