import React, { Component } from "react";
import Layout from "../../components/Layout";
import Chain from "../../ethereum/chain";
import { Card, Grid } from "semantic-ui-react";
import PayForm from "../../components/PayForm";

class ProductShow extends Component {
  state = {
    role: "",
  };
  static async getInitialProps(props) {
    const chain = Chain(props.query.address);

    const summary = await chain.methods.getSummary().call();
    console.log(summary);

    return {
      address: props.query.address,
      price: summary[0],
      buyCount: summary[1],
      manager: summary[2],
    };
  }

  renderCards() {
    const { price, buyCount, manager } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description: "The manager is the seller of this product",
        style: { overflowWrap: "break-word" },
      },
      {
        header: price,
        meta: "Price of the product",
        description: "Pay the price to buy the product",
        style: { overflowWrap: "break-word" },
      },
      {
        header: buyCount,
        meta: "Number of buyers",
        description: "Number of people bought this product",
        style: { overflowWrap: "break-word" },
      },
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Product</h3>
        <Grid>
          <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

          <Grid.Column width={6}>
            {/* <PayForm address={this.props.address} /> */}
            <b>Update Status</b>
            <div>
              <input type="radio" value="Processed" name="status" /> Processed <br />
              <input type="radio" value="Packed" name="status" /> Packed <br />
              <input type="radio" value="Sell" name="status" /> Ready to sell <br />
            </div>
            <button className="authButtons">
                  Update
                </button>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}
export default ProductShow;
