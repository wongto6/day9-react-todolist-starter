package org.oocl.todo_backend.controllers;

import jakarta.websocket.server.PathParam;
import org.oocl.todo_backend.model.Todo;
import org.oocl.todo_backend.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoControllers {

    private final TodoService todoService;

    public TodoControllers(final TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodoControllers() {
        return todoService.getAllTodos();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Todo createTodo(@RequestBody Todo todo) {
        return todoService.create(todo);
    }

    @PutMapping
    public Todo updateTodo(@RequestBody Todo todo) {
        return todoService.update(todo);
    }

    @DeleteMapping(params = {"id"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateTodo(@RequestParam Integer id) {
        todoService.delete(id);
    }

}
