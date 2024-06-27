describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
	
  afterEach(function() {
		serverNameInput.value = '';
		allServers = {}
		serverId = 0;
  });

	it('should check the dom for changes brought on by updateServerTable()', () => {
		// way better way of doing it
		// submitServerInfo() updates the dom on its own
		submitServerInfo();

		let serverTableUIChildren = document.querySelectorAll('#serverTable tbody tr td');           

		expect(serverTableUIChildren.length).toEqual(2);
		expect(serverTableUIChildren[0].innerText).toEqual('Alice');
		expect(serverTableUIChildren[1].innerText).toEqual('$0.00');
	});
});
