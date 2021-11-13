import React,{useEffect} from 'react'
import useBasicFetch from '../../hooks/useBasicFetch'
const Application = () => {
    const[web3,account,contract]=useBasicFetch()

     useEffect(() => {
       const getContractDetails = async () => {
           
       };
       if (
         typeof contract !== "undefined" &&
         typeof account !== "undefined" &&
         typeof web3 !== "undefined"
       ) {
         getContractDetails();
       }
     }, [web3, account, contract]);


    return (
        <div>
            
        </div>
    )
}

export default Application
