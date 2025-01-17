import { useState } from "react";
import { z } from "zod";
import "./TodoList.css";

const inputSchema = z.object({
  input: z.string(),
});

export const TodoList = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData);

    e.preventDefault();

    const result = inputSchema.safeParse(formEntries);

    if (result.success) {
      result.data.input;
      const todoItem = result.data.input;

      if (todoItems.has(todoItem)) {
        setIsValid(false);
        return;
      }

      const newItems = new Set<string>(todoItems);
      newItems.add(todoItem);
      setTodoItems(newItems);
      setIsValid(true);
    }
  };

  const [isValid, setIsValid] = useState(true);
  const [todoItems, setTodoItems] = useState(new Set<string>());

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group mb-3">
          <input
            type="text"
            name="input"
            autoComplete="off"
            className={isValid ? "form-control" : "form-control is-invalid  "}
            placeholder="Enter To-do item"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Submit
          </button>
          {!isValid && (
            <div className="invalid-feedback">Item is already in the list.</div>
          )}
        </div>
        <ul className="list-group list-group-flush">
          {Array.from(todoItems).map((item, i) => (
            <li key={`item-${i}`} className="list-group-item">
              <button
                key={`but-${i}`}
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  const newItems = new Set<string>(todoItems);
                  newItems.delete(item);
                  setTodoItems(newItems);
                }}
              ></button>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};
