const TeamList = (props) => {
  const teams = props.teams;
  return (
    <div className="team-list">
      {teams.map((team) => (
        <div className="team-info" key={team.id}>
          <h2>Team name: {team.name}</h2>
          <h2>Players: {team.players}</h2>
          <h2>Coach: {team.coach}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
