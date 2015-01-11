define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'TodoItem',
      initialize: function(thingToDo) {
        this.thingToDo = fw.observable(thingToDo);
      }
    });
  }
);