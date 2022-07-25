class Github {
  constructor() {
    this.client_id = "a1884273874b07e06ff3";
    this.client_secrets = "289b410e11d4572e02cb013d705dee32ba8ce952";
    this.repo_count = 4;
    this.repo_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secrets}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
