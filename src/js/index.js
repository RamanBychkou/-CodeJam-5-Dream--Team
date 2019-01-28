import data from './data';
import searchingItemTemplate from './searching-item.template';
import timelineItemTemplate from './timeline-item.template';
import workListItem from './work-list-item.template';
import './modal';

function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

const langOptions = ['ru', 'by', 'eng'];
const selectLanguage = document.getElementById('selectLanguage');
// eslint-disable-next-line
const ourLocation = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
const searchingNameEl = document.getElementById('name');
const locationEl = document.getElementById('location');
const findBtn = document.getElementById('find-btn');
const searchingListEl = document.getElementById('searching-list');
const pageHeaderEl = document.getElementById('pageHeader');
const linkToMainEl = document.getElementById('linkToMain');
const linkToProducersEl = document.getElementById('linkToProducers');
const linkToAuthorsEl = document.getElementById('linkToAuthors');
const textWhoAreWeEl = document.getElementById('textWhoAreWe');
const textAuthorOfDayEl = document.getElementById('textAuthorOfDay');
const biographyTextEl = document.getElementById('biographyText');
const textAuthorsEl = document.getElementById('textAuthors');
const textSearchingEl = document.getElementById('textSearching');
const textNameEl = document.getElementById('textName');
const textPlaceEl = document.getElementById('textPlace');
const titleWhoAreWeEl = document.getElementById('titleWhoAreWe');
const author1El = document.getElementById('author1');
const author2El = document.getElementById('author2');
const author3El = document.getElementById('author3');
const author4El = document.getElementById('author4');
const authorNameEl = document.getElementById('authorName');
const textTimeLineEl = document.getElementById('textTimeLine');
const textVideoEl = document.getElementById('textVideo');
const linkToVideo = document.getElementById('ytplayer');
const textBtnVideoEl = document.getElementById('textBtnVideo');
const textGalleryEl = document.getElementById('textGallery');
const timelineEl = document.getElementById('timeline');
const textOfWorksEl = document.getElementById('textOfWorks');
const workListEl = document.getElementById('workList');
let { lang } = getUrlVars();

function changeLang(language) {
  document.title = data[language].environment.pageTitle;
  if (pageHeaderEl) pageHeaderEl.innerText = data[language].environment.pageHeader;
  if (linkToMainEl) {
    linkToMainEl.innerText = data[language].environment.linkToMain;
    linkToMainEl.setAttribute('href', `index.html?lang=${lang}`);
  }
  if (linkToProducersEl) {
    linkToProducersEl.innerText = data[language].environment.linkToProducers;
    linkToProducersEl.setAttribute('href', `producers.html?lang=${lang}`);
  }
  if (linkToAuthorsEl) {
    linkToAuthorsEl.innerText = data[language].environment.linkToAuthors;
    linkToAuthorsEl.setAttribute('href', `index.html#about-us?lang=${lang}`);
  }
  if (textWhoAreWeEl) textWhoAreWeEl.innerText = data[language].environment.textWhoAreWe;
  if (textAuthorOfDayEl) {
    const max = data[language].producers.length;
    const randomNumber = Math.floor(Math.random() * max);
    textAuthorOfDayEl.innerText = `${data[language].environment.textAuthorOfDay} - ${data[language].producers[randomNumber].name}`;
    biographyTextEl.innerText = data[language].producers[randomNumber].biographyText;
  }
  if (textAuthorsEl) textAuthorsEl.innerText = data[language].environment.textAuthors;
  if (textSearchingEl) textSearchingEl.innerText = data[language].environment.textSearching;
  if (textNameEl) textNameEl.innerText = data[language].environment.textName;
  if (textPlaceEl) textPlaceEl.innerText = data[language].environment.textPlace;
  if (findBtn) findBtn.innerText = data[language].environment.textBtnSearch;
  if (titleWhoAreWeEl) titleWhoAreWeEl.innerText = data[language].environment.titleWhoAreWe;
  if (author1El) author1El.innerText = data[language].environment.author1;
  if (author2El) author2El.innerText = data[language].environment.author2;
  if (author3El) author3El.innerText = data[language].environment.author3;
  if (author4El) author4El.innerText = data[language].environment.author4;
  if (textTimeLineEl) textTimeLineEl.innerText = data[language].environment.textTimeLine;
  if (textVideoEl) textVideoEl.innerText = data[language].environment.textVideo;
  if (textBtnVideoEl) textBtnVideoEl.innerText = data[language].environment.textBtnVideo;
  if (textGalleryEl) textGalleryEl.innerText = data[language].environment.textGallery;
  if (textOfWorksEl) textOfWorksEl.innerText = data[language].environment.textOfWorks;
}

