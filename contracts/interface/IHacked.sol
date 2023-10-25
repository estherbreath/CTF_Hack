interface Hacked {
     function isContract(address addr) external view returns (bool);
     function addToWhitelist(address addr, string memory _name) external;
     function beOwner(address addr) external;
     function pwn(address addr) external payable;
     function pwn() external payable;
     function isHacked() external view returns(bool);
     function getValidOwner(address addr) external returns(bool);
     function returnOwners() external view returns(address[] memory);
     function returnOwnerName() external view returns(string[] memory);

}