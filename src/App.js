import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern Not Matched"),
});

function App() {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        alert("The Required feild is validated");
      },
    });

  return (
    <div className="App">
      <h2>Register Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name*</Form.Label>

          <Form.Control
            id="name"
            name="name"
            type="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="eg. Sanjay"
          />
          <br />
          <div className="required">
            {" "}
            {touched.name && errors.name ? errors.name : ""}{" "}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address*</Form.Label>
          <Form.Control
            id="email"
            name="email"
            //  type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="eg. xyz@gmail.com"
          />
          <br />
          <div className="required">
            {touched.name && errors.email ? errors.email : ""}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone Number" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
