import React, {Component} from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import postComment from '../../actions/postComment';
import PostCommentUI from '../../components/PostCommentUI';

class PostComment extends Component {
  constructor (props) {
    super (props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const newText = e.target.value;
    this.setState({
      input: newText 
    });
  }
  handleSubmit(){
    this.setState({
      input: ''
    });
  }
  render() {

    return (
      <div>
        <PostCommentUI 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value = {this.state.input}
        />
      </div>
    );
  }
}
PostComment.propTypes = {
  article: PT.array.isRequired,
  postComment: PT.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postComment: (article_id, comment) => {
    dispatch(postComment(article_id, comment));
  }
});
export default connect(null, mapDispatchToProps)(PostComment);