pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IUniswapCaller {
    function getPair(address tokenA, address tokenB) external view returns(address pair);
    function getReserves() external view returns(uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
}

contract UniswapCaller {
    function getPair() public view returns(address) {
        return IUniswapCaller(callerAddress).getPair(tokenA,tokenB)
    }


    function getPrice(address pairAddress) public view returns(uint112, uint112, uint32) {
        return IUniswapCaller(pairAddress).getReserves();
    }
}