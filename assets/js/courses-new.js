$(function () {
  $('.tabs-triggers__item-all').click(function (e) {
    e.preventDefault();

    $('.tabs-content__item-5-6-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-7-9-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-10-15-years').removeClass('tabs-content__item-active');

    $('.tabs-triggers__item-5-6-years').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-7-9-years').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-10-15-years').removeClass('tabs-triggers__item-active');

    $('.tabs-triggers__item-all').addClass('tabs-triggers__item-active');
    $('.tabs-content__item-5-6-years').addClass('tabs-content__item-active');
    $('.tabs-content__item-7-9-years').addClass('tabs-content__item-active');
    $('.tabs-content__item-10-15-years').addClass('tabs-content__item-active');
  });
  $('.tabs-triggers__item-5-6-years').click(function (e) {
    e.preventDefault();

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-content__item-5-6-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-7-9-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-10-15-years').removeClass('tabs-content__item-active');

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-7-9-years').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-10-15-years').removeClass('tabs-triggers__item-active');

    $('.tabs-triggers__item-5-6-years').addClass('tabs-triggers__item-active');
    $('.tabs-content__item-5-6-years').addClass('tabs-content__item-active');
  });

  $('.tabs-triggers__item-7-9-years').click(function (e) {
    e.preventDefault();

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-content__item-5-6-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-7-9-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-10-15-years').removeClass('tabs-content__item-active');

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-5-6-years').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-10-15-years').removeClass('tabs-triggers__item-active');

    $('.tabs-triggers__item-7-9-years').addClass('tabs-triggers__item-active');
    $('.tabs-content__item-7-9-years').addClass('tabs-content__item-active');
  });

  $('.tabs-triggers__item-10-15-years').click(function (e) {
    e.preventDefault();

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-content__item-5-6-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-7-9-years').removeClass('tabs-content__item-active');
    $('.tabs-content__item-10-15-years').removeClass('tabs-content__item-active');

    $('.tabs-triggers__item-all').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-5-6-years').removeClass('tabs-triggers__item-active');
    $('.tabs-triggers__item-7-9-years').removeClass('tabs-triggers__item-active');

    $('.tabs-triggers__item-10-15-years').addClass('tabs-triggers__item-active');
    $('.tabs-content__item-10-15-years').addClass('tabs-content__item-active');
  });
});
