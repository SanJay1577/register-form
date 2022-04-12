import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

//validating the field useing yup validation

const formValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern Not Matched"),
  phone: yup.number().min(10, "Invalid Phone Number"),
  country: yup.string(),
  city: yup.string(),
  state: yup.string(),
  message: yup.string(),
});

function App() {
  //using formik validating the erros and handles and passing the value on submit
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        state: "",
        message: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        prompt(`The Required feild is validated 
               name: ${values.name} 
                email:${values.email}
                phone:${values.phone}
                country:${values.country}
                city:${values.city}
                state:${values.state}
                message:${values.message}`);
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
          {touched.name && errors.name ? (
            <div className="required">{errors.name}</div>
          ) : (
            ""
          )}
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
          {touched.email && errors.email ? (
            <div className="required">{errors.email}</div>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            type="tel"
            placeholder="Enter Phone Number"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            id="message"
            name="message"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
