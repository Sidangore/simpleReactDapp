// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Simple {
  string public storedData = "0";

  function setData(string memory _data) public {
    storedData = _data;
  }

  function getData() public view returns (string memory) {
    return storedData;
  }
}
