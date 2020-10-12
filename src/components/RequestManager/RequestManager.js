// pipeline all requests through this request manager.
// the goal is to streamline all async network requests
// especially write requests,
// and transmit them serially

// ideally it might also be ideal to force READ requests to wait (or return last request) until
// WRITE requests are done

// this would seem neccessary if two or more components were attempting a
// WRITE operation at the same time
