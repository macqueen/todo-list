var TodoView = Backbone.View.extend({

  tagName: 'li',

  className: 'todo-item',

  events: {
    'click .delete': 'deleteTodo',
    'click input:checkbox': 'updateStatus'
  },

  template: _.template('<input type="checkbox"><%= task %></input><span class="delete">X</span>'),

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.get('completed')) {
      this.$el.find('input:checkbox').attr('checked', 'true');
    }
  },

  deleteTodo: function() {
    this.model.collection.deleteTodo(this.model);
    this.remove();
  },

  updateStatus: function(e) {
    this.model.set('completed', e.target.checked);
  }

});
