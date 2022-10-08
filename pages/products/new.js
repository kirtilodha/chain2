import React, { Component } from "react";
import Layout from "../../components/Layout.js";
import { Form, Button, Input, Message } from "semantic-ui-react";
// import main from "../../ethereum/main";
// import web3 from "../../ethereum/web3";

import { Router } from "../../routes";

import Header from "../../components/Header.js";

import { ethers } from "ethers";
import MainChain from "../../build/MainChain.json";

class ChainNew extends Component {
  state = {
    price: "",
    errorMessage: "",
    loading: false,
    contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
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
        console.log(this.state.contractAddress);
        const chains = await contract.createChain(this.state.price);
        console.log(chains, "successful");

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
      <div className="bg-slate-300 h-screen w-screen">
        <Header />
        <h2 className="text-2xl font-bold mb-4 text-gray-800 px-10">
          Create a New Product
        </h2>

        <Form
          onSubmit={this.onSubmit}
          error={!!this.state.errorMessage}
          className="px-10"
        >
          <Form.Field>
            <label
              for="input-group-1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            {/* <Input
              label="wei"
              labelPosition="right"
              value={this.state.price}
              onChange={(event) => this.setState({ price: event.target.value })}
            /> */}
            <div className="relative mb-6 w-48">
              <div className="flex absolute inset-y-0 right-0 items-center pl-2 pr-3 pointer-events-none border-l-4 border-slate-300">
                wei
                {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the value"
                value={this.state.price}
                onChange={(event) =>
                  this.setState({ price: event.target.value })
                }
              />
            </div>
          </Form.Field>

          <Message error content={this.state.errorMessage} />
          {this.state.loading ? (
          <button type="button" class="w-30 bg-indigo-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled>
            <svg
              class="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full mr-2"
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
         ) : (
          <Button
            loading={this.state.loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create!
          </Button>
           )} 
        </Form>
      </div>
    );
  }
}
export default ChainNew;
