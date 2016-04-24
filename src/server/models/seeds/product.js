var Product = require('../product');
var passport = require('passport');

var seedProduct = function() {

  Product.find({}, function(err, documents) {

    if(documents.length === 0){

      var prodArry = [
        {productName: 'Recarga Máxima', productAmount: 150},
        {productName: 'Recarga Juerga', productAmount: 100},
        {productName: 'Recarga General', productAmount: 50},
        {productName: 'Recarga Misia', productAmount: 10}
      ];

      for (var i = 0; i < prodArry.length; i++) {
         var data = new Product(
          {
            name: prodArry[i].productName,
            amount: prodArry[i].productAmount,
            currency: 'Soles',
            forSale: true
          }
        );
        data.save();
      }

      console.log('Dummy products added!');
    }

  });

};

module.exports = seedProduct;
