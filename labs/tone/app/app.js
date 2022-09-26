// REFERENCE
// let synthApp= {
//   synth: new Tone.Synth().toDestination(),
//   notes: ["C4", "D4", "E4", "F4"], 
//   currentNote: 0,
//   playSound() {
//       //play a middle "C" for the duration of an 8th note
//   this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
//   this.currentNote ++;
//   setTimeout(this.playSound.bind(this), 500);
//   }
  
// }


let currentInstrument=0;

//Instrunment class
class Instrument {
  //properties for loudness, for family, and for play verb
  constructor(family, verb, loudness) {
    this.family = family;
    this.verb = verb;
    this.loudness = loudness;
  }
  // //invoking a class
  // playNext() {
  //   console.log(this.family, this.verb, this.loudness);
  // }

  //duration
  playNext(duration) {
    const synth= new TouchEvent.Syth().toDestination();
  this.synth.triggerAttackRelease("C", duration);
  setTimeout(this.loudness, duration * 500);
  }
}

//extending the class to Instrument
class Woodwind extends Instrument {
  constructor(loudness) {
    super("woodwind", "blows", loudness);
  }
}

//extending the class to Instrument
class Percussion extends Instrument {
  constructor(loudness) {
    super("percussion", "slaps", loudness);
  }
}
//extending the class to Instrument
class String extends Instrument {
  constructor(loudness) {
    super("string", "strums", loudness);
  }
}

//instantiating classes
var flute = new Woodwind(4);
var bongo = new Percussion(10);
var violin = new String(7);

//creating an array for instruments
var instruments = [flute, bongo, violin];

//not sure anymore
for (var i = 0; i < instruments.length; i++) {
  instruments[i].play();
}
