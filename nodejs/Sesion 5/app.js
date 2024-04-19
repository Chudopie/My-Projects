const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize('users_seq', 'root', 'PugNegro999', {
    host: 'localhost',
    dialect: 'mysql'
});

//Model

const User = sequelize.define(
    'User', {
    //define attributes
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    lastName: {
        type: DataTypes.STRING
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, 
{
    tableName: "users"
}
);

sequelize.sync({alter:true}).then(()=> {
    console.log("Todas las tablas fueron creadas")
})
.catch ((err)=> {
    console.log("Error", err)
})

async function createUser() {
    //Insert INTO (first...) VALUE ....
    try {
        const newUser = await User.create({
            firstName: "John",
            lastName:"Deer",
            email:"john_deer@gmail.com"
        })

        console.log("User was created successfully", newUser.toJSON())
    }
    catch(error) {
        console.error("Error al conectarse", error)
    }
}

async function updateUser(userId, newEmail) {
    try {
        const userUpdated = await User.update({email:newEmail}, {
            where: {id: userId }
        })
        if(userUpdated[0] > 0) {
            console.log("User was updated successfully")
        } else {
            console.log("User not found")
        }
    }
    catch (error) {
        console.log("Error", error)
    }
}


async function deleteUser(userId) {
    try {
        const deleted = await User.destroy({
            where: {id:userId}
        })
        if(deleted) {
            console.log("User deleted")
        } else {
            console.log("User not found")
        }
    }
    catch (err) {
        console.err("Error", err)
    }
}

async function findUserByEmail(email) {
    try {
        const user = await User.findOne({
            where:{email}
        })
        if(user) {
            console.log("User found", user.toJSON())
        } else {
            console.log("User not found")
        }
    }
    catch (err){
        console.error("Erro", err)
    }
}

//Codigos para crear, cambiar o borrar usuarios, contraseñas, etc.

//createUser()
//updateUser(1, "john@gmail.com")
//deleteUser(1)
//findUserByEmail("john_deer@gmail.com")

// class User extends Model {} // Es una entidad 

// User.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING
// }, {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users'
// })