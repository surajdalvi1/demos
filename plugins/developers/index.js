/*!
 * developers
 */

"use strict";

/*!
 * Module dependencies
 */
var contentstack =  require('contentstack-express');

module.exports = function Developers() {
    

    Developers.templateExtends = function(engine) {
    };

    Developers.serverExtends = function(app) {
        app.get('/test',function(req, res, next){
            try{
                res.set({
                    'content-disposition': 'inline; filename=owl%20pic.jpg',
                    'name':'testing',
                    'last':'ravan',
                    'content-name':'image/gif'
                })
               res.send("Hello User Demo")

            } catch(err) {
                next(err);
            }

        });

    };

};