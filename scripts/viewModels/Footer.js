define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Footer',
      initialize: function() {
        // numRemainingTodos will receive its value from the TodoList
        this.numRemainingTodos = fw.observable().receiveFrom('TodoList', 'numRemainingTodos');
      }
    });
  }
);