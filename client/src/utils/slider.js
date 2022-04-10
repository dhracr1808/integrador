export const changeSlider = () => {
  const arr = [
    "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560",
    "https://assets-global.website-files.com/5f4f67c5950db17954dd4f52/5f5b7ee442f1e5b9fee1c117_hacerse-una-casa.jpeg",
  ];
  let position = Math.round(Math.random() * (arr.length - 1));

  return arr[position];
};
