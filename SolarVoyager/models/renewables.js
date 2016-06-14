var mongoose = require('mongoose');

var renewablesSchema = mongoose.Schema({
    "Year": String,
    "Solar": String,
    "Geothermal": String,
    "OtherBiomass": String,
    "WindPower": String,
    "LiquidBiofuels": String,
    "WoodBiomass": String,
    "Hydropower": String
});

module.exports = mongoose.model('prog272_nielsen_renewables', renewablesSchema);
