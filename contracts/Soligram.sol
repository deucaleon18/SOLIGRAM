// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Soligram {
 
uint public imageCount=0;
uint public userCount=0;

struct Image{
    uint imageNumber;
    string userName;
    string imageHash;
    string caption;
    uint buyingPrice;
    uint userNumber;
}

struct User{
    uint balance;
    uint userNumber;
    string userName;
    address payable mainAccount;
}

mapping(uint=>Image)public images;
mapping(uint=>User)public users;


function createNew  (uint _price,string memory _caption,string memory _imageHash,
address payable _mainAccount,string memory _userName) public payable{

 uint check=0;
 uint _userNumber=0;
 for(uint i=1;i<userCount;i++){
     if(keccak256(abi.encodePacked(users[i].userName)) ==keccak256(abi.encodePacked(_userName))){
       check=1;
       _userNumber=i;
     }
 }
 if(check ==0){
     userCount++;
     _userNumber=userCount;
     users[userCount]=User(0,_userNumber,_userName,_mainAccount);
 }

 imageCount++;
 images[imageCount]=Image(imageCount,_userName,_imageHash,_caption,_price,_userNumber);
 
} 

function buyPost (uint _imageNumber,uint _buyingPrice,string memory _userName,uint _userNumber,address payable _mainAccount)
 public payable{
 images[_imageNumber].userName=_userName;
 users[_userNumber].balance+=_buyingPrice/1000000000000000000;

 uint check=0;
 uint _userNumber=0;
 
  for(uint i=1;i<userCount;i++){
     if(keccak256(abi.encodePacked(users[i].userName)) ==keccak256(abi.encodePacked(_userName))){
       check=1;
    //    _userNumber=i;
     }
 }
 if(check ==0){
     userCount++;
     _userNumber=userCount;
     users[userCount]=User(0,_userNumber,_userName,_mainAccount);
 }

}


function redeemAmount(uint _amount,uint _userNumber) public payable{
  users[_userNumber].balance-=_amount/1000000000000000000;
  users[_userNumber].mainAccount.transfer(_amount);
  
}

}