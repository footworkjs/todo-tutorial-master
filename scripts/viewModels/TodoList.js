var TodoList = fw.viewModel({
  namespace: 'TodoList',
  autoRegister: true,
  initialize: function() {
    var self = this; // create a reference to this viewModel we can use inside of the callback
    this.todos = fw.observableArray();

    // listen for any 'newItem' messages broadcast on our namespace.
    this.$namespace.subscribe('newItem', function(thingToDo) {
      // JSON object representing new thingToDo was received, lets create a new TodoItem based on it
      self.todos.push( new TodoItem(thingToDo) );
    });
  }
});