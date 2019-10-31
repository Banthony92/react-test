import React from 'react';
import './App.css';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import UserCard from "../UserCard/UserCard";

const users = [
    {
        "_id": "5dbb5ac511a2b798f3dd78dc",
        "name": "Collins Flores",
        "gender": "Femenino",
        "age": 32,
        "eyeColor": "Verdes",
        "email": "collinsflores@isologia.com",
        "phone": "+1 (896) 495-3240",
        "company": "ZOGAK",
        "address": "430 Battery Avenue, Cobbtown, South Carolina, 5126",
        "registered": "27-11-2015",
        "about": "Nostrud labore Lorem qui do reprehenderit ad. Aliquip qui laboris velit quis exercitation eu officia eiusmod eiusmod aliqua qui. Sint nulla duis duis esse dolore ullamco ea dolor aliquip magna proident ipsum deserunt irure. Excepteur ullamco proident sit velit ut elit. Consectetur quis eu enim commodo nisi. Et occaecat veniam sint minim labore.\r\n"
    },
    {
        "_id": "5dbb5ac5e6c88420d1f84f64",
        "name": "Conner Potts",
        "gender": "Femenino",
        "age": 36,
        "eyeColor": "Marrones",
        "email": "connerpotts@zogak.com",
        "phone": "+1 (861) 455-2117",
        "company": "ZORROMOP",
        "address": "324 Forest Place, Bordelonville, North Carolina, 7377",
        "registered": "02-07-2018",
        "about": "Ullamco elit ut non sunt proident elit. Exercitation dolore aliqua in quis minim velit. Sit culpa magna dolore eiusmod laborum aute Lorem do reprehenderit veniam amet ullamco et.\r\n"
    },
    {
        "_id": "5dbb5ac54f1f0da51b5b99d8",
        "name": "Hampton Leblanc",
        "gender": "Femenino",
        "age": 30,
        "eyeColor": "Azuls",
        "email": "hamptonleblanc@zorromop.com",
        "phone": "+1 (935) 576-2025",
        "company": "TERAPRENE",
        "address": "145 Hicks Street, Wacissa, Palau, 9553",
        "registered": "28-11-2015",
        "about": "Do laboris tempor est id. Qui nostrud consectetur aute et adipisicing Lorem laboris ad pariatur. Amet laborum est Lorem voluptate proident. Duis ea nisi aute qui eu irure occaecat.\r\n"
    },
    {
        "_id": "5dbb5ac5b103e551efaaf9a3",
        "name": "Norma Mosley",
        "gender": "Femenino",
        "age": 36,
        "eyeColor": "Verdes",
        "email": "normamosley@teraprene.com",
        "phone": "+1 (930) 537-3356",
        "company": "DENTREX",
        "address": "536 Forrest Street, Brule, American Samoa, 738",
        "registered": "03-09-2017",
        "about": "Velit esse Lorem anim minim labore. Irure id cillum adipisicing ex commodo eiusmod. Pariatur eiusmod ullamco ea sit nisi ad fugiat enim mollit laborum.\r\n"
    },
    {
        "_id": "5dbb5ac559cec5a52ae6e8a3",
        "name": "Rosetta Curry",
        "gender": "Femenino",
        "age": 35,
        "eyeColor": "Verdes",
        "email": "rosettacurry@dentrex.com",
        "phone": "+1 (850) 409-2922",
        "company": "AMRIL",
        "address": "776 Otsego Street, Broadlands, Illinois, 5084",
        "registered": "25-08-2018",
        "about": "Non consectetur minim proident labore deserunt voluptate veniam. Do sint adipisicing anim tempor sit ipsum laboris tempor voluptate amet nulla commodo duis. Nostrud deserunt non occaecat excepteur consequat aliqua consequat non ipsum fugiat mollit. In elit qui in Lorem qui aute consequat exercitation officia Lorem culpa duis qui quis. Enim eiusmod cupidatat aliquip nisi qui ut fugiat do cupidatat aliqua aute tempor enim. Amet magna exercitation ea non culpa dolor. Eu quis fugiat culpa pariatur magna eiusmod magna.\r\n"
    }
];

function App() {
    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Usuarios
                            </Card.Title>
                        </Card.Header>
                        <Accordion>
                            {users.map((user, i) => {
                                return (<UserCard key={i} {...user}/>);
                            })}
                        </Accordion>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
