import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { get } from 'https';

function EditMember(props) {

    const [member, setMember] = useState({});
    const mid = props.match.params.mid;
    setMember(props.match.params.member);

    useEffect(() => {
        console.log(`mid= ${mid}`);
        console.log("prepare fetch");
        fetch(`/api/member/${mid}`).then(response => response.json()).then(data => setMember(data));
        // edit(mid);
    }, [mid]);

    async function edit(mid){

        await fetch(`/api/member/updateMember/${mid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                alert("Success");
            } else {
                alert("Failure");
            }
            response.json();
        }).then(data => setMember(data));
    };

    return (
        <div>
            <Container>
                <h3>會員資料</h3>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>mid</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{member.mid}</td>
                            <td>{member.email}</td>
                            <td>{member.password}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
export default EditMember;