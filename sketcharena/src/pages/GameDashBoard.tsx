const GameDashBoard = () => {
  return (
    <div>
      <h1>Invite Link</h1>
      <p>
        {" "}
        {localStorage.getItem("invite-link")
          ? localStorage.getItem("invite-link")
          : "No invite link found"}
      </p>
    </div>
  );
};

export default GameDashBoard;
