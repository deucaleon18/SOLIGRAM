import React,{useEffect,useState} from 'react'
import useBasicFetch from '../../hooks/useBasicFetch'
import { AccountDetailsWrapper, AccountPosts, AccountProfile, AccountWrapper } from './AccountDetailsStyle';


const AccountDetails = () => {
  const [web3, account, contract] = useBasicFetch();
  const [user, setUser] = useState(undefined);
  const [posts, setPosts] = useState([]);

    useEffect(() => {

      const getContractDetails = async () => {

          await contract.methods.userCount().call()
          .then(async(res)=>{
             for(var i=1;i<res;i++){
                 await contract.methods.users(i).call()
                 .then((response)=>{
                   if(response.userName===localStorage.getItem("username")){
                       setUser(user)
                   }
                 })
                 .catch((err) => {
                console.log(err);
              });

             }
             })

          .then(async()=>{
           await contract.methods.imageCount().call()


                    .then(async (x) => {
                     for (let i = 1; i <= x; i++) {
                     await contract.methods
                     .images(i)
                     .call()
                     
                     
                     
                     



                     .then((y) => {
                     var tempPost = posts;
                     if(y.userName===localStorage.getItem("username"))
                     {
                     tempPost.push({
                     name: y.userName,
                     buyingPrice: y.buyingPrice,
                     mainAccount: y.mainAccount,
                     caption: y.caption,
                     userNumber:y.userNumber,
                     imageNumber: y.imageNumber,
                  url: `https://ipfs.infura.io/ipfs/${y.imageHash}`,
                })
                }
                setPosts(tempPost);
                console.log(y);
                console.log(posts);
                })
                .catch((err) => {
                console.log(err);
              });

              }







            }).catch((err) => {
                console.log(err);
              });

         })
             .catch((err) => {
                console.log(err);
              });     
      


          }

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
      <AccountDetailsWrapper>
        <AccountWrapper>
          <AccountProfile></AccountProfile>
          <AccountPosts></AccountPosts>
        </AccountWrapper>
      </AccountDetailsWrapper>
    </div>
  );
}

export default AccountDetails
