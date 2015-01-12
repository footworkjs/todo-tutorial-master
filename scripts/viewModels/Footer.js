define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Footer',
      initialize: function() {
        // numRemainingTodo will receive its value from the TodoList
        this.numRemainingTodo = fw.observable().receiveFrom('TodoList', 'remainingTodos');
      }
    });
  }
);