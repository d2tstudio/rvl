if (Meteor.isClient) {
  Meteor.startup( function() {
    Reveal.initialize();
  });
}