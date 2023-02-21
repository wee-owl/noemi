import { trands } from "./db.js";

const trandsContainer = document.querySelector('.trands__container');
const arrowLeft = document.querySelector('.trands__arrow-left');
const arrowRight = document.querySelector('.trands__arrow-right');


const createTrandBlock = (el) => {
  const trandContent = document.createElement('div');
  trandContent.classList.add('trand__content');

  const trandImg = document.createElement('img');
  trandImg.classList.add('trand__content-img');
  trandImg.src = `${el.img}`;
  trandImg.alt = `${el.alt}`;
  trandContent.append(trandImg);

  const trandSub = document.createElement('div');
  trandSub.classList.add('trand__sub');

  const trandList = document.createElement('ul');
  trandList.classList.add('trand__list');

  for (let i = 0; i < el.items.length; i++) {
    const trandItems = document.createElement('li');
    trandItems.classList.add('trand__items');
    const trandItemsLink = document.createElement('a');
    trandItemsLink.href = "#0";
    trandItemsLink.innerText = `${el.items[i]}`;
    trandItems.append(trandItemsLink);
    trandList.append(trandItems);
  }

  const trandSubtitleWrap = document.createElement('h3');
  const trandSubtitle = document.createElement('a');
  trandSubtitle.classList.add('trand__subtitle');
  trandSubtitle.href = "#0";
  trandSubtitle.innerText = `${el.subtitle}`;
  trandSubtitleWrap.append(trandSubtitle);

  trandSub.append(trandList, trandSubtitleWrap);
  trandContent.append(trandImg, trandSub);
  trandsContainer.append(trandContent);
};

let activeTrands = [];
let n = 0;

const createTrands = () => {
  activeTrands.push(trands[n], trands[n+1], trands[n+2], trands[n+3]);
  activeTrands.forEach(item => {
    createTrandBlock(item);
  });
};
createTrands();

const updateActiveTrands = (n) => {
  trandsContainer.innerHTML = '';
  activeTrands = [];
  if (n < 0) {
    activeTrands.push(trands[trands.length+n-4], trands[trands.length+n-3], trands[trands.length+n-2], trands[trands.length+n-1]);
    activeTrands.forEach(item => {
      createTrandBlock(item);
    });
  } else if (n >= 1) {
    activeTrands.push(trands[n], trands[n+1], trands[n+2], trands[n+3]);
    activeTrands.forEach(item => {
      createTrandBlock(item);
    });
  } else {
    n = 0;
    createTrands();
  }
};

const stopTrands = (i) => {
  if (i < 0 && (trands.length + i === 4)) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }
  if (i > 0 && (trands.length - i === 4)) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }
}

const prevTrands = () => {
  n -= 1;
  stopTrands(n);
  updateActiveTrands(n);
};

const nextTrands = () => {
  n += 1;
  stopTrands(n);
  updateActiveTrands(n);
};

arrowLeft.addEventListener('click', prevTrands);
arrowRight.addEventListener('click', nextTrands);