fw.viewModel({
  namespace: 'TodoList',
  autoRegister: true,
  initialize: function() {
    var self = this;
    this.todos = fw.observableArray();
    this.$namespace.subscribe('newItem', function(thingToDo) {
      self.todos.push( new TodoItem(thingToDo) );
    });
  }
});