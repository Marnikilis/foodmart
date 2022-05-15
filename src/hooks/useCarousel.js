import {useState} from 'react';

export const useCarousel = ({items, ref, slider}) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [slide, setSlide] = useState(1);

  const nextCardHandler = () => {

    let width = ref.current.children[0].offsetWidth;
    let slides = Math.round(slider.current.offsetWidth / width);

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
    let width = ref.current.children[0].offsetWidth;

    ref.current.style.marginLeft = -width * (slide - 2) + 'px';
    setSlide(prevState => prevState - 1);

    if (slide === 2) {
      setPrevDisabled(true);
    }
    setNextDisabled(false);
  };

  return {
    nextCardHandler, prevCardHandler, nextDisabled, prevDisabled
  };
};

// console.log(ref.current.offsetWidth )
// console.log(window.screen.width )
// console.log(slider.current.offsetWidth)