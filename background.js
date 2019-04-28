chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    switch(msg.status){
        case "init":
            init();
        break;
        case "change":
        change(msg.data);
        break;
        case "close":
            close();
        break;
    }
  });
});

var chromaSDK=new ChromaSDK();


function init(){
    chromaSDK.init();
}

function change(data){
    chromaSDK.createKeyboardEffect("CHROMA_CUSTOM",data);   
}

function close(){
}