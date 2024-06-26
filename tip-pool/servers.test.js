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
	for (let key in allServers) {
		delete allServers[key]; // deletes from allServers db
		serverId--; // decrements the counter

		// now to handle html
		let currServerUI = document.querySelector('tr#' + key);
		currServerUI.remove();
	}
  });
});
