//ORM (object Relational mapper)
//SELECT * FROM users WHERE user = "eduardo"
//CREATE TABLE USER (firstname VARCHAR(255))
const { Sequelize, DataTypes } = require("sequelize");

/*cree una nueva base de datos se llama
user_seq y la tabla se llamara  users */

const sequelize = new Sequelize("user_seq", "root", "admin1234", {
  host: "localhost",
  dialect: "mysql",
});
//model
const User = sequelize.define(
  "User",
  {
    //define attributes
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "users",
  }
);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("All the models were created in mysql");
  })
  .catch((err) => console.log(err));

async function createUser() {
  //INSERT INTO (First...) VALUES()
  try {
    const newUser = await User.create({
      firstname: "John",
      lastName: "Doe",
      email: "John_doe@gmail.com",
    });
    console.log("User was created succesfully", newUser.toJSON());
  } catch (error) {
    console.log("ERROR al crear un usuario", error);
  }
}

async function updateUser(userId, newEmail) {
  try {
    const userUpdated = await User.update(
      { email: newEmail },
      {
        where: { id: userId },
      }
    );

    if (userUpdated[0] > 0) {
      console.log("user was updated successfully");
    } else {
      console.log("user not found");
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(userId) {
  try {
    const deleted = await User.destroy({
      where: { id: userId },
    });
    if (deleted) {
      console.log("User deleted");
    } else {
      console.log("user not found");
    }
  } catch (err) {
    console.error(err);
  }
}

async function findUserByEmail(email) {
  try {
    const user = await User.findOne({
      where: { email },
    });
    if (user) {
      console.log("User found", user);
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error(error);
  }
}

//createUser();
// updateUser(1,"john@gmail.com")
// deleteUser(1)
findUserByEmail("llaiisd@gmail.com");
