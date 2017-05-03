(function() {
  'use strict';

// Update
const startEdit = function($target) {
  const val = $target.children('li').text();

  $target.children('li').remove();
  $target.prepend('<input>').attr('type', 'text');
  $target.children('input').val(val);
  $target.children('div').children('button.edit-btn').text('Update');
  $target.addClass('editing');
}

const completeEdit = function($target, val) {
  $target.removeClass('editing');
  $target.children('div').children('button.edit-btn').text('Edit');
  $target.children('input').remove();
  $target.prepend($('<li>').text(val));
}

const inHover = function() {
  if ($(this).hasClass('editing')) {
    return;
  }

  const $button = $('<button>');
  const $i = $('<i>');

  $i.addClass('fa');
  $i.addClass('fa-pencil');
  $button.append($i);
  $button.addClass('btn edit-btn');
  $(this).append($button);
}

const outHover = function() {
  $('.edit-btn').remove();
}

$('.item').hover(inHover, outHover);

$('ul').on('click', '.edit-btn', (e) => {
  let $button = $(e.target);

  if ($button.hasClass('fa')) {
    $button = $button.parents('button');
  }

  $button.parents('.item').addClass('editing');
  $button.siblings('.hide').removeClass('hide');
  $button.siblings('li').addClass('hide');
  $('.edit-btn').remove();
});

$('button.add-item').on('click', (e) => {
  $(e.target).addClass('hide');
  $(e.target).siblings('form').removeClass('hide');
});

$('button#exit-edit-form').on('click', (e) => {
  e.preventDefault();

  const $item = $(e.target).parents('.item');

  $item.removeClass('editing');
  $item.children('li').removeClass('hide');
  $item.children('form').addClass('hide');
});

$('button#exit-add-form').on('click', (e) => {
  e.preventDefault();

  const $tools = $(e.target).parents('.tools');

  $tools.children('.add-item').removeClass('hide');
  $tools.children('form').addClass('hide');
});

})();
