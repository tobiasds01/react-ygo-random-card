import './CardsTable.css';

import React, { Fragment, useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const CardsTable = () => {

    const [card, edit] = useState([]);

    const [bttnPressed, setPress] = useState(null);

    const [url, editImg] = useState("");

    useEffect(
        () => {
        if(!bttnPressed) {
            console.log("Not pressed");
        } else {
            document.getElementById('tableThead').className = "";
            document.getElementById('tableBody').className = "";
            document.getElementById('cardImage').className = "showed";
            document.getElementById('generateMssg').className = "hidden";
            console.log("Pressed")
        }
        }, [bttnPressed]
    );

    const consultarAPI = async() => {
        try {
            const api = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
            const result = await api.json();
            edit([
                result.name,
                result.type,
                result.desc,
                result.atk,
                result.def,
                result.level,
                result.race,
                result.attribute,
                editImg("https://images.ygoprodeck.com/images/cards/" + result.id + ".jpg")
            ])
            setPress(true);
            console.log(card);
        } catch(error) {
            console.log(error);
        }
    };

    return ( 
        <Fragment>
            <Container className='randomCardTable'>
                <Button
                onClick={consultarAPI}
                variant="primary"
                className='buttonRandom' 
                    >Generate</Button>
                <Table striped bordered hover
                className='tableRandom'
                id='table'>
                    <thead className='hidden' id='tableThead'>
                        <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>ATK</th>
                        <th>DEF</th>
                        <th>Level</th>
                        <th>Race</th>
                        <th>Attribute</th>
                        </tr>
                    </thead>
                    <tbody className='hidden' id='tableBody'>
                        <tr>
                        <td>{card[0]}</td>
                        <td>{card[1]}</td>
                        <td>{card[2]}</td>
                        <td>{card[3]}</td>
                        <td>{card[4]}</td>
                        <td>{card[5]}</td>
                        <td>{card[6]}</td>
                        <td>{card[7]}</td>
                        </tr>
                    </tbody>
                </Table>
                <img src={url} alt="Card" className='hidden' id='cardImage'/>
                <h2 id='generateMssg'>Press the button to generate a card...</h2>
            </Container>
        </Fragment>
     );
}
 
export default CardsTable;