module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorias';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'Categorias',
        timestamps: false,
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models){
        Categoria.belongsToMany(models.Productos, {
            as: 'productos',
            through: 'producto_categoria',
            foreingKey: 'categoria_id',
            otherKey: 'producto_id',
            timestamps: false,
        })
    };
    return Categoria;
};