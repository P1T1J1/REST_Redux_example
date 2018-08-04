import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import createPosts from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger': ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel </Link>
      </form>
    )
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title must be typed"
  }

  if (values.title.length < 3 ) {
    errors.title = "your title should have at least 3 characters"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPosts })(PostsNew)
);
