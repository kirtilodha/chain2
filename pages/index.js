import { useState ,useEffect} from "react";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import { ethers } from "ethers";

import main from "../ethereum/main";


import MainChain from "../build/MainChain.json"

function Auth() {
  const [account, setAccount] = useState("");
  const [registered,setRegistration] = useState(0);
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const registerUser = async (e) => {
    event.preventDefault();

    try {
      const {ethereum} = window;

      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          MainChain.abi,
          signer
        );
        const transaction = await contract.createUser(role);
        await transaction.wait();

        console.log("successful");
        // Router.pushRoute("/");

      }
      
    } catch (err) {
      console.log(err);
    }
  };
  
  const isRegistered = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          MainChain.abi,
          signer
        );
        const status = await contract.isRegistered("0x70997970C51812dc3A010C7d01b50e0d17dc79C8"); 
        setRegistration(parseInt(status));
        // console.log(parseInt(status))
        if(parseInt(status)==1) Router.pushRoute("/dashboard")
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(role);

useEffect(()=>{
  isRegistered();
},[])
  return (
    // <div className="authDiv">
    //   <div className="authCardHolder">
    //     <div className="authCard">
    //       <center>
    //         <font size="3" className="agoraTitle">
    //           <b>Registration Page</b>
    //         </font>
    //       </center>

    //       <>
    // <form onSubmit={registerUser} style={{ margin: "10px" }}>
    //   <label className="form-label">Register as</label>
    //   {/* <input
    //     className="form-control"
    //     placeholder="Are you a buyer or seller?"
    //     onChange={handleRoleChange}
    //     value={role}
    //     type="text"
    //   /> */}
    //   <div>
    //     <input
    //       type="radio"
    //       value="Supplier"
    //       name="gender"
    //       onChange={handleRoleChange}
    //     />{" "}
    //     Supplier
    //     <input
    //       type="radio"
    //       value="Distributor"
    //       name="gender"
    //       onChange={handleRoleChange}
    //     />{" "}
    //     Distributor
    //     <input
    //       type="radio"
    //       value="Retailer"
    //       name="gender"
    //       onChange={handleRoleChange}
    //     />{" "}
    //     Retailer
    //     <input
    //       type="radio"
    //       value="Customer"
    //       name="gender"
    //       onChange={handleRoleChange}
    //     />{" "}
    //     Customer
    //   </div>
    //   <br />
    //   <br />
    //   {/* <label className="form-label">Wallet address</label>
    //   <input
    //     className="form-control"
    //     type="text"
    //     value={account}
    //   /> */}
    //   {/* <br />
    //   <button onClick={userRole} className="authButtons">Give role</button> */}

    //   {isRegistered() && (
    //     <button onClick={registerUser} className="authButtons">
    //       SIGN UP
    //     </button>
    //   )}
    // </form>

    //         <br />
    //       </>
    //     </div>
    //   </div>
    //   {/* rgba(164, 212, 235, 0.8) */}
    // </div>
    <div className="bg-sky-200 w-screen h-screen flex items-center justify-center">
      <div className=" w-5/6 h-4/5 mx-28 rounded-3xl shadow-lg columns-2">
        <div className="bg-white rounded-3xl h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5">
            <h2 class="flex justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-black">
              Welcome Back
            </h2>
            <h6 class="flex justify-center font-medium leading-tight text-base mt-0 mb-2 text-black">
              Please enter your details
            </h6>
            <br />

            <form onSubmit={registerUser} style={{ margin: "10px" }}>
              {/* <label className="form-label">Register as</label> */}
              <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-black">
                Register as:
              </h4>

              {/* <input 
                className="form-control" 
                placeholder="Are you a buyer or seller?"
                onChange={handleRoleChange}
                value={role}
                type="text"
              /> */}
              {/* <div>
                <input
                  type="radio"
                  value="Supplier"
                  name="gender"
                  onChange={handleRoleChange}
                />{" "}
                Supplier <br />
                <input
                  type="radio"
                  value="Distributor"
                  name="gender"
                  onChange={handleRoleChange}
                />{" "}
                Distributor <br />
                <input
                  type="radio"
                  value="Retailer"
                  name="gender"
                  onChange={handleRoleChange}
                />{" "}
                Retailer <br />
                <input
                  type="radio"
                  value="Customer"
                  name="gender"
                  onChange={handleRoleChange}
                />{" "}
                Customer <br />
              </div> */}
              <br />
              {/* <br /> */}

              <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value="Supplier"
                  name="bordered-radio"
                  onChange={handleRoleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Supplier
                </label>
              </div>

              <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input
                  checked=""
                  id="bordered-radio-2"
                  type="radio"
                  value="Distributor"
                  name="bordered-radio"
                  onChange={handleRoleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Distributor
                </label>
              </div>
              <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input
                  checked=""
                  id="bordered-radio-2"
                  type="radio"
                  value="Retailer"
                  name="bordered-radio"
                  onChange={handleRoleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Retailer
                </label>
              </div>
              <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input
                  checked=""
                  id="bordered-radio-2"
                  type="radio"
                  value="Customer"
                  name="bordered-radio"
                  onChange={handleRoleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Customer
                </label>
              </div>

              {/* <label className="form-label">Wallet address</label>
              <input
                className="form-control"
                type="text"
                value={account}
              /> */}
              {/* <br />
              <button onClick={userRole} className="authButtons">Give role</button> */}
              <br />

              {registered==0 && (
                <button
                onClick={registerUser}
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  SIGN UP
                </button>

                // <button onClick={registerUser} className="authButtons">
                //   SIGN UP
                // </button>
              )}
            </form>
          </div>
        </div>

        <div className="h-full">
          <iframe
            src="https://giphy.com/embed/MCiEBkSmaBRIPVZGWl"
            className="h-full w-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Auth;
