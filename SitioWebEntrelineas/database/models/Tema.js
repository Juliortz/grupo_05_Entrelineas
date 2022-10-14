module.exports = (sequelize, dataTypes) => {
    let alias = 'Temas';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'Temas',
        timestamps: false,
    };

    const Tema = sequelize.define(alias, cols, config);

    Tema.associate = function(models) {
        Tema.belongsToMany(models.Usuarios, {
            as: 'usuarios',
            through: 'usuario_tema',
            foreingKey: 'tema_id',
            otherKey: 'usuario_id',
            timestamps: false,
        }),
        Tema.belongsToMany(models.Productos, {
            as: 'productos',
            through: 'producto_tema',
            foreingKey: 'tema_id',
            otherKey: 'producto_id',
            timestamps: false,
        })
    };
    return Tema;
};