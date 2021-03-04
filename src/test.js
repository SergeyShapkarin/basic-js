function createDreamTeam(members) {
    if (members) {
      members.forEach((item) => item.isString()? console.log(1) : console.log(2))
    }
  };

  createDreamTeam([Mamba, Mymra, 123]);
  