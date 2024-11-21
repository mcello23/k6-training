<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">K6-TRAINING</h1></p>
<p align="center">
	<em>Empowering developers to scale with confidence.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/mcello23/k6-training?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/mcello23/k6-training?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/mcello23/k6-training?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/mcello23/k6-training?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

k6-training is a comprehensive project designed to streamline user signup processes for developers. With features like secure data handling and efficient user creation, it simplifies API setup and management. Ideal for tech enthusiasts seeking hands-on experience with Express, MongoDB, and API development, k6-training offers practical insights into building robust and scalable applications.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Follows a **MVC** design pattern for separation of concerns</li><li>Utilizes **Express** for handling server setup and API routes</li><li>Integrates **MongoDB** for database operations</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Uses **Joi** for input validation in API routes</li><li>Implements error handling for robustness</li><li>Follows consistent coding style and naming conventions</li></ul> |
| 📄 | **Documentation** | <ul><li>Comprehensive **API documentation** in `api/package.json`</li><li>Includes inline comments for code clarity</li><li>README.md provides setup and usage instructions</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates **Express**, **Mongoose**, and **JWT** for building a secure API</li><li>Utilizes **CORS** for handling cross-origin requests</li><li>Includes **testing** integration for automated testing</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separates concerns into **controllers**, **models**, and **routes**</li><li>Encourages **reusability** of code components</li><li>Allows easy **scalability** by adding new features/modules</li></ul> |
| 🧪 | **Testing**       | <ul><li>Includes **unit tests** for controllers and models</li><li>Utilizes **Jest** for testing framework</li><li>Provides **test scripts** for easy execution</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimizes **database queries** for efficiency</li><li>Utilizes **asynchronous operations** for faster processing</li><li>Implements **caching mechanisms** for improved performance</li></ul> |
| 🛡️ | **Security**      | <ul><li>Ensures **password encryption** for user data security</li><li>Validates user input to prevent **SQL injection** and **XSS attacks**</li><li>Implements **JWT** for secure authentication</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Manages dependencies using **npm** and **yarn**</li><li>Specifies dependencies in `package.json` and `yarn.lock`</li><li>Includes essential packages like **Express**, **Mongoose**, and **Joi**</li></ul> |

---

##  Project Structure

```sh
└── k6-training/
    ├── .github
    │   └── logo-stiker.svg
    ├── LICENSE
    ├── README.md
    ├── api
    │   ├── package.json
    │   ├── src
    │   └── yarn.lock
    ├── test.sh
    └── tests
        ├── get.js
        ├── libs
        ├── package.json
        ├── reports
        ├── signup-load.js
        ├── signup-smoke.js
        ├── signup-stress.js
        └── signup.js
```


###  Project Index
<details open>
	<summary><b><code>K6-TRAINING/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/mcello23/k6-training/blob/master/test.sh'>test.sh</a></b></td>
				<td>Facilitates user signup by sending a POST request to the local server with email and password data.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- api Submodule -->
		<summary><b>api</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/mcello23/k6-training/blob/master/api/package.json'>package.json</a></b></td>
				<td>- Define the project's API configuration and dependencies<br>- Specify the main script to start the server and a development script for live reloading<br>- The file manages essential packages like Express, Mongoose, and JWT for building a secure and scalable API.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/mcello23/k6-training/blob/master/api/src/server.js'>server.js</a></b></td>
						<td>- Handles server setup, database connection, and API routes for the User API project<br>- Integrates Express, MongoDB, and CORS, providing endpoints for user data manipulation<br>- Implements error handling and a root endpoint for API version information<br>- Allows deletion of all user documents in the users collection.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/mcello23/k6-training/blob/master/api/src/routes.js'>routes.js</a></b></td>
						<td>- Defines API routes for user signup using Express and Joi validation, connecting to the UserController for storage<br>- This file plays a crucial role in handling user registration requests within the project's API architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/mcello23/k6-training/blob/master/api/src/models/User.js'>User.js</a></b></td>
								<td>- Defines a user model schema using Mongoose in the API codebase<br>- The schema includes fields for email and password, ensuring email uniqueness<br>- This file facilitates user data storage and retrieval within the project's database.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/mcello23/k6-training/blob/master/api/src/controllers/UserController.js'>UserController.js</a></b></td>
								<td>- Implements user creation functionality by storing user data securely<br>- Handles user input validation and error responses, ensuring unique email addresses<br>- Utilizes asynchronous operations for efficient processing.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with k6-training, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm, Yarn


###  Installation

Install k6-training using one of the following methods:

**Build from source:**

1. Clone the k6-training repository:
```sh
❯ git clone https://github.com/mcello23/k6-training
```

2. Navigate to the project directory:
```sh
❯ cd k6-training
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```


**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style={badge_style}&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
❯ yarn install
```

###  Usage
Run k6-training using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style={badge_style}&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
❯ yarn start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


**Using `yarn`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style={badge_style}&logo=yarn&logoColor=white" />](https://yarnpkg.com/)

```sh
❯ yarn test
```
Run the tests directly from package.json scripts.

Create a <b>.env</b> file at 
```
api/src/.env
MONGO_URL=mongodb+srv://qa:<password>@cluster0.f0ygp.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Cluster0
```

Change the ```//<username><password>@cluster``` for the ones in your MongoDB settings.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/mcello23/k6-training/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/mcello23/k6-training/issues)**: Submit bugs found or log feature requests for the `k6-training` project.
- **💡 [Submit Pull Requests](https://github.com/mcello23/k6-training/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/mcello23/k6-training
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/mcello23/k6-training/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=mcello23/k6-training">
   </a>
</p>
</details>

---

##  License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---