import React from "react"
import {graphql, StaticQuery } from "gatsby"
import headGallery from '../images/ucak15.jpg'


import Album from "../components/album"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => {

    return (
  <Layout>
      <SEO title="Galeri" keywords={['makine', 'sanayii']} />
        <div className="head-color" ><img src={headGallery} alt="" className="full-width-div"></img></div>

        <h1 className="head-div">Galeri</h1>
        <StaticQuery query={galleryQuery} render={data => {
          return (
            <div>
                {data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.posttype === "gallery").map(({ node }) => {
                return (                    
                    <Album 
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    key={node.id}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}                 
                    />              
                )}            
             )}
            </div>
        )
        }} 
    />
  </Layout>
 )
 }

 const galleryQuery =  graphql`
 query galleryQuery {
     allMarkdownRemark(
      sort:{
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
             }
         }
     }
 }
 
 `


export default GalleryPage