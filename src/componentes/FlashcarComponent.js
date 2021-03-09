import {
    Card,
    CardImg,
    CardText,
    CardBody
} from 'reactstrap';

const Flashcard = (props) => {
return(
        <div id='contenedor_producto'>
            <div class='row'>
                <div class='col-md-10 col-lg-6'>
                    <Card>
                        <div class='row'>
                            <div class='col-md-8 col-lg-4'>
                                <CardImg id='imagen' top width="30%" src={props.imagen}/>
                            </div> 
                        </div>
                        <h3 className='display-3'>{props.nombre}</h3>
                        <CardBody>
                            <CardText id='campos_aplicacion'>{props.campos}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        )
}

export default Flashcard