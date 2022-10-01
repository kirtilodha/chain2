import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import { Form, Button, Input, Message } from "semantic-ui-react";
// import main from "../../ethereum/main";
// import web3 from "../../ethereum/web3";

import { Router } from "../../routes";

import Header from "../../components/Header.js";

import { ethers } from "ethers";
import MainChain from "../../build/MainChain.json"

class ChainNew extends Component {
  state = {
    price: "",
    errorMessage: "",
    loading: false,
    contractAddress:"0x5FbDB2315678afecb367f032d93F642f64180aa3"
  };


  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          this.state.contractAddress,
          MainChain.abi,
          signer
        );
        console.log(contract);
          console.log(this.state.contractAddress)
        const chains = await contract.createChain(this.state.price); 
        console.log(chains,"successful");

        Router.pushRoute("/");

        // console.log(parseInt(status))
        // if(parseInt(status)==1) Router.pushRoute("/dashboard")
      }
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message });
    }
    // try {
    //   const accounts = await web3.eth.getAccounts();
    //   await main.methods.createChain(this.state.price).send({
    //     from: accounts[0],
    //   });
    //   Router.pushRoute("/");
    // } catch (err) {
    //   this.setState({ errorMessage: err.message });
    // }
    this.setState({ loading: false });
  };

  render() {
    return (
        <div className="bg-slate-300 h-screen w-screen px-10">

        <Header />
        <h2 class="text-2xl font-bold mb-2 text-gray-800">Create a New Product</h2>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Price</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.price}
              onChange={(event) => this.setState({ price: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </div>
    );
  }
}
export default ChainNew;
