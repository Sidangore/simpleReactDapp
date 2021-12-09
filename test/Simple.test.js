const Simple = artifacts.require("./Simple.sol");

contract("Simple", account => {
    it("should store 49 as value", async function() {
        const simpleInstance = await Simple.deployed();

        await simpleInstance.setData("49", { from: account[0] });
        const storedData = await simpleInstance.getData.call();

        assert.equal("49", storedData, "Value not 49");
    });
})