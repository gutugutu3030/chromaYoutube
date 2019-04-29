var video, canvas, context;

var port;

var isYoutube = true;

window.onload = function() {
  port = chrome.extension.connect({ name: "ch" });
  port.postMessage({ status: "init" });

  var youtube = document.getElementsByClassName("html5-main-video");
  if (youtube.length>0) {
    isYoutube = true;
    video = youtube[0];
    canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  } else {
    //ニコニコ
    isYoutube = false;
    canvas = document.getElementsByClassName("VideoSymbolContainer-canvas")[0];
  }

  //   video = document.getElementsByClassName("html5-main-video")[0];
  //   canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  setInterval(getImage, 1000 / 30);
};

window.onunload = function() {
  port.postMessage({ status: "close" });
};

function getImage() {
  try {
    if (isYoutube) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    var pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    setKeyColor(pixels, canvas.width, canvas.height);
  } catch (e) {}
}

function setKeyColor(pixels, w, h) {
  var data=Array(keyMap.length);
  for (var i = 0; i < keyMap.length; i++) {
    var w1 = parseInt(w * keyMap[i].x);
    if (w1 >= w - 1) {
      w1 = w - 1;
    }
    var h1 = parseInt(h * keyMap[i].y);
    if (h1 >= h - 1) {
      h1 = h - 1;
    }

    var index = (w1 + h1 * w) * 4;
    var r = pixels[index];
    var g = pixels[index + 1];
    var b = pixels[index + 2];
    var c = ((b & 0xff) << 16) | ((g & 0xff) << 8) | (r & 0xff);
    data[i]=c;
  }
  port.postMessage({ data: data, status: "change" });
}
