import React, { useState, useEffect } from "react";
import useBasicFetch from "../../hooks/useBasicFetch";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";

import {
  AddCaption,
  DisplayImage,
  AddImage,
  ButtonContainer,
  CaptionInputContainer,
  CaptionInput,
  ImageInput,
  NewPostCreate,
  NewPostWrapper,
  PriceInputContainer,
  PriceInput
} from "./NewPostStyle";
import { SubmitButton } from "../../components/Button/ButtonStyle";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

// const ipfs=create({host:'ipfs.infura.io',port:5001,protocol:'https'})

const NewPost = () => {
  const [web3, account, contract] = useBasicFetch();
  const [imageUrl, setImageUrl] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [buffer, setBuffer] = useState();
  const [caption,setCaption]=useState("");
  const [price,setPrice]=useState("")
  const [ipfsHash, setIpfsHash] = useState(undefined);

  useEffect(() => {
    // console.log(ipfs)
    const getContractDetails = async () => {};
    if (
      typeof contract !== "undefined" &&
      typeof account !== "undefined" &&
      typeof web3 !== "undefined"
    ) {
      getContractDetails();
    }
  }, [web3, account, contract]);

  const createPost = async () => {
    console.log("adding file to ipfs....");
    try {
      await client
        .add(buffer)
        .then(async(res) => {
          console.log(res);
          setIpfsHash(res.path);
          const url = `https://ipfs.infura.io/ipfs/${res.path}`;
          console.log(url);
          await contract.methods
            .createNew(
              price,
              caption,
              res.path,
              account,
              localStorage.getItem("username")
            )
            .send({ from: account })
            .then((res) => {
              window.location.href = "/app";
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  return (
    <div>
      <NewPostWrapper>
        <Avatar>H</Avatar>
        <NewPostCreate>
          <AddImage>
            <ImageInput
              type="file"
              onChange={(e) => {
                e.preventDefault();
                const reader = new window.FileReader();
                reader.readAsArrayBuffer(e.target.files[0]);
                reader.onloadend = () => {
                  setBuffer(Buffer(reader.result));
                  console.log(Buffer(reader.result));
                };
                setImage(e.target.files[0]);
                setImageUrl(URL.createObjectURL(e.target.files[0]));
              }}
              placeholder="ATTACH IMAGE"
            />
            {typeof imageUrl === "undefined" ? null : (
              <DisplayImage src={imageUrl} />
            )}
          </AddImage>
          <AddCaption>
            <CaptionInputContainer>
              <CaptionInput
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
                placeholder="CAPTION HERE"
              />
            </CaptionInputContainer>
            <PriceInputContainer>
              <PriceInput
                placeholder="PRICE"
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </PriceInputContainer>
            <ButtonContainer>
              <Button
                onClick={createPost}
                variant="contained"
                endIcon={<SendIcon />}
              >
                POST
              </Button>
              {/* <SubmitButton onClick={createPost}>CREATE</SubmitButton> */}
            </ButtonContainer>
          </AddCaption>
        </NewPostCreate>
      </NewPostWrapper>
    </div>
  );
};

export default NewPost;
