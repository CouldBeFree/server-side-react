import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from '../pages/_error';

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/reedbarger');
        const data = await res.json();
        const statusCode = res.status > 200 ? res.status : null;

        return {
            user: data,
            statusCode
        }
    }

    render () {
        const { user, statusCode } = this.props;

        if(statusCode) {
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="name" height="200px"/>
                <p>I am javaScript programmer</p>
            </Layout>
        )
    }
}