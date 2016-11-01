var redis = require("redis"),
    client = redis.createClient();

//client.flushdb();

describe("Inserting itens", function() {

  it("Inserting one Item", function() {
  	client.sadd( 'test', 'value');
    client. scard('test', function (err, cardinality) {
  		if(err){ throw err; }
  		expect(cardinality).toBe(1);
  	})
  });

  it("Inserting two more itens", function() {
    client.sadd( 'test', 'value1');
  	client.sadd( 'test', 'value2');
    client. scard('test', function (err, cardinality) {
  		if(err){ throw err; }
  		expect(cardinality).toBe(4);
  	})
  });

});