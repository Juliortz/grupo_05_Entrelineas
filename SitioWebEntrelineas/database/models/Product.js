module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: dataTypes.STRING,
        author: dataTypes.STRING,
        synopsis: dataTypes.TEXT,
        price: dataTypes.DECIMAL,
        edition: dataTypes.INTERGER,
        pages: dataTypes.INTERGER,
        language: dataTypes.STRING,
        category_id: dataTypes.INTERGER,
        topic_id: dataTypes.INTERGER,
        presentation: dataTypes.STRING,
        image: dataTypes.TEXT
    };
    let config = {
        tableName: 'Products',
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsToMany(models.Users, {
            as: 'users',
            through: 'user_product',
            foreingKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false,
        }),
        Product.belongsToMany(models.Topics, {
            as: 'topics',
            through: 'product_topic',
            foreingKey: 'product_id',
            otherKey: 'topic_id',
            timestamps: false,
        }),
        Product.belongsToMany(models.Categories, {
            as: 'categories',
            through: 'product_category',
            foreingKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false,
        })
    };
    return Product;
};