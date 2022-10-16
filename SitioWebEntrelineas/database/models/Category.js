module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'Categories',
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.belongsToMany(models.Products, {
            as: 'products',
            through: 'product_category',
            foreingKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };
    return Category;
};