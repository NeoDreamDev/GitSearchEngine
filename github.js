class GitHub {
  constructor() {
    this.client_id = "c9ee615f8b9e84e28805";
    this.client_secret = "5bbd65fef09f875454931da73dd07f089049c33b";
    this.repos_count = 7;
    this.repos_sort = "created: asc";
  }

  // GET USER METHOD
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // profile: profile is the same
      profile,
      repos,
    };
  }
}
