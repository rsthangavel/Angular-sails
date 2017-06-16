/**
 * ProfileInformationController
 *
 * @description :: Server-side logic for managing Profileinformations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');

module.exports = {
	getCountries : function(req,res){
        fs.readFile('assets/flag.json', function(err,data){
         
            res.send(data);
        });
      
    }
};

