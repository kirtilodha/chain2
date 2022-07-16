import React, { Component } from 'react';
import main from '../ethereum/main';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js'
import { Link } from '../routes';

class ChainIndex extends Component{
    static async getInitialProps(){
        const chains = await main.methods.getDeployedChains().call();
        return {chains};
    }
    renderChains(){
        const items = this.props.chains.map(address => {
            return{
                header: address,
                description:
                (
                <Link route={`/products/${address}`}>
                <a> View Product</a>
                </Link>),
                fluid: true //css to stretch
            };
        });
        return <Card.Group items={items} />;
    }

    render(){
        return(
            <Layout>
        <div>
            <h3>All Products</h3>

         <Link route="/products/new">
            <a>
        <Button floated="right"
            content="Add Product"
            icon="add circle"
            primary={ true }/>
            </a>
            </Link>

            </div>

            <div>{this.renderChains()}</div>
            
            </Layout>
        )
    }
}
export default ChainIndex;