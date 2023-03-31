import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox, Table, Input, Container, Grid } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const ToDoList = ({ landlordId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`/api/landlords/${landlordId}/todos`);
      setTodos(res.data);
    };
    getTodos();
  }, [landlordId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      title,
      description,
      category,
      priority,
      dueDate,
      completed: false,
    };
    const res = await axios.post(`/api/landlords/${landlordId}/todos`, todo);
    setTodos([...todos, res.data]);
    setTitle("");
    setDescription("");
    setCategory("");
    setPriority("");
    setDueDate(new Date());
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/landlords/${landlordId}/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleTodoCompletion = async (id) => {
    try {
      const response = await axios.put(`/api/todos/${id}`, {
        completed: true
      });
      const updatedTodo = response.data;
      setTodos(prevTodos => {
        return prevTodos.map(todo => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          } else {
            return todo;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Container textAlign="center">
       <Grid centered verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, marginTop: "100px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label><h1>To Do List</h1></label>
          <Input
            fluid
            placeholder="Enter todo title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Input
            fluid
            placeholder="Enter todo description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Input
            fluid
            placeholder="Enter todo category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Priority</label>
          <Input
            fluid
            placeholder="Enter todo priority..."
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Due Date</label>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </Form.Field>
        <Button type="submit" color="blue">
          Add
        </Button>
      </Form>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Priority</Table.HeaderCell>
            <Table.HeaderCell>Due Date</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {todos.map(todo => (
                <Table.Row key={todo.id}>
                <Table.Cell collapsing>
                    <Checkbox
                    checked={todo.completed}
                    onChange={() => handleTodoCompletion(todo.id)}
                    />
                </Table.Cell>
                <Table.Cell>{todo.title}</Table.Cell>
                <Table.Cell>{todo.description}</Table.Cell>
                <Table.Cell>{todo.category}</Table.Cell>
                <Table.Cell>{todo.priority}</Table.Cell>
                <Table.Cell>
                    {dueDate(todo.date).format("MMM DD, YYYY")}
                </Table.Cell>
                <Table.Cell collapsing textAlign="right">
                    <Button
                    icon="trash"
                    color="red"
                    onClick={() => handleDelete(todo.id)}
                    />
                </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
        </Table>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default ToDoList

