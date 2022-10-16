module.exports = (sequelize, dataTypes) => {
    let alias = 'Countries';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'Countries',
        timestamps: false,
    };

    const Country = sequelize.define(alias, cols, config);

    Country.associate = function(models) {
        Country.hasMany(models.Users,{
            as: 'users',
            foreingKey: 'country_id'
        })
    };
    return Country;
};