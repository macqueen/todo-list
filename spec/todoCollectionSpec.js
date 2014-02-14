describe('TodoListCollection', function() {
  var todoList;

  beforeEach(function() {
    var fakeItems = [{
      task: 'get milk', 
      completed: false
    }, {
      task: 'pick up laundry',
      completed: true
    }];

    localStorage.setItem('todoItems', JSON.stringify(fakeItems));
    todoList = new TodoList();
  });

  afterEach(function() {
    localStorage.removeItem('todoItems');
  });

  describe('initialize', function() {
    it('should be a function', function() {
      expect(typeof todoList.initialize).toBe('function');
    });

    it('should retrieve data from local storage', function() {
      expect(todoList.models.length).toBeTruthy();
    });

    it('should add saved data to collection', function() {
      expect(todoList.models[0].get('task')).toBe('get milk');
      expect(todoList.models[1].get('task')).toBe('pick up laundry');
    });
  });

  describe('addTodo', function() {
    it('should be a function', function() {
      expect(typeof todoList.addTodo).toBe('function');
    });

    it('should add a model to the collection', function() {
      todoList.addTodo('take out garbage');
      expect(todoList.models[2].get('task')).toBe('take out garbage');
    });

    it('should update localStorage', function() {
      todoList.addTodo('take out garbage');
      var todo = JSON.parse(localStorage.getItem('todoItems'))[2];
      expect(todo.task).toBe('take out garbage');
    });
  });

  describe('deleteTodo', function() {
    it('should remove items from collection', function() {
      var model = todoList.models[0];
      todoList.deleteTodo(model);
      expect(todoList.models[0].get('task')).toBe('pick up laundry');
    });

    it('should remove items from local storage', function() {
      var model = todoList.models[0];
      todoList.deleteTodo(model);
      var todo = JSON.parse(localStorage.getItem('todoItems'))[0];
      expect(todo.task).toBe('pick up laundry');
    });
  });

  describe('updating todos', function() {
    it('should update localStorage data on task status change', function() {
      todoList.models[0].set('completed', true);
      var todo = JSON.parse(localStorage.getItem('todoItems'))[0];
      expect(todo.completed).toBe(true);
    });
  });
});
