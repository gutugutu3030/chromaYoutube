var keyData;


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
    keyData = new Array(6);
    for (r = 0; r < 6; r++) {
      keyData[r] = new Array(22);
      for (c = 0; c < 22; c++) {
        keyData[r][c] = 0;
      }
    }
}

function change(data){
    for(var i=0;i<data.length;i++){
        keyData[keyMap[i].r][keyMap[i].c]=data[i];
    }
    chromaSDK.createKeyboardEffect("CHROMA_CUSTOM",keyData);   
}

function close(){
}