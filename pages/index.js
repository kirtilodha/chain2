import { useState } from "react";
import web3 from '../ethereum/web3';
import { Router} from '../routes';

import main from '../ethereum/main';


function Auth() {
  const [account, setAccount] = useState("");
//   const { MainContract, account, initialized, isRegistered } = useCallContext();

  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const registerUser = async (e) => {
    event.preventDefault();

        try{
            const accounts= await web3.eth.getAccounts();
            await main.methods.createUser(role).send({
                from:accounts[0]
            });
            setAccount(accounts[0]);
            console.log("success");
            Router.pushRoute('/');
            
        } catch(err){
            console.log(err);
        }
  }
const isRegistered = async (e)=>{
  try{
    const accounts= await web3.eth.getAccounts();
    const status = await main.methods.isRegistered(accounts[0]).call();
    const role = await main.methods.checkUser(accounts[0]).call();
    Router.pushRoute('/dashboard');

  } catch(err){
    console.log(err);
  }
    
    return status[0];
}

  return (
    <div className="authDiv">
      
      <div className="authCardHolder">
        <div className="authCard">
          <center>
            <font size="3" className="agoraTitle">
              <b>Registration Page</b>
            </font>
          </center>

          <>
            <form onSubmit={registerUser} style={{ margin: "10px" }}>
              <label className="form-label">Role</label>
              <input 
                className="form-control" 
                placeholder="Are you a buyer or seller?"
                onChange={handleRoleChange}
                value={role}
                type="text"
              />
              <br />
                <br />
              {/* <label className="form-label">Wallet address</label>
              <input
                className="form-control"
                type="text"
                value={account}
              /> */}
              {/* <br />
              <button onClick={userRole} className="authButtons">Give role</button> */}

              {
                isRegistered()
                &&
                <button onClick={registerUser} className="authButtons">SIGN UP</button>
              }
            </form>

            <br />
          </>

        </div>
      </div>
    </div>
  );
}

export default Auth;