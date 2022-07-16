import React,{Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Chain from '../ethereum/chain';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class PayForm extends Component{
    state = {
        value: '',
        loading:false,
        errorMessage:"",
        status:""
    };
    onSubmit = async(event) =>{
        event.preventDefault();

        const chain = Chain(this.props.address);

        this.setState({loading:true,errorMessage:"",status:""});
        try{
            const accounts= await web3.eth.getAccounts();
            await chain.methods.buy().send({
                from:accounts[0],
                value: web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute(`/products/${this.props.address}`)
            this.setState({status:"Paid successfully!"})
        } catch(err){
            this.setState({errorMessage:err.message});
        }
        this.setState({loading:false,value:''});
    }
    render(){
        return(
            
                 <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Pay here</label>
                        <Input label="ether"
                         labelPosition="right"
                         value={this.state.value}
                         onChange={event=> this.setState({value:event.target.value})}
                        />
                        </Form.Field>
                        <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Pay!</Button>
                    </Form>
            
        )
    }
}
export default PayForm;