import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        const commentList = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <ul class="list-inline">
                        <li class="list-inline-item" >-- </li>
                        <li class="list-inline-item">{comment.author}</li>
                        <li class="list-inline-item" > , </li>
                        <li class="list-inline-item">{comment.date}</li>
                    </ul>
                    <p></p>
                </div>
            );
        });

        return (
            <>
                <h4>Comments</h4>
                <ul class="list-unstyled">
                    {commentList}
                </ul>
            </>
        );
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;