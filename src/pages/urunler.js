import React from "react"
import {graphql, StaticQuery } from "gatsby"

import Product from "../components/product"
import Layout from "../components/layout"
import SEO from "../components/seo"
import headGallery from '../images/ucak14.jpg'


const ProductPage = () => {
    return (
  <Layout>
      <SEO title="Urunler" keywords={['makine', 'sanayii']} />
      <div className="head-color" ><img src={headGallery} alt="" className="full-width-div"></img></div>

        <h1 className="head-div space">Ürünler</h1>
        <StaticQuery query={productQuery} render={data => {
          return (
            <div>
                {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.posttype === "urun").map( ({ node }) => 
               {
        
                return (
                    <Product 
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    key={node.id}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}    
                    body={node.excerpt}             
                    
              />
              
                )}
            
                )}
            </div>
        )
        }} />

  </Layout>
    )
 }

 const productQuery =  graphql`
 query productQuery {
     allMarkdownRemark (sort:{
        fields: id,
        order: DESC
      }
      ) {
         edges {
             node {
                 id
                 frontmatter {
                     title
                     posttype
                     featuredImage{
                         childImageSharp{
                             fluid{
                                 ...GatsbyImageSharpFluid
                             }
                         }
                     }
                 }
                 fields{
                     slug
                 }
                 excerpt
             }
         }
     }
 }
 
 `


export default ProductPage