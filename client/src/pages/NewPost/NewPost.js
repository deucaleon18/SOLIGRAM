import React, { useState, useEffect } from "react";
import useBasicFetch from "../../hooks/useBasicFetch";
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
} from "./NewPostStyle";
import { SubmitButton } from "../../components/Button/ButtonStyle";
import { create } from "ipfs-http-client";

const ipfs=create({host:'ipfs.infura.io',port:5001,protocol:'https'})

const NewPost = () => {
  const [web3, account, contract] = useBasicFetch();
  const [imageUrl, setImageUrl] = useState(undefined);
  // const [image, setImage] = useState(undefined);
  const [buffer, setBuffer] = useState();

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
  
  const createPost=async()=>{

  console.log("added file to ipfs")

  ipfs.add(buffer,(err,res)=>{
  
    if(err){
      console.log(err)
    }
    console.log("ipfs results", res);
  })

  }
  return (
    <div>
      <NewPostWrapper>
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
                // setImage(e.target.files[0])
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
              <CaptionInput placeholder="CAPTION HERE" />
            </CaptionInputContainer>
            <ButtonContainer>
              <SubmitButton onClick={createPost}>CREATE</SubmitButton>
            </ButtonContainer>
          </AddCaption>
        </NewPostCreate>
      </NewPostWrapper>
    </div>
  );
};

export default NewPost;
