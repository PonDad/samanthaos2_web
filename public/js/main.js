var hello = function() {
    console.log(CONFIG.resHello);
    document.getElementById('caption').textContent = CONFIG.resHello;
    say(CONFIG.resHello);
  };

var greeting = function() {
    resGreeting = randomSentence(CONFIG.resGreeting)
    console.log(resGreeting);
    document.getElementById('caption').textContent = resGreeting;
    say(resGreeting);
  };

var googbye = function() {
    resGoodbye = randomSentence(CONFIG.resGoodbye)
    console.log(resGoodbye);
    document.getElementById('caption').textContent = resGoodbye;
    say(resGoodbye);
  };

var m = moment();

var currentTime = function(){
    console.log(m.format("YYYY年MM月DD日 HH時mm分" + "です"));
    document.getElementById('caption').textContent = m.format("YYYY年MM月DD日 HH時mm分" + "です");
    say(m.format("YYYY年MM月DD日 HH時mm分" + "です"));
}

var quickSpeech = function() {
    resQuickSpeech = randomSentence(CONFIG.resQuickSpeech)
    console.log(resQuickSpeech);
    document.getElementById('caption').textContent = resQuickSpeech;
    say(resQuickSpeech);
  };

var repeatLastSentence = function(){
    say(lastSentence);
};

var commands = {
  'こんにちは': hello,
  '(ヘイ)(オーケー)(OK)サマンサ': greeting,
  'さようなら': googbye,
  '今何時(か教えて)(かな)': currentTime,
  '早口言葉(話して)(を話して)': quickSpeech,
  'もう一回(話して)': repeatLastSentence,
};

if (annyang) {
  annyang.setLanguage(CONFIG.voiceRecognitionLanguage)
  annyang.addCommands(commands);
  annyang.start();
  console.log('Voice recognition ready');
}

var lastSentence = null;

function say(msg, callback) {
  console.log('Pause annyang');
  console.log('Saying: ' + msg);
  lastSentence=msg;
  annyang.abort();

  function voiceErrorCallback() {
      console.log("Voice error");
  }

  function voiceEndCallback() {
      console.log('Resume annyang');
  }

  var parameters = {
      onerror: voiceErrorCallback,
      onend: voiceEndCallback
  }

  responsiveVoice.speak(msg, CONFIG.voiceSpeakingLanguage, parameters);
  annyang.start();
};

function randomSentence(arr) {
    if (Array.isArray(arr)) return arr[Math.floor(Math.random() * arr.length)];
    return arr;
}
