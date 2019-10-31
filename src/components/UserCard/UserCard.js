import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function UserCard(props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props._id}>
                    {props.name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props._id}>
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Nombre:</b> {props.name}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Genero:</b> {props.gender}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Edad:</b> {props.age}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Color de Ojos:</b> {props.eyeColor}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Correo:</b> {props.email}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Telf:</b> {props.phone}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Compañia:</b> {props.company}
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mt-1">
                            <b>Fecha de registro:</b> {props.registered}
                        </div>
                        <div className="col-12 mt-1">
                            <b>Acerca:</b>
                        </div>
                        <div className="col-12 mt-1">
                            {props.about}
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default UserCard;