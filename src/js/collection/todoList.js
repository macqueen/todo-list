var TodoList = Backbone.Collection.extend({

  model: Todo,

  initialize: function() {
    this.sync('read');
    this.on('change:completed', this.sync, this);
  },

  addTodo: function(todo) {
    this.add({task: todo});
    this.sync('create');
  },

  sync: function(method) {
    var models;

    if (method === 'read') {
      models = JSON.parse(localStorage.getItem('todoItems'));
      if (models) {
        this.add(models, {silent: true});
      }
    } else {
      models = JSON.stringify(this.toJSON());
      localStorage.setItem('todoItems', models);
    }
  },

  deleteTodo: function(model) {
    this.remove(model);
    this.sync('delete');
  }

});
