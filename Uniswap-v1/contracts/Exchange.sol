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


    function ethToTokenSwap() public payable {
        uint256 inputAmount = msg.value;
        
        uint256 outputAmount = inputAmount;

        token.transfer(msg.sender, outputAmount);
    }

    function getOutputAmount(uint256 inputAmount, uint256 inputReserve, uint256 outputReserve) public pure returns(uint256) {
        uint256 numerator = outputReserve * inputAmount;
        uint256 denominator = inputReserve + inputAmount;
        return numerator / denominator;
    }
}

