var redis = require("redis"),
    client = redis.createClient();

client.flushdb();

describe("Inserting itens", function() {

	client.sadd( 'test', 'value');

  it("Inserting one Item", function() {
    
    client. scard('test', function (err, cardinality) {
  		if(err){ throw err; }
  		expect(cardinality).toBe(1);
  	})

  });

  client.sadd( 'test', 'value1');
  client.sadd( 'test', 'value2');

  it("Inserting two more itens", function() {
    
    client. scard('test', function (err, cardinality) {
  		if(err){ throw err; }
  		expect(cardinality).toBe(3);
  	})

  });

});