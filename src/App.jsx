import "./App.css";
import * as Yup from "yup";
import {
  Formik,
  Field,
  ErrorMessage,
  // FormikValues,
  // FormikHelpers,
} from "formik";
import Alert from "./component/Alert";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  queryType: Yup.string().required("Please select a query type"),
  message: Yup.string().required("This field is required"),
  consent: Yup.string().required(
    "To submit this form, please consent to being contacted"
  ),
});

function App() {
  const [complete, setComplete] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      setComplete(true)
    }, 1000);
  };
  return (
    <main>
      {complete && <Alert />}
      <div className="form-card">
        <h1>Contact Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, handleSubmit }) => (
            <form className="form" onSubmit={handleSubmit}>
              {/* Start of name field */}
              <div className="row">
                <div className="field">
                  <label htmlFor="firstName" aria-required>
                    First Name <span>*</span>
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    className={errors.firstName ? "input-err" : ""}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastName" aria-required>
                    Last Name <span>*</span>
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className={errors.lastName ? "input-err" : ""}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              {/* End of name field */}

              {/* Start of email field */}
              <div className="field">
                <label htmlFor="email" aria-required>
                  Email Address <span>*</span>
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className={errors.email ? "input-err" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              {/* End of email field */}

              {/* Start of query type field */}
              <div className="field">
                <label htmlFor="queryType" aria-required>
                  Query Type <span>*</span>
                </label>
                <div className="row">
                  <div className="queryOptions">
                    <Field
                      type="radio"
                      name="queryType"
                      id="general"
                      value="General"
                    />
                    <label htmlFor="general">General Enquiry</label>
                  </div>
                  <div className="queryOptions">
                    <Field
                      type="radio"
                      name="queryType"
                      id="support"
                      value="Support"
                    />
                    <label htmlFor="support">Support Enquiry</label>
                  </div>
                </div>
                <ErrorMessage
                  name="queryType"
                  component="div"
                  className="error"
                />
              </div>
              {/* End of query type field */}

              {/* Start of message */}
              <div className="field">
                <label htmlFor="message" aria-required>
                  Message <span>*</span>
                </label>
                <Field
                  component="textarea"
                  name="message"
                  id="message"
                  className={errors.message ? "input-err" : ""}
                ></Field>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
              {/* End of message */}

              {/* Start of consent checkbox */}
              <div className="field">
                <div className="row">
                  <Field
                    type="checkbox"
                    name="consent"
                    id="consent"
                    className={errors.consent ? "input-err" : ""}
                  />
                  <label htmlFor="consent" aria-required>
                    I consent to being con tacted by the team <span>*</span>
                  </label>
                </div>
                <ErrorMessage
                  name="consent"
                  component="div"
                  className="error"
                />
              </div>
              {/* End of consent checkbox */}

              <button disabled={isSubmitting} type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default App;
