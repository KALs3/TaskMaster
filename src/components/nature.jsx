import React, { useEffect, useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { BsFillCloudRainFill } from 'react-icons/bs';
import { MdForest } from 'react-icons/md';
import rainSound from '../sounds/rain.wav';
import fireSound from '../sounds/fire.mp3';
import natureSound from '../sounds/nature.mp3';

function Nature({
  isRainSoundPlaying,
  isFireSoundPlaying,
  isNatureSoundPlaying,
  playRainSound,
  playFireSound,
  playNatureSound
}) {
  // const [rainAudio] = useState(new Audio(rainSound));
  // const [fireAudio] = useState(new Audio(fireSound));
  // const [natureAudio] = useState(new Audio(natureSound));
  // const [isRainSoundPlaying, setIsRainSoundPlaying] = useState(false);
  // const [isFireSoundPlaying, setIsFireSoundPlaying] = useState(false);
  // const [isNatureSoundPlaying, setIsNatureSoundPlaying] = useState(false);

  // useEffect(() => {
  //   rainAudio.loop = isRainSoundPlaying;
  // }, [rainAudio, isRainSoundPlaying]);

  // useEffect(() => {
  //   fireAudio.loop = isFireSoundPlaying;
  // }, [fireAudio, isFireSoundPlaying]);

  // useEffect(() => {
  //   natureAudio.loop = isNatureSoundPlaying;
  // }, [natureAudio, isNatureSoundPlaying]);

  // const playRainSound = () => {
  //   if (isFireSoundPlaying) {
  //     fireAudio.pause();
  //     setIsFireSoundPlaying(false);
  //   }
  //   if (isNatureSoundPlaying) {
  //     natureAudio.pause();
  //     setIsNatureSoundPlaying(false);
  //   }

  //   if (isRainSoundPlaying) {
  //     rainAudio.pause();
  //     setIsRainSoundPlaying(false);
  //   } else {
  //     rainAudio.play();
  //     setIsRainSoundPlaying(true);
  //   }
  // };

  // const playFireSound = () => {
  //   if (isRainSoundPlaying) {
  //     rainAudio.pause();
  //     setIsRainSoundPlaying(false);
  //   }
  //   if (isNatureSoundPlaying) {
  //     natureAudio.pause();
  //     setIsNatureSoundPlaying(false);
  //   }

  //   if (isFireSoundPlaying) {
  //     fireAudio.pause();
  //     setIsFireSoundPlaying(false);
  //   } else {
  //     fireAudio.play();
  //     setIsFireSoundPlaying(true);
  //   }
  // };

  // const playNatureSound = () => {
  //   if (isRainSoundPlaying) {
  //     rainAudio.pause();
  //     setIsRainSoundPlaying(false);
  //   }
  //   if (isFireSoundPlaying) {
  //     fireAudio.pause();
  //     setIsFireSoundPlaying(false);
  //   }

  //   if (isNatureSoundPlaying) {
  //     natureAudio.pause();
  //     setIsNatureSoundPlaying(false);
  //   } else {
  //     natureAudio.play();
  //     setIsNatureSoundPlaying(true);
  //   }
  // };

  useEffect(() => {
    const rainAudio = new Audio(rainSound);
    rainAudio.loop = isRainSoundPlaying;
    if (isRainSoundPlaying) {
      rainAudio.play();
    } else {
      rainAudio.pause();
    }

    return () => {
      rainAudio.pause();
    };
  }, [isRainSoundPlaying]);

  useEffect(() => {
    const fireAudio = new Audio(fireSound);
    fireAudio.loop = isFireSoundPlaying;
    if (isFireSoundPlaying) {
      fireAudio.play();
    } else {
      fireAudio.pause();
    }

    return () => {
      fireAudio.pause();
    };
  }, [isFireSoundPlaying]);

  useEffect(() => {
    const natureAudio = new Audio(natureSound);
    natureAudio.loop = isNatureSoundPlaying;
    if (isNatureSoundPlaying) {
      natureAudio.play();
    } else {
      natureAudio.pause();
    }

    return () => {
      natureAudio.pause();
    };
  }, [isNatureSoundPlaying]);








  return (
    <div>
      <div className="artboard artboard-horizontal phone-6 m-auto flex items-center mt-32 rounded-3xl  bg-bgk-5  w-full text-white text-lg font-sans justify-evenly hover:bg-cool-100 

      
      
      ">  
      
      
            <AiFillFire
          size="50"
          className={`cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out hover:text-orange-500 hover:border-solid hover:border-2 rounded-lg ${
            isFireSoundPlaying ? 'text-orange-500' : ''
          }`}
          onClick={playFireSound}
        />
        <BsFillCloudRainFill
          size="50"
          className={`cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out hover:text-blue-500 hover:border-solid hover:border-2 rounded-lg ${
            isRainSoundPlaying ? 'text-blue-500' : 'text-white'
          }`}
          onClick={playRainSound}
        />
        <MdForest
          size="50"
          className={`cursor-pointer hover:scale-150 transition-all duration-350 hover:text-green-500 ease-in-out hover:border-solid hover:border-2 rounded-lg  ${
            isNatureSoundPlaying ? 'text-green-500' : ''
          }`}
          onClick={playNatureSound}
        />
      </div>
    </div>
  );
}

export default Nature;
