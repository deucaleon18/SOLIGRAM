// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Soligram {
 
uint public imageCount=0;

struct Image{
    uint imageNumber;
    string name;
    string imageHash;
    string caption;
    uint buyingPrice;
    address payable mainAccount;
}

mapping(uint=>Image)public images;

function createNew  (uint _price,string memory _caption,string memory _name,string memory _imageHash,address payable _mainAccount) public payable{
 imageCount++;
 images[imageCount]=Image(imageCount,_name,_imageHash,_caption,_price,_mainAccount);
} 

// function addDonation (uint _imageNumber,uint _donatedAmount) public payable{
//  images[_imageNumber].totalDonation+=_donatedAmount;
// }

}
