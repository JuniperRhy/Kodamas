import "./App.css";
import Kodama1 from "./kodamas/kodama1";
import Kodama2 from "./kodamas/kodama2";

import KodamaCouple from "./kodamas/kodamaCouple";
import KodamaBG1 from "./kodamas/kodamaBG1";
import KodamaBG2 from "./kodamas/kodamaBG2";
import KodamaBG3 from "./kodamas/kodamaBG3";
import KodamaBG4 from "./kodamas/kodamaBG4";
import kodamaShake from "./media/kodamaShake.mp3";
import kodamaShake2 from "./media/kodamaShake2.mp3";
import kodamaShake3 from "./media/kodamaShake3.mp3";
import kodamaShake4 from "./media/kodamaShake4.mp3";
import kodamaShake5 from "./media/kodamaShake5.mp3";
import kodamaShake6 from "./media/kodamaShake6.mp3";
import kodamaShake7 from "./media/kodamaShake7.mp3";
import pianoMusic from "./media/pianoMusic.mp3";
import calmForest from "./media/calmForest.mp3";
import { Howl, Howler } from "howler";
import { useState } from "react";

function App() {
  const [kodamaBG1IsClicked, setKodamaBG1IsClicked] = useState(false);
  const [kodamaBG2IsClicked, setKodamaBG2IsClicked] = useState(false);
  const [kodamaBG3IsClicked, setKodamaBG3IsClicked] = useState(false);
  const [kodamaBG4IsClicked, setKodamaBG4IsClicked] = useState(false);
  const [kodama1IsClicked, setKodama1IsClicked] = useState(false);
  const [kodama2IsClicked, setKodama2IsClicked] = useState(false);
  const [coupleLeftIsClicked, setCoupleLeftIsClicked] = useState(false);
  const [coupleRightIsClicked, setCoupleRightIsClicked] = useState(false);

  const shakeArr = [
    kodamaShake,
    kodamaShake2,
    kodamaShake3,
    kodamaShake4,
    kodamaShake5,
    kodamaShake6,
    kodamaShake7,
  ];

  const randomShake = () => {
    return shakeArr[Math.floor(Math.random() * 7)];
  };

  const sound = new Howl({
    src: randomShake(),
    volume: 0.35,
  });

  const backgroundSound = new Howl({
    src: pianoMusic,
    volume: 0.15,
    loop: false,
  });

  const backgroundAmbience = new Howl({
    src: calmForest,
    volume: 0.05,
    loop: true,
  });

  Howler.volume(0.2);

  // console.log(kodama1IsClicked);
  console.log(kodama2IsClicked);

  return (
    <div className="App">
      <div
        className="background"
        onMouseEnter={() => {
          backgroundAmbience.play();
        }}
        onClick={() => {
          // backgroundSound.play();
        }}
      >
        <div className="contentWrapper">
          <div className="displayText">
            <div className="displayText1">Welcome </div>
            <div className="displayText2">To </div>
            <div className="displayText3">Kodama </div>
            <div className="displayText4">Forest </div>
          </div>
          <div className="displaySubText">Hover and Click to Interact</div>
          <KodamaBG1
            isClicked={kodamaBG1IsClicked}
            setIsClicked={setKodamaBG1IsClicked}
            sound={sound}
          />
          <KodamaBG2
            isClicked={kodamaBG2IsClicked}
            setIsClicked={setKodamaBG2IsClicked}
            sound={sound}
          />
          <KodamaBG3
            isClicked={kodamaBG3IsClicked}
            setIsClicked={setKodamaBG3IsClicked}
            sound={sound}
          />
          <KodamaBG4
            isClicked={kodamaBG4IsClicked}
            setIsClicked={setKodamaBG4IsClicked}
            sound={sound}
          />
          <Kodama1
            isClicked={kodama1IsClicked}
            setIsClicked={setKodama1IsClicked}
            sound={sound}
          />

          <KodamaCouple
            isLeftClicked={coupleLeftIsClicked}
            setIsLeftClicked={setCoupleLeftIsClicked}
            isRightClicked={coupleRightIsClicked}
            setIsRightClicked={setCoupleRightIsClicked}
            sound={sound}
          />

          <Kodama2
            isClicked={kodama2IsClicked}
            setIsClicked={setKodama2IsClicked}
            sound={sound}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
