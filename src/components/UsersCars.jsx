import { Button, Container, Table } from "react-bootstrap"

const UserCars=()=>{
    return(
        <Container>
            <div className="row">
                <div className="row">
                    <div className="col-6">
                        <h2>User Cars</h2>
                        <p>Get to see the cars that you have with us</p>
                    </div>
                    <div className="col-6">
                        <Button>Add New Car</Button>
                    </div>
                </div>
                <div className="row">
                    <Table>
                        <thead>
                            <tr>
                                <th>Car ID</th>
                                <th>Car Plaite</th>
                                <th>Car Type</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                <td>1</td>
                                <td>KBJ213J</td>
                                <td>2wheeler</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}
export default UserCars;