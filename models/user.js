module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        }
    }, {
        classMethods: {
            associate: function (models) {
                // Associating Author with Posts
                // User.belongsTo(models.Group, {
                //     foreignKey: {
                //         allowNull: false
                //     }
                // });
                User.belongsToMany(models.Post, {
                    as: "member",
                    through: "UserPost",
                    foreignKey: "userId"
                });
            }
        }
    }, {
        timestamps: true
    });
    return User;
};