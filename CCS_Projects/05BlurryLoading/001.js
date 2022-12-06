WebSocket Test
var wsUri = "ws://120.26.220.223:8283"; 
var output; 
var clientId; 
function init() {

    output = document.getElementById("output");

    testWebSocket();

    websocket.send("hello \n");

} 
function testWebSocket() {

    websocket = new WebSocket(wsUri);

    websocket.onopen = function (evt) {

        onOpen(evt)

    };

    websocket.onclose = function (evt) {

        onClose(evt)

    };

    websocket.onmessage = function (evt) {

        onMessage(evt)

    };

    websocket.οnerrοr = function (evt) {

        onError(evt)

    };

} 
function onOpen(evt) {

    writeToScreen("CONNECTED");

} 
function onClose(evt) {

    writeToScreen("DISCONNECTED");

} 
function onMessage(evt) {

    writeToScreen(‘RESPONSE: ‘ +evt.data + ‘‘);

} functiononError(evt) {

    writeToScreen(‘ERROR: ‘ +evt.data);

} functionforExample() {
    var myJsonStr = setJson(myJsonStr, "clientId", clientId);

    myJsonStr = setJson(myJsonStr, "type", "say");

    myJsonStr = setJson(myJsonStr, "userId", "565081");

    myJsonStr = setJson(myJsonStr, "userName", "龙隆蟀舞");

    myJsonStr = setJson(myJsonStr, "userImage", "http:\/\/wx.qlogo.cn\/mmopen\/eMWJkc6M6KoWxQqLKuGfPjxRPGO3SmMjeY0I0jJ6WTdGwaEuBm6Z42SsHtVG3afwD71HLb0ZBV8DepIYGVDdVVscQdyQ4siax\/0");

    myJsonStr = setJson(myJsonStr, "roomId", "005");

    myJsonStr = setJson(myJsonStr, "message", "哇哈哈哈哈");

    myJsonStr = setJson(myJsonStr, "time", "1470300123908");

    writeToScreen("EXAMPLE:" + myJsonStr);

} functionwriteToScreen(message) {
    varpre = document.createElement("p");

    pre.style.wordWrap = "break-word";

    pre.innerHTML = message;

    output.appendChild(pre);

}//添加或者修改json数据

functionsetJson(jsonStr, name, value) {
    if (!jsonStr) jsonStr = "{}"; varjsonObj = JSON.parse(jsonStr);

    jsonObj[name] = value; returnJSON.stringify(jsonObj)

} functiontoJson(str) {
    varjson = eval(‘(‘ +str + ‘) ‘); returnjson;

} functionsub(){
    var$userId = 123456;

    websocket.send("{‘user_id‘:" + $userId + "}" + "\n");

}

window.addEventListener("load", init, false);