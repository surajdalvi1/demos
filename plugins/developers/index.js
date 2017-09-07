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
                    'content-disposition': 'inline;  filename=sample-image.jpg',
                    'name':'testing'
                })
               res.send("Hello")

            } catch(err) {
                next(err);
            }

        });

    };

};