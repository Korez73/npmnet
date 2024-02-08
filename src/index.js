"use strict"
import { ApiClient } from "./apiClient.mjs";

var apiClient = new ApiClient();
apiClient.getTasks()
    .then(data => {
        console.log(`I got back ${data.length} rows`);
    })
    .catch(err => {
        console.log(`Something bad happened: ${err}`);
    })