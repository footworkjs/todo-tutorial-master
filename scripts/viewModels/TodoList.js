define(['footwork', '/scripts/viewModels/TodoItem.js'],
  function(fw, TodoItem) {
    return fw.viewModel({
      namespace: 'TodoList',
      initialize: function() {
        var self = this;
        this.todos = fw.observableArray();
        this.$namespace.subscribe('newItem', function(thingToDo) {
          self.todos.push( new TodoItem(thingToDo) );
        });
      }
    });    
  }
);