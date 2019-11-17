import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Landing extends Component {

    componentDidMount() {
        this.props.getUsersData();
    }

    render() {
        const {users} = this.props;
        const {userList = []} = users;
        return (
            <main className="list__container">
                <div className="showlist__wrapper">
                    {userList.map((item) => {
                        const {company, name, id} = item;
                        const {name: companyName} = company;
                        return (
                            <div key={id} className="card__side card__side--front">
                                <h4 className="card__heading">
                                    <span className="card__heading-span">Blogger: {name}</span>
                                </h4>
                                <div className="card__details">
                                    Company: {companyName}
                                </div>
                                <div className="card__details">
                                    <Link  to={`/posts/${id}`} className="btn-floating btn-large waves-effect waves-light red">
                                        BLOG POSTS
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return { users }; 
}

export default connect(mapStateToProps, actions)(Landing);