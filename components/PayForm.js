import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Chain from "../ethereum/chain";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class PayForm extends Component {
  state = {
    value: "",
    loading: false,
    errorMessage: "",
    quality: "",
  };
  onSubmit = async (event) => {
    event.preventDefault();

    const chain = Chain(this.props.address);

    this.setState({
      loading: true,
      errorMessage: "",
    });

    try {
      const accounts = await web3.eth.getAccounts();
      await chain.methods.buy(this.state.quality).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      Router.replaceRoute(`/products/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Pay here to download</label>
          <input
            type="radio"
            value="high"
            name="quality"
            onChange={(event) => this.setState({ quality: event.target.value })}
          />
          High Quality (100%)
          <br />
          <input
            type="radio"
            value="medium"
            name="quality"
            onChange={(event) => this.setState({ quality: event.target.value })}
          />
          Medium Quality (75%)
          <br />
          <input
            type="radio"
            value="low"
            name="quality"
            onChange={(event) => this.setState({ quality: event.target.value })}
          />
          Low Quality (50%)
          <br />
          {this.state.quality == "high" ? (
            <b>Pay 100% price to download</b>
          ) : this.state.quality == "medium" ? (
            <b>Pay 75% price to download</b>
          ) : this.state.quality == "low" ?(
            <b>Pay 50% price to download</b>
          ): ""}
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Pay and download!
        </Button>
      </Form>
    );
  }
}
export default PayForm;
