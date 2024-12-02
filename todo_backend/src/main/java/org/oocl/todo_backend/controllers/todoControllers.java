package org.oocl.todo_backend.controllers;

import org.oocl.todo_backend.model.Todo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class todoControllers {

    @GetMapping(path = "/")
    public List<Todo> getAllTodoControllers() {
        return null;
    }

    @GetMapping(path = "/hello")
    public String getHelloWorld() {
        return "Hello World";
    }

}
