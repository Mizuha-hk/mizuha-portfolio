import axios from "axios";

export async function GetGitHubProfile(username: string) {
    const url = `https://api.github.com/users/${username}`;
    const result = await axios.get<GithubUser>(url);
    return result;
}