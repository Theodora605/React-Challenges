import { z } from "zod";
import { useState } from "react";
import "./FormExample.css";

interface UserData {
  firstName: string;
  lastName: string;
  age: string;
}

const inputSchema: z.ZodType<UserData> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.string(),
});

export const FormExample = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData);
    const result = inputSchema.safeParse(formEntries);

    if (result.success) {
      setSubmittedData(result.data);
    }
  };

  const [submittedData, setSubmittedData] = useState<UserData | undefined>(
    undefined
  );

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            name="firstName"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            name="lastName"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            name="age"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
      {submittedData && (
        <div>
          <h3>Request Sent to DB with below request data</h3>
          <ul>
            <li>First Name: {submittedData.firstName}</li>
            <li>Last Name: {submittedData.lastName}</li>
            <li>Age: {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
