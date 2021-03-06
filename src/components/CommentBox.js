import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import * as actions from 'actions';

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button type="submit">Submit Comment</button>
          <button data-test="fetch-comments" type="button" onClick={this.props.fetchComments}>Fetch Comments</button>
        </div>
      </form>
    );
  };
}

export default connect(null, actions)(requireAuth(CommentBox));
