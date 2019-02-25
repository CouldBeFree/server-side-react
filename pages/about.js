import Link from 'next/link';
import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/couldbefree');
        const data = await res.json();

        return {
            user: data
        }
    }

    render () {
        const { user } = this.props;

        return (
            <Layout title="About">
                <img src={user.avatar_url} alt="name" height="200px"/>
                <p>I am javaScript programmer</p>
            </Layout>
        )
    }
}