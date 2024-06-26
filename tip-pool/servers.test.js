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

	it('should check the dom for changes brought on by updateServerTable()', () => {
  	// Trusting the beforeEach call
		let serverTableUIChildren = document.querySelector('#serverTable').children;
		for (key in serverTableUIChildren) {
			if (serverTableUIChildren[key].localName == 'tbody') {
				// Logic: if there are children nodes within the tbody that means html is being updated by the updateServerTable() method.
				expect(serverTableUIChildren[key].hasChildNodes()).toBe(true); 
			}
  	}
	});
});