function clearElem(element) {
  const len = element.children.length;
  for (let i = 0; i < len; i += 1) {
    element.children[0].remove();
  }
}

function padTimeline(element, template, obj) {
  clearElem(element);
  obj.biography.forEach((item) => {
    const templateEl = document.createElement('div');
    templateEl.innerHTML = template;
    const date = templateEl.querySelector('.date');
    const action = templateEl.querySelector('.action');
    date.innerText = item.date;
    action.innerText = item.action;
    element.appendChild(templateEl);
  });
}

function findPersons(obj, language, name = '', location = '') {
  const list = [];

  for (let i = 0, len = obj[language].producers.length; i < len; i += 1) {
    const producerName = obj[language].producers[i].name.toLowerCase();
    const producerLocation = obj[language].producers[i].cityBirth.toLowerCase();
    if (producerName.includes(name.toLowerCase())) {
      if (producerLocation.includes(location.toLowerCase())) list.push(obj[language].producers[i]);
    }
  }

  return list;
}

function addPersons(persons = []) {
  if (persons.length === 0) {
    const message = document.createElement('div');
    message.innerText = data[lang].environment.textUnluckyResult;
    searchingListEl.appendChild(message);
    return;
  }
  for (let i = 0, len = persons.length; i < len; i += 1) {
    const newItem = document.createElement('div');
    newItem.innerHTML = searchingItemTemplate;
    const img = newItem.querySelector('img');
    const authorPhotoLink = newItem.querySelector('.author-link');
    const authorName = newItem.querySelector('.author-name');
    const authorLocation = newItem.querySelector('.author-location');
    img.setAttribute('src', persons[i].personPhoto);
    authorName.innerText = persons[i].name;
    authorPhotoLink.setAttribute('href', `author.html?lang=${lang}&name=${persons[i].name}`);
    authorName.setAttribute('href', `author.html?lang=${lang}&name=${persons[i].name}`);
    authorLocation.innerText = persons[i].cityBirth;
    searchingListEl.appendChild(newItem.children[0]);
  }
}

function addStaticAuthorData(author) {
  const mapEl = document.getElementById('map');
  const gallery = document.getElementById('gallery');
  const personPhotoEl = document.getElementById('personPhoto');
  const authorName = decodeURI(getUrlVars().name);
  const authorObj = findPersons(data, lang, authorName)[0];
  if (authorNameEl) authorNameEl.innerText = authorObj.name;
  if (linkToVideo) linkToVideo.setAttribute('src', authorObj.video);
  if (biographyTextEl) biographyTextEl.innerText = authorObj.biographyText;
  if (personPhotoEl) personPhotoEl.setAttribute('src', authorObj.personPhoto);
  mapEl.setAttribute('src', author.map);
  author.gallery.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    const img = document.createElement('img');
    galleryItem.setAttribute('class', 'gallery-item');
    img.setAttribute('src', author.gallery[index]);
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
  });
  author.works.forEach((item) => {
    let templateForWorks = document.createElement('div');
    templateForWorks.innerHTML = workListItem;
    // eslint-disable-next-line
    templateForWorks = templateForWorks.children[0];
    const actionText = templateForWorks.querySelector('div:first-child');
    const dateText = templateForWorks.querySelector('div:last-child');
    actionText.innerText = item.name;
    dateText.innerText = item.date;
    workListEl.appendChild(templateForWorks);
  });
  padTimeline(timelineEl, timelineItemTemplate, authorObj);
}

if (!lang) lang = 'ru';

if (ourLocation === 'producers.html') {
  findBtn.addEventListener('click', () => {
    clearElem(searchingListEl);
    const persons = findPersons(data, lang, searchingNameEl.value, locationEl.value);
    addPersons(persons);
  });
  searchingNameEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') findBtn.click();
  });
  locationEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') findBtn.click();
  });
  findBtn.click();
}

if (ourLocation === 'author.html') {
  const name = decodeURI(getUrlVars().name);
  const person = findPersons(data, lang, name)[0];
  addStaticAuthorData(person);
}

changeLang(lang);

// change language on change dropdownlist
selectLanguage.onchange = () => {
  lang = langOptions[selectLanguage.selectedIndex];
  changeLang(langOptions[selectLanguage.selectedIndex]);
};
