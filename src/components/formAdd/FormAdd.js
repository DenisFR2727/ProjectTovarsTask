import React,{ useState } from 'react';
import { Formik } from 'formik';

import "./formadd.css";
const FormAdd = () => {
    const [items, setItems] = useState([]); 

    const handleChange = (values, { setSubmitting, resetForm }) => {
      const newItem = {
        author: values.author,
        name: values.name,
        year: values.year,
        rating: values.rating,
      };
      setItems([...items, newItem]);

      resetForm();
      setSubmitting(false);
    };
   
    return (
        <div className='form-add'>
          <h1>Заповніть форму</h1>
          <Formik
            initialValues={{ author: '', name: '', year: '', rating: '', }}
            validate={values => {
              const errors = {};
              if (!values.author) {
                errors.author = 'заповніть дані';
              }
              if (!values.name) {
                errors.name = 'заповніть дані';
              }
              if (!values.year) {
                errors.year = 'заповніть дані';
              }
              if (!values.rating) {
                errors.rating = 'заповніть дані';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const newItem = {
                author: values.author,
                name: values.name,
                year: values.year,
                rating: values.rating,
              };
              setItems([...items, newItem]);
      
              resetForm();
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="author"
                  placeholder="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                {errors.author && touched.author && errors.author}
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <input
                  type="text"
                  name="year"
                  placeholder="year"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.year}
                />
                {errors.year && touched.year && errors.year}
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rating}
                />
                {errors.rating && touched.rating && errors.rating}
                <button type="submit" disabled={isSubmitting}>
                  new tovar
                </button>
              </form>
            )}
          </Formik>
          <ul>
            {items.map((item, index) => (
              <li className='list_new_tovar' key={index}>
                <div>Name: <p>{item.name}</p></div>
                <div>Author: <p>{item.author}</p> </div>
                <div>Year: <p>{item.year}</p></div>
                <div>Rating: <p>({item.rating})</p></div>
              </li>
            ))}
          </ul>
        </div>
      );
}
export default FormAdd;

