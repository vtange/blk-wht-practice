mocha.setup('bdd');
chai.should();

describe('MyAPI', function() {
	beforeEach(function() {
		this.xhr = sinon.useFakeXMLHttpRequest();

		this.requests = [];
		this.xhr.onCreate = function(xhr) {
			this.requests.push(xhr);
		}.bind(this);
	});

	afterEach(function() {
		this.xhr.restore();
	});

	//test GET request for JSON
	it('should parse fetched data as JSON', function(done) {
		var data = { foo: 'bar' };
		var dataJson = JSON.stringify(data);

		myapi.get(function(err, result) {
			result.should.deep.equal(data);
			done();
		});

		this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
	});

	//test POST JSON request
	it('should send given data as JSON body', function() {
		var data = { hello: 'world' };
		var dataJson = JSON.stringify(data);

		myapi.post(data, function() { });

		this.requests[0].requestBody.should.equal(dataJson);
	});

	it('should return error into callback', function(done) {
		myapi.get(function(err, result) {
			err.should.exist;
			done();
		});

		this.requests[0].respond(500);
	});
});
mocha.run();