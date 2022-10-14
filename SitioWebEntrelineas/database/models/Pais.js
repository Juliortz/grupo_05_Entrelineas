module.exports = (sequelize, dataTypes) => {
    let alias = 'Paises';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'Paises',
        timestamps: false,
    };

    const Pais = sequelize.define(alias, cols, config);

    Pais.associate = function(models) {
        Pais.hasMany(models.Usuarios,{
            as: 'usuarios',
            foreingKey: 'pais_id'
        })
    };
    return Pais;
};