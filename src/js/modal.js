import $ from 'jquery';

$('.js-modal-btn').on('click', () => {
  $('.worksWrapper').addClass('modal');
});
$('.btn-close').on('click', () => {
  $('.modal').removeClass('modal');
});
$('.worksWrapper').on('click', (e) => {
  if (e.target.id !== 'video') {
    $('.modal').removeClass('modal');
  }
});
