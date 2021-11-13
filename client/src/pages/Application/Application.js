import React, { useEffect, useState } from "react";
import useBasicFetch from "../../hooks/useBasicFetch";
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
                  name: res.name,
                  buyingPrice: res.buyingPrice,
                  mainAccount: res.mainAccount,
                  caption: res.caption,
                  imageNumber: res.imageNumber,
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
  }, [web3, account, contract]);

  return (
    <div>
      <ApplicationWrapper>
        <PostsWrapper>
          {!loading
            ? posts.map((post) => {
                return (
                  <PostContainer>
                    <PostHeader>
                      <h1>{post.name}</h1>
                    </PostHeader>
                    <PostImageWrapper>
                      <PostImage src={post.url} alt="" />
                    </PostImageWrapper>
                    <PostCaption>{post.caption}</PostCaption>
                    <PostFooter>Like    {post.buyingPrice} ETH</PostFooter>
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
