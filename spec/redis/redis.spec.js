var redis = require("redis"),
    client = redis.createClient();


describe("Testing connection with redis", function() {
	it("Checking if client is null", function() {
		expect(client).not.toBe(null);
	})
});