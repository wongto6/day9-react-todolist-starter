package org.oocl.todo_backend.model;

import jakarta.persistence.Entity;
import org.springframework.data.annotation.Id;

@Entity
public class Todo {

    @Id
    private String id;
    private String text;
    private boolean done;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
