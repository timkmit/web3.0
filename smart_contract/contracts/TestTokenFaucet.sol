// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract TestTokenFaucet {
    IERC20 private _token;
    
    constructor(address tokenAddress) {
        _token = IERC20(tokenAddress);
    }
    
    function claim() external {
        _token.transfer(msg.sender, 5 ether); // Пополнение баланса на 5 монет
    }
}