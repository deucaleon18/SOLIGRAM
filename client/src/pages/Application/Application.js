import React, { useEffect, useState } from "react";
import useBasicFetch from "../../hooks/useBasicFetch";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import {
  ApplicationWrapper,
  PostContainer,
  PostFooter,
  PostHeader,
  PostImage,
  PostImageWrapper,
  PostsWrapper,
  PostCaption
} from "./ApplicationStyle";
const Application = () => {
  const [web3, account, contract] = useBasicFetch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContractDetails = async () => {
      await contract.methods
        .imageCount()
        .call()
        .then(async (res) => {
          for (let i = 1; i <= res; i++) {
            await contract.methods
              .images(i)
              .call()
              .then((res) => {
                var tempPost = posts;
                tempPost.push({
                  name: res.userName,
                  buyingPrice: res.buyingPrice,
                  mainAccount: res.mainAccount,
                  caption: res.caption,
                  imageNumber: res.imageNumber,
                  userNumber: res.userNumber,
                  url: `https://ipfs.infura.io/ipfs/${res.imageHash}`,
                });
                setPosts(tempPost);
                console.log(res);
                console.log(posts);
              })

              .catch((err) => {
                console.log(err);
              });
          }
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      getContractDetails();
    }
    // eslint-disable-next-line
  }, [web3, account, contract]);
 


 const buyPost=async(serial,amount,userSerial)=>{
   console.log(amount)
  await contract.methods
    .buyPost(
      serial,
      web3.utils.toWei(amount, "ether"),
      localStorage.getItem("username"),
      userSerial,
      account
    )
    .send({ from: account, value: web3.utils.toWei(amount, "ether") })
    .then(async (res) => {
      window.location.reload();
      console.log(res);
      await contract.methods
        .images(serial)
        .call()
        .then((res) => {
          var tempPost = posts;
          tempPost[serial] = {
            name: res.userName,
            buyingPrice: res.buyingPrice,
            mainAccount: res.mainAccount,
            caption: res.caption,
            imageNumber: res.imageNumber,
            userNumber: res.userNumber,
            url: `https://ipfs.infura.io/ipfs/${res.imageHash}`,
          };
          setPosts(tempPost);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
 }



  return (
    <div>
      <ApplicationWrapper className="app">
        <PostsWrapper>
          {!loading
            ? posts.map((post) => {
                return (
                  <PostContainer>
                    <PostHeader>
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        style={{ padding: "10px", backgroundColor: "#f72585" }}
                      >
                        H
                      </Avatar>
                      <h3 style={{ padding: "10px" }}>{post.name}</h3>
                    </PostHeader>
                    <PostImageWrapper>
                      <PostImage src={post.url} alt="" />
                    </PostImageWrapper>
                    <PostCaption>
                      <h2>{post.caption}</h2>
                    </PostCaption>
                    <PostFooter>
                      <IconButton size="large" style={{ color: "#f72585" }}>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton size="large" style={{ color: "white" }}>
                        <ModeCommentIcon />
                      </IconButton>

                      <IconButton
                        size="large"
                        style={{ color: "white" }}
                        onClick={() =>
                          buyPost(
                            post.imageNumber,
                            post.buyingPrice,
                            post.userNumber
                          )
                        }
                        cursor="pointer"
                      >
                        <MonetizationOnIcon />
                      </IconButton>
                      <h3>
                        <b>{post.buyingPrice} ETH</b>
                      </h3>
                    </PostFooter>
                  </PostContainer>
                );
              })
            : null}
        </PostsWrapper>
      </ApplicationWrapper>
    </div>
  );
};

export default Application;
