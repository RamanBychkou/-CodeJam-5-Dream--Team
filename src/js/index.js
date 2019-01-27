import data from './data';
import searchingItemTemplate from './searching-item.template';

function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

const { log } = console;
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
const textFooterEl = document.getElementById('textFooter');
const textSearchingEl = document.getElementById('textSearching');
const textNameEl = document.getElementById('textName');
const textPlaceEl = document.getElementById('textPlace');
const titleWhoAreWeEl = document.getElementById('titleWhoAreWe');
const author1El = document.getElementById('author1');
const author2El = document.getElementById('author2');
const author3El = document.getElementById('author3');
const author4El = document.getElementById('author4');
let { lang } = getUrlVars();

function changeLang(language) {
  document.title = data[language].environment.pageTitle;
  if (pageHeaderEl) pageHeaderEl.innerText = data[language].environment.pageHeader;
  if (linkToMainEl) linkToMainEl.innerText = data[language].environment.linkToMain;
  if (linkToProducersEl) linkToProducersEl.innerText = data[language].environment.linkToProducers;
  if (linkToAuthorsEl) linkToAuthorsEl.innerText = data[language].environment.linkToAuthors;
  if (textWhoAreWeEl) textWhoAreWeEl.innerText = data[language].environment.textWhoAreWe;
  if (textAuthorOfDayEl) textAuthorOfDayEl.innerText = data[language].environment.textAuthorOfDay;
  if (textFooterEl) textFooterEl.innerText = data[language].environment.textFooter;
  if (textSearchingEl) textSearchingEl.innerText = data[language].environment.textSearching;
  if (textNameEl) textNameEl.innerText = data[language].environment.textName;
  if (textPlaceEl) textPlaceEl.innerText = data[language].environment.textPlace;
  if (findBtn) findBtn.innerText = data[language].environment.textBtnSearch;
  if (titleWhoAreWeEl) titleWhoAreWeEl.innerText = data[language].environment.titleWhoAreWe;
  if (author1El) author1El.innerText = data[language].environment.author1;
  if (author2El) author2El.innerText = data[language].environment.author2;
  if (author3El) author3El.innerText = data[language].environment.author3;
  if (author4El) author4El.innerText = data[language].environment.author4;
}

function findPersons(obj, language, name = '', location = '') {
  const list = [];

  for (let i = 0, len = obj[language].producers.length; i < len; i += 1) {
    const producerName = obj[language].producers[i]['name'].toLowerCase();
    const producerLocation = obj[language].producers[i]['cityBirth'].toLowerCase();
    if (producerName.includes(name.toLowerCase())) {
      if (producerLocation.includes(location.toLowerCase())) list.push(obj[language].producers[i]);
    }
  }

  return list;
}

function clearSearchingList() {
  const len = searchingListEl.children.length;
  for (let i = 0; i < len; i += 1) {
    searchingListEl.children[0].remove();
  }
}

function addPersons(persons = []) {
  if (persons.length === 0) {
    const message = document.createElement('div');
    message.innerText = data[lang].environment.textUnluckyResult;
    searchingListEl.appendChild(message);
    log(searchingListEl);
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
    authorPhotoLink.setAttribute('href', `person.html?lang=${lang}&name=${persons[i].name}`);
    authorName.setAttribute('href', `person.html?lang=${lang}&name=${persons[i].name}`);
    authorLocation.innerText = persons[i].cityBirth;
    searchingListEl.appendChild(newItem.children[0]);
  }
}

if (!lang) lang = 'ru';
changeLang(lang);

if (ourLocation === 'producers.html') {
  // if (getUrlVars().name) searchingNameEl.value = decodeURI(getUrlVars().name);
  changeLang(lang);
  findBtn.addEventListener('click', () => {
    clearSearchingList();
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
