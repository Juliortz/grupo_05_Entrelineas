module.exports = (sequelize, dataTypes) => {
    let alias = 'Country';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'countries',
        timestamps: false,
    };

    const Country = sequelize.define(alias, cols, config);

    Country.associate = function(models) {
        Country.hasMany(models.User,{
            as: 'users',
            foreingKey: 'country_id'
        })
    };
    return Country;
};