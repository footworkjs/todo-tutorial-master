require.config({
  paths: {
    "footwork": "../bower_components/footwork/dist/footwork-all"
  }
});

require([ "footwork" ],
  function( fw ) {
    // ...
  }
);