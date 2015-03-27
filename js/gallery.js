$('.slide-button').on('click', function(event) {
  $(this).closest('.slide').addClass('slide-is-offscreen');
});

$('[data-character]').on('click', function(event) {
  var $element = $(this);
  var character = $element.data('character');
  var imageCount = $element.data('image-count');
  var markup = '';

  $('[data-character]').removeClass('is-active');
  $('[data-character="' + character + '"]').addClass('is-active');

  event.preventDefault();

  $('.info').removeClass('info-is-visible');
  $('.info[data-info-character="' + character + '"]').addClass('info-is-visible');

  $('.quoteBar').html( $('[data-info-character="' + character + '"]').data('quotation') );

  $('#featImg').attr('src', 'http://stuff.johndjameson.com/camelot/' + character.toLowerCase() + '-feat.jpg');
  $('#feat').html( $('[data-info-character="' + character + '"]').data('feat') );

  for (var index = 1; index <= imageCount; index++) {
    markup += '<img src="http://stuff.johndjameson.com/camelot/' + character.toLowerCase() + '-' + index + '.jpg" > ';
  };

});
