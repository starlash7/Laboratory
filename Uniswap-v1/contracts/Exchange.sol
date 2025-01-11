//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Exchange {

    IERC20 token;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function addLiquidity(uint256 _tokenAmount) public payable {
        token.transferFrom(msg.sender, address(this), _tokenAmount);
    }

    //ETH -> ERC20
    function ethToTokenSwap(uint256 _minTokens) public payable {
        
        uint256 outputAmount = getOutputAmountWithFee(msg.value, address(this).balance - msg.value , token.balanceOf(address(this)));

        require(outputAmount >= _minTokens, "Ineffucient outputamount");
        IERC20(token).transfer(msg.sender, outputAmount);
    }

    //ERC20 -> ETH
      function tokenToEthSwap(uint256 _tokenSold, uint256 _minEth) public payable {
        
        uint256 outputAmount = getOutputAmountWithFee(_tokenSold, token.balanceOf(address(this)), address(this).balance);

        require(outputAmount >= _minEth, "Ineffucient outputamount");
        IERC20(token).transferFrom(msg.sender,address(this), _tokenSold);
        payable(msg.sender).transfer(outputAmount);
    }

    
    function getPrice(uint256 inputReserve, uint256 outputReserve) public pure returns(uint256) {
        uint256 numerator = inputReserve;
        uint256 denominator = outputReserve;
        return numerator / denominator;
    }


    function getOutputAmount(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve) public pure returns(uint256) {
        uint256 numerator = outputReserve * inputAmount;
        uint256 denominator = inputReserve + inputAmount;
        return numerator / denominator;
    }

    function getOutputAmountWithFee(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve) public pure returns(uint256) {
        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = outputReserve * inputAmountWithFee;
        uint256 denominator = inputReserve + inputAmountWithFee;
        return numerator / denominator;
    }
}

