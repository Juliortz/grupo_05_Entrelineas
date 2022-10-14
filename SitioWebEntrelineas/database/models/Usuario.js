module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: dataTypes.STRING,
        last_name: dataTypes.STRING,
        user_name: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,

    };
    let config = {
        tableName: 'Usuarios',
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Paises,{
            as: 'paises',
            foreingKey: 'pais_id'
        }),
        Usuario.belongsToMany(models.Productos, {
            as: 'productos',
            through: 'usuario_producto',
            foreingKey: 'usuario_id',
            otherKey: 'producto_id',
            timestamps: false,
        }),
        Usuario.belongsToMany(models.Temas, {
            as: 'temas',
            through: 'usuario_tema',
            foreingKey: 'usuario_id',
            otherKey: 'tema_id',
            timestamps: false,
        })
    };
    return Usuario;

};