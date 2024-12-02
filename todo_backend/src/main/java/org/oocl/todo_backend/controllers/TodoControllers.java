package org.oocl.todo_backend.controllers;

import org.oocl.todo_backend.model.Todo;
import org.oocl.todo_backend.service.TodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoControllers {

    private final TodoService todoService;

    public TodoControllers(final TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(path = "/")
    public List<Todo> getAllTodoControllers() {
        return todoService.getAllTodos();
    }

}