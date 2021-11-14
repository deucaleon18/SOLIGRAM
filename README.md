<h1>Soligram:

## The next generation social media platform
<br/>

## About the project:
  
In Today's world the content industry has grown multifold and is a very busy place. The number of good content creators is increasing by the day. I thought of creating a decentralized platform where users can upload their content and get rewarded for their content, basically,they can sell and market their contetn and 
others can buy this content and keep the post for themselves, they mat do this to gain popularity, gain a large audience due to the post-interaction and they themselves can market their own products and they can later change the rate of this content and further sell it to some other user.

This platform us not only for buyers and sellers but is also for the common audience who can enjoy the content generated on this platform. This platform can also be thought of as a NFT platform reimagined, where posts are worth the value and act as NFTs.  

The obvious question when matters of money are involved is the question of security, well our platform deals with that issue as well since the whole application is decentralized, starting from the storage of posts (IPFS file system ) to the user data, all securely stored on the Blockchain network, which is really hard to corrupt due to its immutabilty nature and every change being recorded on the network, so one could also keep track of the post's journey from user to user.
 
This was my submission for the [Octahacks 4.0](https://octahacks4.tech/) hackathon for the track business.
  
<br/>  

  
## Technologies and Tools used:
->ReactJs <br/>
->Material UI <br/>
->Solidity <br/>
->NodeJs <br/>
->Metamask <br/>
->Ganache UI <br/>
->MongoDB Atlas <br/>
->Pictures taken from [freepik](https://www.freepik.com/home) <br/>

## Glimpses of the project:

### HOME PAGE:
![soligram](https://user-images.githubusercontent.com/77899467/141666266-8bae5f1f-63e2-4159-b9dd-68ed814435cf.png)
<br/>
### REGISTER:
![soli5](https://user-images.githubusercontent.com/77899467/141666263-1fb22d9e-375c-493f-a7f9-994a012d5f38.png)

### CREATE:
![soli3](https://user-images.githubusercontent.com/77899467/141666261-da1daeed-97a6-4073-95ff-a42eb9f581c3.png)

### APPLICATION:
![soli4](https://user-images.githubusercontent.com/77899467/141666262-3820823b-d779-474d-9b94-4d6728c3e93a.png)

### USER-DETAILS:
![soli7](https://user-images.githubusercontent.com/77899467/141666265-e7bf2308-3ce0-4d12-adc5-e735c42c69c6.png)

## Project Preview:

A basic glimpse of the project can be seen [here](https://www.youtube.com/watch?v=0iFcn3XU6Kk) .

## Features:

-> Register and Login <br/>
-> Make Posts <br/>
-> Purchase Posts <br/>

## Future Improvements:

*NOTE*:The finishing project if far from complete.This is just a basic prototype. 
  
->Ability to create post not for sale.
->Adding the feature to like and comment posts <br/>
->Further improving the security checks for the application <br/>
->One plausible issue in such a content-sharing platform might be plagiarism, but I don't have the required knowledge to apply a plag-check , but in future this can be implemented to get rid of this evil , this can be done by using some ML algorithm to delete similar or completely same posts that were posted at a later time.The users can also get bans if they post more than 2 plagiarized posts. <br/>
-> Lastly,UI improvement. <br/>


## Installation and setting up the project:

1.Clone the git repository <br/>
  
  ```
  git clone https://github.com/deucaleon18/SOLIGRAM 
  ```
2.Navigate to the ``client`` directory and install all the required packages <br/>
  ```
  cd client 
  npm install
  ```
3.Navigate to the ``db`` directory and install all the required packages and also create a ``.env`` file similar to the one given in the ``.env.example``<br/>
  ```
  cd db
  npm install
  ```
4.Make sure your Ganache client is running and now navigate to the contracts directory and run the following comamnds to compile the contract.
  ```
  cd contracts 
  truffle migrate --reset
  ```
5.After all this setup is then start two terminals for the db and client to run simultaneously using the same command ``npm start``.<br/>
6.Your client will start running and you will be prompted to sign in to Metamask to experience the application, so complete the Metamask sign-in.<br/>
7.Your application is set up.<br/>
  
  
  
  