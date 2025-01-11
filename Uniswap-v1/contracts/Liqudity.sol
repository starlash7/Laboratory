pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Liqudity is ERC20 {
    IERC20 token;


constructor (address _token) ERC20 ("Gray Uniswap V2", "GUNI-V2") {
    token = IERC20(_token);
}

function addLiquidity(uint256 _maxTokens) public payable {
    uint256 totalLiquidity = totalSupply();
    if(totalLiquidity > 0 ) {
        uint256 ethReserve = address(this).balance - msg.value;
        uint256 tokenReserve = token.balanceOf(address(this));
        uint256 tokenAmount = msg.value * tokenReserve / ethReserve;
        require(_maxTokens >= tokenAmount);
        token.transferFrom(msg.sender, address(this), tokenAmount);
        uint256 liquidityMinted = totalLiquidity * msg.value / ethReserve;
        _mint(msg.sender, liquidityMinted);

    } else{ 

        uint256 tokenAmount = _maxTokens;
        uint256 initialLiquidity = address(this).balance;
        _mint(msg.sender, initialLiquidity);
         token.transferFrom(msg.sender, address(this), tokenAmount);
    }
   
}

    function removeLiquidity(uint256 _lpTokenAmount) public {
        uint256 totalLiquidity = totalSupply();
        uint256 ethAmount = _lpTokenAmount * address(this).balance / totalLiquidity;
        uint256 tokenAmount = _lpTokenAmount * token.balanceOf(address(this)) / totalLiquidity;


        _burn(msg.sender, _lpTokenAmount);
        payable(msg.sender).transfer(ethAmount);
        token.transfer(msg.sender, tokenAmount);
    }



}