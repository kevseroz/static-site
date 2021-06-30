const { slugify } = require('./src/util/utilityfunctions.js');
const path = require('path');
const _ = require('lodash');



exports.onCreateNode = ({ node,  actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle =  slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singleProductTemplate = path.resolve('src/templates/single-product.js')
    const singleAlbumTemplate = path.resolve('src/templates/single-album.js')
    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            posttype
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        } 

        const products = res.data.allMarkdownRemark.edges

        products.forEach(({node}) => {
            if(node.frontmatter.posttype === 'gallery'){
            createPage({
                path: '/galeri/' + node.fields.slug,
                component: singleAlbumTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        } else if(node.frontmatter.posttype === 'urun'){
            createPage({
                path: '/urunler/' + node.fields.slug,
                component: singleProductTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
            
        }
        })
    })
}