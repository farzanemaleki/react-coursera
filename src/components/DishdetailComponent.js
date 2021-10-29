import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function RenderDish({dish}) {
    if(dish != null){
        return(
        <div className="col-12 m-3">
            <div className="row m-5">
            <div className="col-md-5 m-1">
                <Card>
                <CardImg src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
            </div>
            <div className="col-md-5 m-1">
                <h4>comments</h4>
                <CommentDetail dish={dish} />
            </div>
            </div>
        </div>
        );
    }else{
        return(
        <div></div>
        );
        
      }
    }

    function CommentDetail({dish}) {
        if(dish.comments){
            return (
                dish.comments.map((comment) => (
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                ))
            );
        }else{
            return (
                <div></div>
            );
        }
    };
    
    const DishDetail = (props) =>{
        return(
            <div className="row">
                  <RenderDish dish={props.dish} />
            </div>
        );
    }


export default DishDetail ;