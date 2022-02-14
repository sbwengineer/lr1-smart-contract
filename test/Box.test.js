// test/Box.test.js
// Load dependencies
const {expect} = require('chai');

// Load compiled artifacts
const Box = artifacts.require('Box');

// Start test block
contract('Box', function() {
    beforeEach(async function() {
        // Deploy a new Box contract for each test
        this.box = await Box.new();
    });

    // Test case
    it('retrieve returns a value previously stored', async function() {
        // Stroe a value
        await this.box.store(50);

        // Test if the returned value is the same one
        expect((await this.box.retrieve()).toString()).to.equal('50');
    });
});