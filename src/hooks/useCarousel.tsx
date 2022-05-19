import { useState } from 'react';

export const useCarousel = ({items, ref, slider}) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [slide, setSlide] = useState(1);

  let position = 0;
  let endPosition = 0;

  const onTouchStartHandler = (e) => {
    position = e.targetTouches[0].clientX;
  }

  const onTouchEndHandler = (e) => {
    endPosition = e.changedTouches[0].clientX;

    let width = ref.current.children[0].getBoundingClientRect().width;
    let slides = Math.round(slider.current.offsetWidth / width);


    if (position - endPosition > 100 && slide < items.length - slides + 1) {
      nextCardHandler()
    } else if (position - endPosition < -100 && slide > 1) {
      prevCardHandler()
    }
  }

  const nextCardHandler = () => {
    let width = ref.current.children[0].getBoundingClientRect().width;
    let slides = Math.round(slider.current.getBoundingClientRect().width / width);
    console.log(slides)
    console.log(slide)
    console.log(items.length - slide);
    setSlide(prevState => prevState + 1);

    if (slide > 0) {
      ref.current.style.marginLeft = -width * slide + 'px';
    }

    if (items.length - slides === slide) {
      setNextDisabled(prevState => !prevState)
    }
    setPrevDisabled(false);
  };

  const prevCardHandler = () => {
    let width = ref.current.children[0].getBoundingClientRect().width;

    ref.current.style.marginLeft = -width * (slide - 2) + 'px';
    setSlide(prevState => prevState - 1);

    if (slide === 2) {
      setPrevDisabled(true);
    }
    setNextDisabled(false);
  };

  return {
    nextCardHandler, prevCardHandler, nextDisabled, prevDisabled, onTouchStartHandler, onTouchEndHandler
  };
};
