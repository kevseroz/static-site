import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const  SingleProduct = ({ data }) => {
    const product = data.markdownRemark.frontmatter
    return (
       <Layout>
           <SEO title={product.title} />
           <div className="single-album-head-div">
               <div className="single-head-color">
               <Img fluid={product.featuredImage.childImageSharp.fluid} className="single-album-head" />
               </div>
           </div>
           <h1 className="single-album-title">{product.title}</h1>
           <div className="text-config" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
       </Layout>
    )
}

export const productQuery = graphql`
    query productBySlug($slug: String){
        markdownRemark(fields: { slug: { eq: $slug}}
            ) {
            id
            html
            frontmatter{
                posttype
                title
                featuredImage{
                    childImageSharp{
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }`

    export default SingleProduct