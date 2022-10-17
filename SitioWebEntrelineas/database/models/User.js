module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
        user_name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        country_id: dataTypes.INTEGER,
        topic_id: dataTypes.INTEGER,
        avatar: dataTypes.TEXT
    };
    let config = {
        tableName: 'users',
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Countries,{
            as: 'countries',
            foreingKey: 'country_id'
        }),
        User.belongsToMany(models.Products, {
            as: 'products',
            through: 'user_product',
            foreingKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false,
        }),
        User.belongsToMany(models.Topics, {
            as: 'topics',
            through: 'user_topic',
            foreingKey: 'user_id',
            otherKey: 'topic_id',
            timestamps: false,
        })
    };
    return User;

};