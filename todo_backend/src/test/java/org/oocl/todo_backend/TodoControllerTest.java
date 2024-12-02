package org.oocl.todo_backend;

import org.assertj.core.api.AssertionsForClassTypes;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.oocl.todo_backend.model.Todo;
import org.oocl.todo_backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
class TodoControllerTest {

    @Autowired
    private MockMvc client;

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private JacksonTester<List<Todo>> todoJacksonTester;

    @BeforeEach
    void setup() {
        setupForReal();
    }

    private void setupForReal() {
        todoRepository.deleteAll();
        todoRepository.save(new Todo("Eat Tea", false));
        todoRepository.save(new Todo("Eat Coffee", false));
        todoRepository.save(new Todo("Eat Milk", false));
        todoRepository.save(new Todo("Eat Coco", false));
        todoRepository.save(new Todo("Eat Chicken", false));
    }

    @Test
    void should_return_todoss_when_get_all_given_todo_exist() throws Exception {
        //given
        final List<Todo> givenTodos = todoRepository.findAll();

        //when
        //then
        final String jsonResponse = client.perform(MockMvcRequestBuilders.get("/todos"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString();

        final List<Todo> employeesResult = todoJacksonTester.parseObject(jsonResponse);
        assertThat(employeesResult)
                .usingRecursiveFieldByFieldElementComparator()
                .isEqualTo(givenTodos);
    }


    @Test
    void should_create_employee_success() throws Exception {
        // Given
        todoRepository.deleteAll();
        String givenText = "Eat Noodle";
        String givenTodo = String.format(
                "{\"text\": \"%s\", \"done\": \"%s\"}", givenText, false
        );

        // When
        // Then
        client.perform(MockMvcRequestBuilders.post("/todos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(givenTodo)
                )
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNumber())
                .andExpect(MockMvcResultMatchers.jsonPath("$.text").value(givenText))
                .andExpect(MockMvcResultMatchers.jsonPath("$.done").value(false));
        List<Todo> employees = todoRepository.findAll();
        assertThat(employees).hasSize(1);
        AssertionsForClassTypes.assertThat(employees.get(0).getId()).isEqualTo(todoRepository.findAll().get((int) todoRepository.count() - 1).getId());
        AssertionsForClassTypes.assertThat(employees.get(0).getText()).isEqualTo(givenText);
        AssertionsForClassTypes.assertThat(employees.get(0).isDone()).isEqualTo(false);
    }

    @Test
    void should_update_employee_success() throws Exception {
        // Given
        Integer id = todoRepository.findAll().get(0).getId();
        String givenText = "Eat Noodle";
        String givenTodo = String.format(
                "{\"id\":\"%s\"  ,\"text\": \"%s\", \"done\": \"%s\"}", id, givenText, true
        );

        // When
        // Then
        client.perform(MockMvcRequestBuilders.put("/todos")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(givenTodo)
                )
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNumber())
                .andExpect(MockMvcResultMatchers.jsonPath("$.text").value(givenText))
                .andExpect(MockMvcResultMatchers.jsonPath("$.done").value(true));
        List<Todo> employees = todoRepository.findAll();
        AssertionsForClassTypes.assertThat(employees.get(0).getText()).isEqualTo(givenText);
        AssertionsForClassTypes.assertThat(employees.get(0).isDone()).isEqualTo(true);
    }

    @Test
    void should_remove_employee_success() throws Exception {
        // Given
        int givenId = todoRepository.findAll().get(0).getId();
        List<Todo> todoBefore = todoRepository.findAll();

        // When
        // Then
        client.perform(MockMvcRequestBuilders.delete("/todos?id=" + givenId))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
        List<Todo> employees = todoRepository.findAll();
        assertThat(employees).hasSize(todoBefore.size() - 1);
        AssertionsForClassTypes.assertThat(employees.get(0).getId()).isEqualTo(todoBefore.get(1).getId());
        AssertionsForClassTypes.assertThat(employees.get(1).getId()).isEqualTo(todoBefore.get(2).getId());
        AssertionsForClassTypes.assertThat(employees.get(2).getId()).isEqualTo(todoBefore.get(3).getId());
        AssertionsForClassTypes.assertThat(employees.get(3).getId()).isEqualTo(todoBefore.get(4).getId());
    }
}