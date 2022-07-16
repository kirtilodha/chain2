import React, { Component } from 'react';
import Layout from '../../components/Layout.js'
import {Form, Button, Input, Message} from 'semantic-ui-react';
import main from '../../ethereum/main';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';

class ChainNew extends Component {
    state = {
        price: '',
        errorMessage: '',
        loading:false
    };
    onSubmit = async(event)=>{
        event.preventDefault();

        this.setState({loading:true,errorMessage:""});
        try{
            const accounts= await web3.eth.getAccounts();
            await main.methods.createChain(this.state.price).send({
                from:accounts[0]
            });
            Router.pushRoute('/');
            
        } catch(err){
            this.setState({errorMessage:err.message});
        }
        this.setState({loading:false});
    }
    render(){
        return(
        <Layout>
             <h3>Create a New Product</h3>
             <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Price</label>
                    <Input label="wei"
                     labelPosition="right"
                     value={this.state.price}
                     onChange={event=> this.setState({price:event.target.value})}
                    />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>Create!</Button>
                </Form>
        </Layout>
    )}
}
export default ChainNew;