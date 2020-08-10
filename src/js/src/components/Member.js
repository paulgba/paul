import React, { Component } from 'react';
import { Container, Table, ButtonGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';

class Member extends Component {

	constructor(props) {
		super(props);
        this.state = { members: [], mId: {}, };
        this.remove = this.remove.bind(this);
	}

	componentDidMount() {
		fetch('/api/member/queryMembers').then(response => response.json())
			.then(data => this.setState({ members: data }));
    }
    
    async remove(mid) {
        await fetch(`/api/member/deleteMember/${mid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                alert("Success");
            } else {
                alert("Failure");
            }
            let updateMembers = [...this.state.members].filter(i => i.mid !== mid);
            this.setState({ members: updateMembers });
        });
    }

	render() {
		const { members } = this.state;

		const memberList = members.map(member => {
			return <tr key={member.mid}>
                <td>{member.account}</td>
                <td>{member.password}</td>
                <td>{member.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={`/member/edit/${member.mid}`}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(member.mid)}>Delete</Button>
                    </ButtonGroup>
                </td>
			</tr>
		});

		return (
			<div>
				<MyNavbar />
				<Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/member/new">Add Member</Button>
                    </div>
					<h3>Member</h3>
					<Table className="mt-4">
						<thead>
							<tr>
                                <th>Account</th>
								<th>Password</th>
                                <th>Email</th>
							</tr>
						</thead>
						<tbody>
							{memberList}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}

}
export default Member;