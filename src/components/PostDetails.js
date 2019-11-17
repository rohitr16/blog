import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCommentsClick = this.handleCommentsClick.bind(this);
        this.hideComments = this.hideComments.bind(this);
        this.state = {
            showComments: false
        }
    }

    componentDidMount() {
        const {getPostDetails, match} = this.props;
        const {params} = match;
        getPostDetails(params.postId);
    }

    handleDelete(postId, userId) {
        const {history, deletePost} = this.props;
        deletePost(postId, userId, history);
    }

    handleCommentsClick(postId) {
        const {getPostComments, postComments = {}} = this.props;
        if (Object.keys(postComments).length === 0){
            getPostComments(postId);
        } 
        this.setState({
            showComments: true
        }); 
    }

    hideComments() {
        this.setState({
            showComments: false
        })
    }

    render() {
        const {postDetails = {}, postComments} = this.props;
        const {body, id: postId, title, userId} = postDetails;
        return (
            <div className="list__container">
                <div  to={`/posts/${userId}`} onClick={ () => {this.handleDelete(postId, userId)} }>
                    <span className="delete_button"> Delete </span>
                </div>
                <div className="details__wrapper">
                    <div className="inner_wrapper--details">
                        <h3 className="detail_title"> {title} </h3>
                        <p className="desciption"> {body} </p>
                    </div>
                </div>
                <a className="comments_link" onClick={ () => {this.handleCommentsClick(postId)}}>
                    Comments
                </a>
                <button className="hide_comments" onClick={this.hideComments}>
                    Hide Comments
                </button>
                {this.state.showComments && <ul className="comments_list">
                    {postComments.map((item) => {
                        const {body} = item;
                        return (
                           <li className="comments_list-item">
                               {body}
                           </li> 
                        );
                    })}
                </ul>}
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    const {postDetails, postComments} = posts;
    return { postDetails, postComments }; 
}

export default connect(mapStateToProps, actions)(PostDetails);
