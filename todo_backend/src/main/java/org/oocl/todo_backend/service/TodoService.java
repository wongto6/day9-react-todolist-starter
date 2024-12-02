package org.oocl.todo_backend.service;

import org.oocl.todo_backend.model.Todo;
import org.oocl.todo_backend.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo create(Todo todo){
        return todoRepository.save(todo);
    }

    public Todo update(Todo todo){
        return todoRepository.save(todo);
    }

    public void delete(Integer id){
        todoRepository.deleteById(id);
    }

}
