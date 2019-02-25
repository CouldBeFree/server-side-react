import Layout from '../components/Layout';
import {withRouter} from 'next/router'

const Post = ({router}) => (
    <Layout title={router.query.title}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda beatae, dolores dolorum earum
            eos fugiat laboriosam magnam natus nesciunt praesentium, saepe sapiente tempora ullam, veniam veritatis? Aliquam, odio!
        </p>
    </Layout>
);

export default withRouter(Post);