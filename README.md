
<<<<<<< HEAD
=======
<h1 align="left">
    <img src=".github/logo-stiker.svg" width="250px">
</h1>

# User API

## 🔖 Functional Requirements

### Registration

- [X] Should return the ID when registering a new user
- [X] Should return 201 when registering a new user
- [X] Should return 400 when trying to register without email and password
- [X] Should return 400 if the email is duplicated

| Fields   | Description                          | Type     | Required    |
| :------- | :----------------------------------- | :------- | :---------- |
| email    | Unique user identifier               | email    | yes         |
| password | User password                        | text     | yes         |

## 🔖 Non-Functional Requirements

### Registration

- [ ] Successful registration should occur within 2 seconds
- [ ] Unsuccessful registration should occur within 2 seconds
- [ ] Should be able to register up to 100 users simultaneously
- [ ] The error margin for registration should be at least 1%

## 🚀 Technologies

- [Node.js] - development platform
- [Express] - framework where the API was built
- [MongoDB] - Database (Non-relational)
- [k6] - tool for load, performance, and stress testing

## 👨🏻‍💻 How to Run the Project

[Node.js](https://nodejs.org/) v20 or later is required to run the project.

Run the following commands to install project dependencies:

```sh
cd curso-k6-basico/api
yarn
```

## 💾 MongoDB setup

Go to MongoDB and create a account, add a Organization > Project > Build a Database.

Choose AWS DB creation

Connect Cluster > Node.js

In the same screen, add the url provided, with the username and password you created, into the file api/src/.env as it is.

With ```yarn dev``` the API should be up and running.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This repo is inspired in the course of Fernando Papito with some modifications.
>>>>>>> f8e343d (updating readme)
