import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: "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",
});

const fetchIssues = async () => {
  const owner = "angular";
  const repo = "angular-cli";

  try {
    const response = await octokit.request(
      "GET /repos/angular/angular-cli/issues",
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    const issues = response.data;
    return issues;
  } catch (error) {
    console.error("GitHub API 요청 오류:", error.message);
    return null;
  }
};

export default fetchIssues;
