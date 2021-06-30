import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Album = ({title, slug, fluid }) => {
    return(
        <div className="album" >
            <div className="page-position">
                <div className="album-position color">
                    <Img fluid={fluid} className="img-position"></Img>
                    <p className="galery-head-position">{title}</p>
                     <Link to={slug}  ><button className="button-position">Daha Fazla</button></Link>
                 </div>
            </div>
        </div>
    )
}

export default Album