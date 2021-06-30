import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Img from 'gatsby-image'

const  SingleAlbum = ({ data }) => {
    const album = data.markdownRemark.frontmatter
    return (
       <Layout>
           <SEO title={album.title} />
            <div className="single-album-head-div" > 
                <div className="single-head-color">
                    <Img fluid={album.featuredImage.childImageSharp.fluid} className="single-album-head" />
                </div>
            </div>
           <h1 className="single-album-title">{album.title}</h1>
           <div className="inline-images" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
       </Layout>
    )
}

export const albumQuery = graphql`
    query albumBySlug($slug: String){
        markdownRemark(fields: { slug: { eq: $slug}}             ) {
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

    export default SingleAlbum