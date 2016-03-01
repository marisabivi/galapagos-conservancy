jQuery( window ).load(function() {
  jQuery('#donately-one-time-donation').prop('checked', false);
  jQuery('#donately-recurring-donation').prop('checked', true);
  jQuery('#donately-amount').attr('placeholder', '250');
});
