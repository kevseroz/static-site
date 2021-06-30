import React from 'react'
import { Link } from 'gatsby'
import {Card, CardBody, CardText, CardTitle} from 'reactstrap'
import Img from 'gatsby-image'

const Product = ({title, slug, fluid, body }) => {
    return(
        <div>
                      
             <Card className="mb-5 align-items-stretch">
                <Img fluid={fluid} top width="100%"  />                
                <CardBody>
                    <CardTitle style={{fontSize: "30px"}} >{title}</CardTitle>
                    <CardText className="card-text">{body}</CardText>
                    <Link to={slug}> <div className="button_slide slide_right">BİLGİ AL </div></Link>
                </CardBody>
             </Card>
        </div>
    )
}
 





export default Product

