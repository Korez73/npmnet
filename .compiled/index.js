"use strict";

var _apiClient = require("./apiClient.mjs");

var apiClient = new _apiClient.ApiClient();
apiClient.getTasks().then(function (data) {
    console.log("I got back " + data.length + " rows");
}).catch(function (err) {
    console.log("Something bad happened: " + err);
});
//# sourceMappingURL=index.js.map