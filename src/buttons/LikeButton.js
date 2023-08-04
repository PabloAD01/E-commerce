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
      setClickCount(0);
      setLiked(false);
    }
  }

  useEffect(() => {
    let segments = liked ? [20, 50] : [40, 20];
    lottieRef.current.setSpeed(2);
    lottieRef.current.playSegments(segments, true);
  }, [liked]);

  return (
    <button onClick={handleOnClick} className="flex w-10">
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
