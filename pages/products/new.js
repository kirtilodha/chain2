import React, { Component } from 'react';
import Layout from '../../components/Layout.js'
import {Form, Button, Input} from 'semantic-ui-react';
import main from '../../ethereum/main';
import web3 from '../../ethereum/web3';

class ChainNew extends Component {
    state = {
        price: ''
    };
    onSubmit = async(event)=>{
        event.preventDefault();

        const accounts= await web3.eth.getAccounts();
        await main.methods.createChain(this.state.price).send({
            from:accounts[0]
        })
    }
    render(){
        return(
        <Layout>
             <h3>Create a New Product</h3>
             <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Price</label>
                    <Input label="wei"
                     labelPosition="right"
                     value={this.state.price}
                     onChange={event=> this.setState({price:event.target.value})}
                    />
                    </Form.Field>
                <Button primary>Create!</Button>
                </Form>
        </Layout>
    )}
}
export default ChainNew;