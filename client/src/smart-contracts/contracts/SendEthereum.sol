// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SendEthereum {
    function send(address payable _to) public payable {
        _to.transfer(msg.value);
    }
}
