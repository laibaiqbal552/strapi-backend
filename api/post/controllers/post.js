'use strict';

const { default: createStrapi } = require('strapi');
// const [parseMultipartData, sanitizeEntity] = require('strapi-utils')


/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity
        if(ctx.is(multipart)){
            const {data, files} = parseMultipartData(ctx)
            entity = await strapi.services.post.create({...data, likes: 0}, {file})
        }
        else {
            entity = await strapi.services.post.create({...ctx.request.body, likes: 0})
        }
        return sanitizeEntity(entity, {model: strapi.models.post})
    }

};
