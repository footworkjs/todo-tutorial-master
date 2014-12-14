define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Main',
      router: {
        routes: [
          {
            route: '/',
            title: 'Todo Application Tutorial',
            controller: function() {
              // do something here
            }
          }
        ]
      }
    });    
  }
);
