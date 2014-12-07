fw.viewModel({
  namespace: 'TodoList',
  autoRegister: true,
  initialize: function() {
    this.todos = fw.observableArray();
  }
});