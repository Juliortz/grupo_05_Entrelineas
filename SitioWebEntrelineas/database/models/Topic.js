module.exports = (sequelize, dataTypes) => {
    let alias = 'Topics';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'topics',
        timestamps: false,
    };

    const Topic = sequelize.define(alias, cols, config);

    Topic.associate = function(models) {
        Topic.belongsToMany(models.Users, {
            as: 'users',
            through: 'user_topic',
            foreingKey: 'topic_id',
            otherKey: 'user_id',
            timestamps: false,
        }),
        Topic.belongsToMany(models.Products, {
            as: 'products',
            through: 'product_topic',
            foreingKey: 'topic_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };
    return Topic;
};