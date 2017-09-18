import { gql, graphql } from 'react-apollo';
import { getTeam } from './queries';

const withTeam = WrappedComponent =>
  graphql(getTeam, {
    options: props => ({
      variables: {
        id: props.id
      },
      fetchPolicy: 'cache-first'
    }),
    props: ({ data: { team } }) => ({
      team
    })
  })(WrappedComponent);

export default withTeam;
