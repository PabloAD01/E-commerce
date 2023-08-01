import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import LikedAnimation from "../assets/animations/LikedAnimation.json";

const Like_Button = () => {
  const [liked, setLiked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const lottieRef = useRef();

  function handleOnClick() {
    setClickCount(clickCount + 1);

    if (clickCount === 0) {
      setLiked(true);
    } else if (clickCount === 1) {
      console.log(liked);
      setClickCount(0);
      setLiked(false);
      console.log(liked);
    }
  }

  useEffect(() => {
    let segments = liked ? [20, 50] : [40, 20];
    lottieRef.current.setSpeed(2);
    lottieRef.current.playSegments(segments, true);
  }, [liked]);

  return (
    <button onClick={handleOnClick} className="flex w-10 bg-MainGray">
      <Lottie
        animationData={LikedAnimation}
        loop={false}
        autoplay={false}
        lottieRef={lottieRef}
      />
    </button>
  );
};

export default Like_Button;
