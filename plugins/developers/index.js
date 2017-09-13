/*!
 * developers
 */

"use strict";

/*!
 * Module dependencies
 */
var contentstack =  require('contentstack-express');
var path =  require('path');
console.log(contentstack.config.get('path').theme);
module.exports = function Developers() {
    

    Developers.templateExtends = function(engine) {
    };

    Developers.serverExtends = function(app) {
        app.get('/test',function(req, res, next){
            try{
                res.setHeader('content-disposition','inline; filename=logo.png')
                res.setHeader('content-name','image/jpg')
                res.setHeader('last','sita')
                res.sendFile(path.join(contentstack.config.get('path').theme,'public','images','logo-company.png'))
                /*res.set({
                    'content-disposition': 'inline; filename=owl%20pic.jpg',
                    'name':'testing',
                    'last':'ravan',
                    'content-name':'image/gif'
                })
               res.send("Hello User Demo")*/

            } catch(err) {
                next(err);
            }

        });

    };

};