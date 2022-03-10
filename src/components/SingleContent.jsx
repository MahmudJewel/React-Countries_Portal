import pic from'../ax.png'
import { Container, Row } from 'react-bootstrap';
import '../assets/singleContent.css'

const SingleContent = ()=>{
    return(
        <Container>
            <Row>
                <div className="col-md-3 bg-dark m-1 border15 shadow">
                    <h2 className="text-center">Country</h2>
                    <img src={pic} alt="" />
                    <div>
                        a <br />
                        b <br />
                        c <br />
                        c <br />
                        c <br />

                    </div>
                </div>

                <div className="col-md-3 bg-dark m-1 border15 shadow">
                    <h2 className="text-center">Country</h2>
                    <img src={pic} alt="" />
                    <div>
                        a <br />
                        b <br />
                        c <br />
                        c <br />
                        c <br />

                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default SingleContent;