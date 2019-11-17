import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import {limit} from '../config';

class UserPosts extends Component {

    constructor(props) {
        super(props);

        this.loadMorePosts = this.loadMorePosts.bind(this);
    }

    componentDidMount() {
        const {getPosts, getUserData, match, userPosts} = this.props;
        const {params} = match;
        if (userPosts.length === 0) {
            getPosts(params.userId);
        }
        getUserData(params.userId);
    }

    loadMorePosts() {
        const {getPosts, match, userPosts = []} = this.props;
        const {params} = match;
        getPosts(params.userId, userPosts.length, limit);
    }

    render() {
        const {userPosts = [], userData = {}} = this.props;
        const {name} = userData;
        return (
            <div>
                <h4 className="card__heading">
                    <span className="card__heading-span">Blogger: {name}</span>
                </h4>
                <div className="posts__wrapper">
                    
                    {userPosts.map((item) => {
                        const {title, id} = item;
                        return (
                            <div key={id} className="post_card__side card__side--front">                
                                <div className="card__details">
                                    <Link  to={`/postDetails/${id}`} className="btn-floating btn-large waves-effect waves-light red">
                                        {title}
                                    </Link>
                                </div>
                            </div>  
                        )
                    })}
                    <button className="show__more" onClick={this.loadMorePosts}>
                        Show More
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts,  users}) => {
    const {userPosts} = posts;
    const {userData} = users;
    return { userPosts, userData}; 
}

export default connect(mapStateToProps, actions)(UserPosts);
