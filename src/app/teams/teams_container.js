import React from 'react';
import withTeams from '../graphql/with_teams';
import Team from './team';

class TeamsContainer extends React.Component {
  state = {
    show: false
  };

  handleClick = () => this.setState(prevState => ({ show: !prevState.show }));

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.show &&
          this.props.teams &&
          this.props.teams.map(team => <Team id={team.id} key={team.id} />)}
      </div>
    );
  }
}

export default withTeams(TeamsContainer);
