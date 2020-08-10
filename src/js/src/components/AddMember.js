import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import MyNavbar from './MyNavbar';

class AddMember extends Component {
    emptyMember = {
        account: '',
        password: '',
        email: '',
    };

    constructor(props) {
        super(props);
        this.state = { member: this.emptyMember };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let member = { ...this.state.member };
        member[name] = value;
        this.setState({ member });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { member } = this.state;

        await fetch("/api/member/createMember", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(member)
        }).then(response => {
            if(response.status === 200){
                alert("Success");
            }else{
                alert("Failure");
            }
        });
        this.props.history.push('/members');

    }

    render() {
        const { member } = this.state;

        return (
            <div>
                <MyNavbar />
                <Container>
                    <h2>新增會員</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="account">Account</Label>
                            <Input type="text" name="account" value={member.account} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" value={member.password} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" value={member.email} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Submit</Button>{' '}
                            <Button color="secondary" tag={Link} to="/members">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(AddMember);