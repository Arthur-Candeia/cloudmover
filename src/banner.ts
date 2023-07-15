let counterImg = 1;

setInterval(() => {
  const bannerImg = document.querySelector('#banner > img')
  bannerImg?.setAttribute('src', `./banner/cloud${counterImg}.jpg`)
  counterImg ++;
  counterImg > 10 ? counterImg = 1 : counterImg;
}, 3000)