import React, { useEffect, useState } from "react";
import useBasicFetch from "../../hooks/useBasicFetch";
import Button from "@mui/material/Button";
import RedeemIcon from "@mui/icons-material/Redeem";

import {
  AccountDetailsWrapper,
  AccountPost,
  AccountPosts,
  AccountProfile,
  AccountWrapper,
  PostCaption,
  PostImage,
  PostStats,
} from "./AccountDetailsStyle";

const AccountDetails = () => {
  const [web3, account, contract] = useBasicFetch();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const getContractDetails = async () => {
      await contract.methods
        .userCount()
        .call()
        .then(async (res) => {
          for (var i = 1; i < res; i++) {
            await contract.methods
              .users(i)
              .call()
              .then((response) => {
                console.log(
                  response
                );
                if (response.userName === localStorage.getItem("username")) {
                  var tempUser=user;
                  tempUser.push({balance:response.balance,userName:response.userName,mainAccount:response.mainAccount,userNumber:response.userNumber})
                  setUser(tempUser);
                  console.log(user)
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })

        .then(async () => {
          await contract.methods
            .imageCount()
            .call()

            .then(async (x) => {
              for (let i = 1; i <= x; i++) {
                await contract.methods
                  .images(i)
                  .call()

                  .then((y) => {
                    var tempPost = posts;
                    if (y.userName === localStorage.getItem("username")) {
                      tempPost.push({
                        name: y.userName,
                        buyingPrice: y.buyingPrice,
                        mainAccount: y.mainAccount,
                        caption: y.caption,
                        userNumber: y.userNumber,
                        imageNumber: y.imageNumber,
                        url: `https://ipfs.infura.io/ipfs/${y.imageHash}`,
                      });
                    }
                    setPosts(tempPost);
                    console.log(y);
                    console.log(posts);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(()=>{
          console.log(user)
          console.log(posts)
          setLoading(false)
        })
    };

    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      getContractDetails();
    }
  }, [web3, account, contract]);
  
  const redeemAmount=async()=>{

// console.log(user[0].balance)
// console.log(web3.utils.toWei(user[0].balance,"ether"));

 await contract.methods.redeemAmount(web3.utils.toWei(user[0].balance,"ether"),user[0].userNumber)
 .send({from:account})
 .then((res)=>{
   window.location.reload()
   console.log(res)
 })
 .catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <AccountDetailsWrapper>
        <AccountWrapper>
          <AccountProfile>
            {!loading ? (
              <>
                <h1>{user[0].userName}</h1>
                <h1>{user[0].balance} ETH</h1>
                <Button onClick={redeemAmount} variant="outlined" startIcon={<RedeemIcon />}>
                  REDEEM
                </Button>
              </>
            ) : null}
          </AccountProfile>
          <AccountPosts>
            {!loading
              ? posts.map((post) => {
                  return (
                    <>
                      <AccountPost>
                        <PostImage alt="" src={post.url}></PostImage>
                        <PostCaption>{post.caption}</PostCaption>
                        <PostStats>{post.buyingPrice}</PostStats>
                      </AccountPost>
                    </>
                  );
                })
              : null}
          </AccountPosts>
        </AccountWrapper>
      </AccountDetailsWrapper>
    </div>
  );
};

export default AccountDetails;
