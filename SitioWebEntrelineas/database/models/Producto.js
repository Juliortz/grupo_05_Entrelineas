module.exports = (sequelize, dataTypes) => {
    let alias = 'Productos';
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
        presentation: dataTypes.STRING

    };
    let config = {
        tableName: 'Productos',
        timestamps: false,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsToMany(models.Usuarios, {
            as: 'usuarios',
            through: 'usuario_producto',
            foreingKey: 'producto_id',
            otherKey: 'usuario_id',
            timestamps: false,
        }),
        Producto.belongsToMany(models.Temas, {
            as: 'temas',
            through: 'producto_tema',
            foreingKey: 'producto_id',
            otherKey: 'tema_id',
            timestamps: false,
        }),
        Producto.belongsToMany(models.Categorias, {
            as: 'categorias',
            through: 'producto_categoria',
            foreingKey: 'producto_id',
            otherKey: 'categoria_id',
            timestamps: false,
        })
    };
    return Producto;
};