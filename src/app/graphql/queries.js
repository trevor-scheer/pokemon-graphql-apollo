import gql from 'graphql-tag';

const pokemon = gql`
  fragment Pokemon on pokemon {
    id
    number
    name
    classification
    types
    resistances
    weaknesses
    maxHP
    image
  }
`;

const team = gql`
  fragment Team on team {
    id
    name
    image
    pokemon {
      ...Pokemon
    }
  }
  ${pokemon}
`;

const getPokemon = gql`
  query getPokemon($name: String) {
    pokemon(name: $name) {
      ...Pokemon
    }
  }
  ${pokemon}
`;

const getTeam = gql`
  query getTeam($id: ID!) {
    team(id: $id) {
      ...Team,
    }
  }
  ${team}
`;

const getTeams = gql`
  query getTeams {
    teams {
      ...Team
    }
  }
  ${team}
`;

export { getPokemon, getTeam, getTeams };
