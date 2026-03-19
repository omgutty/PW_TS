//enumm  is used to to collection fo constants. 
var Browser;
(function (Browser) {
    Browser["chrome"] = "Google chrome";
    Browser["firefox"] = "mozilla";
})(Browser || (Browser = {}));
console.log(Browser.chrome);
var env;
(function (env) {
    env["QA"] = "www.qa.com";
    env["prod"] = "www.production.com";
})(env || (env = {}));
console.log(env.prod);
export {};
