## Contributing to Contributions Web

Thank you for your interest in contributing to our project! We welcome your help and appreciate your support.
To ensure a smooth and collaborative process, please take a moment to review this contributing guide.

## Code or Documentation Contributions

1. [Fork this repository](https://github.com/jordanopensource/contributions-web/fork).
2. Clone the forked repository to your local machine with this command:    
`git clone https://github.com/<your github username>/contributions-web.git`
3. Switch to `development` branch with this command: `git checkout development`.    
**If your contribution is a documentation, jump to step 7 below**.
4. (**_You can ignore this step if you're using docker compose_**) Create a `.env` file and copy the content of [`.env.sample`](https://github.com/jordanopensource/contributions-web/blob/development/.env.sample) file into it,
then add the value(s) of environment variable(s).
You can use the current running API URL as the value to `CONTRIBUTIONS_API_URL` variable as the following:
`CONTRIBUTIONS_API_URL=https://contributions.api.prod.josa.ngo/`

5. [Run the project locally](https://github.com/jordanopensource/contributions-web/blob/main/CONTRIBUTING.md#running-the-project-locally).
6. Check current [issues](https://github.com/jordanopensource/contributions-web/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest), 
and if you're a beginner, you can [filter issues with `good first issues` label](https://github.com/jordanopensource/contributions-web/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest+label%3A%22good+first+issue%22).    
If you decide to work on one of the issue, write a comment on the issue asking to be assigned to it.    
_Do not work on issues that you're not assigned to in order to avoid duplicate work_.
7. Create a new branch from `development` branch for the task that you want to work on:    
    `git checkout -b <prefix>/branch-title`    
      - `<prefix>`: The prefix should be one of the following:
        - `feat` for new features
        - `fix` for bug fixes
        - `task` for other general tasks
        - `docs` for documentation
      - `branch-title` should be short and concise and written in kebab-case (separate each word with '-')    
**Example**:
        ```sh
        git checkout development && git pull # pull the latest changes from development branch

        git checkout -b fix/type # create new branch
        ```

8. Write descriptive and concise commit messages    
    Follow these guidelines when writing commit messages:
    - Limit the first line of the commit message to 72 characters or less.
    - Use the imperative mood and present tense in the subject line, e.g. "Fix typo in the homepage" instead of "Fixed typo...".
    - Use the body of the commit message to provide additional context or details, _if necessary_.
      - Use bullet points in the body of the commit message to break down changes, _if necessary_.

9. Push to your branch and then make a pull request from your branch to the base `development`.

### Running the Project Locally

#### Using Docker
Make sure that [docker](https://docs.docker.com/engine/install/) is installed on your system
and then run the project locally using [docker compose](https://github.com/jordanopensource/contributions-web/blob/development/docker-compose.yaml) with this command:    
`docker compose up`.

#### Using Node:
1. Make sure [Node](https://nodejs.org/en) v16 is installed. Alternatively, you can use [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to install any node version.
2. Navigate to the project directory and run `npm i` to install the dependancies.
3. Run the project in development mode by running `npm run dev`. You can now preview the project on port 3000 by visiting http://localhost:3000/ in your browser.

## Issues and Features Requests

If you want to report a bug or submit a feature request, please use one of the [templates here](https://github.com/jordanopensource/contributions-web/issues/new/choose).
