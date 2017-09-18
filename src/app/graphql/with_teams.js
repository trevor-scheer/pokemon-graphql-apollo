import { gql, graphql } from 'react-apollo';
import { getTeams } from './queries';

const withTeams = WrappedComponent =>
  graphql(getTeams, {
    props: ({ data: { teams } }) => ({
      teams
    })
  })(WrappedComponent);

export default withTeams;
