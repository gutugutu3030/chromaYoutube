var video, canvas, context;

var port;

var keyMap = [
  { x: 0.028095238, y: 0.06835443, r: 0, c: 1 },
  { x: 0.09714286, y: 0.06835443, r: 0, c: 2 },
  { x: 0.1647619, y: 0.06835443, r: 0, c: 3 },
  { x: 0.23428571, y: 0.06835443, r: 0, c: 4 },
  { x: 0.30095237, y: 0.06835443, r: 0, c: 5 },
  { x: 0.3704762, y: 0.06835443, r: 0, c: 6 },
  { x: 0.4352381, y: 0.06835443, r: 0, c: 7 },
  { x: 0.5042857, y: 0.06835443, r: 0, c: 8 },
  { x: 0.5661905, y: 0.06835443, r: 0, c: 9 },
  { x: 0.64428574, y: 0.06835443, r: 0, c: 10 },
  { x: 0.7, y: 0.06835443, r: 0, c: 11 },
  { x: 0.76428574, y: 0.06835443, r: 0, c: 12 },
  { x: 0.8314286, y: 0.06835443, r: 0, c: 13 },
  { x: 0.9009524, y: 0.06835443, r: 0, c: 14 },
  { x: 0.9704762, y: 0.06835443, r: 0, c: 15 },

  { x: 0.030952381, y: 0.2164557, r: 1, c: 1 },
  { x: 0.09714286, y: 0.2164557, r: 1, c: 2 },
  { x: 0.1647619, y: 0.2164557, r: 1, c: 3 },
  { x: 0.23428571, y: 0.2164557, r: 1, c: 4 },
  { x: 0.30095237, y: 0.2164557, r: 1, c: 5 },
  { x: 0.3704762, y: 0.2164557, r: 1, c: 6 },
  { x: 0.4352381, y: 0.2164557, r: 1, c: 7 },
  { x: 0.5042857, y: 0.2164557, r: 1, c: 8 },
  { x: 0.5661905, y: 0.2164557, r: 1, c: 9 },
  { x: 0.64428574, y: 0.2164557, r: 1, c: 10 },
  { x: 0.7, y: 0.2164557, r: 1, c: 11 },
  { x: 0.76428574, y: 0.2164557, r: 1, c: 12 },
  { x: 0.8314286, y: 0.2164557, r: 1, c: 13 },
  { x: 0.9009524, y: 0.2164557, r: 1, c: 14 },
  { x: 0.9704762, y: 0.2164557, r: 1, c: 15 },

  { x: 0.030952381, y: 0.38, r: 2, c: 1 },
  { x: 0.13238095, y: 0.38, r: 2, c: 2 },
  { x: 0.20190476, y: 0.38, r: 2, c: 3 },
  { x: 0.26619047, y: 0.38, r: 2, c: 4 },
  { x: 0.33857143, y: 0.38, r: 2, c: 5 },
  { x: 0.40285715, y: 0.38, r: 2, c: 6 },
  { x: 0.47238097, y: 0.38, r: 2, c: 7 },
  { x: 0.54190475, y: 0.38, r: 2, c: 8 },
  { x: 0.6009524, y: 0.38, r: 2, c: 9 },
  { x: 0.66761905, y: 0.38, r: 2, c: 10 },
  { x: 0.74285716, y: 0.38, r: 2, c: 11 },
  { x: 0.80190474, y: 0.38, r: 2, c: 12 },
  { x: 0.87142855, y: 0.38, r: 2, c: 13 },
  { x: 0.9576191, y: 0.38, r: 2, c: 15 },

  { x: 0.030952381, y: 0.554, r: 3, c: 1 },
  { x: 0.14904761, y: 0.554, r: 3, c: 2 },
  { x: 0.21857142, y: 0.554, r: 3, c: 3 },
  { x: 0.2852381, y: 0.554, r: 3, c: 4 },
  { x: 0.35238096, y: 0.554, r: 3, c: 5 },
  { x: 0.41666666, y: 0.554, r: 3, c: 6 },
  { x: 0.48666668, y: 0.554, r: 3, c: 7 },
  { x: 0.5509524, y: 0.554, r: 3, c: 8 },
  { x: 0.62285715, y: 0.554, r: 3, c: 9 },
  { x: 0.67904764, y: 0.554, r: 3, c: 10 },
  { x: 0.7542857, y: 0.554, r: 3, c: 11 },
  { x: 0.82095236, y: 0.554, r: 3, c: 12 },
  { x: 0.88809526, y: 0.554, r: 3, c: 13 },

  { x: 0.030952381, y: 0.725, r: 4, c: 1 },
  { x: 0.17809524, y: 0.725, r: 4, c: 3 },
  { x: 0.24761905, y: 0.725, r: 4, c: 4 },
  { x: 0.31761906, y: 0.725, r: 4, c: 5 },
  { x: 0.38428572, y: 0.725, r: 4, c: 6 },
  { x: 0.45142856, y: 0.725, r: 4, c: 7 },
  { x: 0.5209524, y: 0.725, r: 4, c: 8 },
  { x: 0.5852381, y: 0.725, r: 4, c: 9 },
  { x: 0.72405064, y: 0.725, r: 4, c: 10 },
  { x: 0.71380955, y: 0.725, r: 4, c: 11 },
  { x: 0.78380954, y: 0.725, r: 4, c: 12 },
  { x: 0.85571426, y: 0.725, r: 4, c: 13 },
  { x: 0.94142854, y: 0.725, r: 4, c: 15 },

  { x: 0.030952381, y: 0.88, r: 5, c: 1 },
  { x: 0.08904762, y: 0.88, r: 5, c: 2 },
  { x: 0.14285715, y: 0.88, r: 5, c: 3 },
  { x: 0.20714286, y: 0.88, r: 5, c: 4 },
  { x: 0.2552381, y: 0.88, r: 5, c: 5 },
  { x: 0.56095237, y: 0.88, r: 5, c: 7 },
  { x: 0.61714286, y: 0.88, r: 5, c: 8 },
  { x: 0.67333335, y: 0.88, r: 5, c: 9 },
  { x: 0.73190475, y: 0.88, r: 5, c: 10 },
  { x: 0.7966667, y: 0.88, r: 5, c: 11 },
  { x: 0.8552381, y: 0.88, r: 5, c: 12 },
  { x: 0.9142857, y: 0.88, r: 5, c: 13 },
  { x: 0.9142857, y: 0.88, r: 5, c: 14 },
  { x: 0.9652381, y: 0.88, r: 5, c: 13 }
];

var keyData;
var isYoutube = true;

window.onload = function() {
  keyData = new Array(6);
  for (r = 0; r < 6; r++) {
    keyData[r] = new Array(22);
    for (c = 0; c < 22; c++) {
      keyData[r][c] = 0;
      if (c < 10) {
        keyData[r][c] = 0xff0000;
      }
    }
  }

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
    keyData[keyMap[i].r][keyMap[i].c] = c;
  }
  port.postMessage({ data: keyData, status: "change" });
}
