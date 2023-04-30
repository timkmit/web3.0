// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IERC20.sol";


contract TestToken is ERC20 {
    constructor() ERC20("Test Token", "TST") {}

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }
}