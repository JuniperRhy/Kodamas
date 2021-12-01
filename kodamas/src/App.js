import "./App.css";
import Kodama1 from "./kodama1";
import Kodama2 from "./kodama2";
import KodamaCouple from "./kodamaCouple";
import kodamaShake from "./media/kodamaShake.mp3";
import kodamaShake2 from "./media/kodamaShake2.mp3";
import kodamaShake3 from "./media/kodamaShake3.mp3";
import pianoMusic from "./media/pianoMusic.mp3";
import { Howl, Howler } from "howler";
import { useState } from "react";

function App() {
  const [kodama1IsClicked, setKodama1IsClicked] = useState(false);
  const [kodama2IsClicked, setKodama2IsClicked] = useState(false);
  const [coupleLeftIsClicked, setCoupleLeftIsClicked] = useState(false);
  const [coupleRightIsClicked, setCoupleRightIsClicked] = useState(false);

  const shakeArr = [kodamaShake, kodamaShake2, kodamaShake3];

  const randomShake = () => {
    return shakeArr[Math.floor(Math.random() * 3)];
  };

  const sound = new Howl({
    src: randomShake(),
  });

  const backgroundSound = new Howl({
    src: pianoMusic,
    volume: 0.15,
  });

  // console.log(kodama1IsClicked);
  console.log(kodama2IsClicked);

  Howler.volume(0.2);

  return (
    <div className="App">
      <div
        className="background"
        onMouseEnter={() => {
          backgroundSound.play();
        }}
      ></div>
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
  );
}

export default App;
