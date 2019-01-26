import data from './data';
import searchingItemTemplate from './searching-item.template';
import style from '../css/style.css';
import reset from '../css/reset.css';

function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

const { log } = console;
const searchingNameEl = document.getElementById('name');
const locationEl = document.getElementById('location');
const findBtn = document.getElementById('find-btn');
const searchingListEl = document.getElementById('searching-list');
let { lang } = getUrlVars();

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
    message.innerText = 'Ничего не найдено';
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
    authorPhotoLink.setAttribute('href', `person?lang=${lang}&name=${persons[i].name}`);
    authorName.setAttribute('href', `person?lang=${lang}&name=${persons[i].name}`);
    authorLocation.innerText = persons[i].cityBirth;
    searchingListEl.appendChild(newItem.children[0]);
  }
}

if (getUrlVars().name) searchingNameEl.value = decodeURI(getUrlVars().name);
if (!lang) lang = 'ru';
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

function changeLang(language) {

}
