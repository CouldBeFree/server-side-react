import Layout from '../components/Layout';

export default ({ statusCode }) => (
    <Layout>
        {statusCode ? `Could not load user data. Status Code ${statusCode}` : `This page can't be found`}
    </Layout>
)