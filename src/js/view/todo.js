var TodoView = Backbone.View.extend({

  tagName: 'li',

  className: 'todo-item',

  events: {
    'click .delete': 'deleteTodo'
  },

  template: _.template('<input type="checkbox"><%= task %></input><span class="delete">X</span>'),

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  deleteTodo: function() {
    var todoList = this.model.collection;
    todoList.remove(this.model);
    todoList.sync('delete');
    this.remove();
  }

});
