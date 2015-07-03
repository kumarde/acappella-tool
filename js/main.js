function play_Chord() {
  sopAudioId = document.getElementById('soprano-select').value;
  alt1AudioId = document.getElementById('alto1-select').value;
  alt2AudioId = document.getElementById('alto2-select').value;
  tenAudioId = document.getElementById('tenor-select').value;
  barAudioId = document.getElementById('baritone-select').value;
  basAudioId = document.getElementById('bass-select').value;
  listOfNotes = document.getElementsByTagName('audio');
  if (document.getElementById("controlButton").value == "Play Chord"){
    document.getElementById("controlButton").value = "Stop Chord";
    for (var i=0; i<listOfNotes.length; i++) {
      if (listOfNotes[i].id == sopAudioId){
        listOfNotes[i].play();
      }
      if (listOfNotes[i].id == alt1AudioId){
        listOfNotes[i].play();
      }
      if (listOfNotes[i].id == alt2AudioId){
        listOfNotes[i].play();
      }
      if (listOfNotes[i].id == tenAudioId){
        listOfNotes[i].play();
      }
      if (listOfNotes[i].id == barAudioId){
        listOfNotes[i].play();
      }
      if (listOfNotes[i].id == basAudioId){
        listOfNotes[i].play();
      }
    }
  }
  else {
    document.getElementById("controlButton").value = "Play Chord";
    for (var i=0; i<listOfNotes.length; i++) {
      listOfNotes[i].pause();
    }
  }
}
