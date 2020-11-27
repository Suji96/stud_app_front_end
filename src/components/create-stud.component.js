import React, { Component } from 'react';
import axios from 'axios';
import TodosStudList from './todos-stud-list.component';

export default class CreateStud extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDivision = this.onChangeDivision.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            date_of_birth: '',
            gender: '',
            division: '',
            classNum: '',
            todo_completed: false,
            dateOfBirthAlert: false
        }


    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDOB(e) {
        this.setState({
            date_of_birth: e.target.value
        });
        // this.date = new Date();
        // e = new Date(e);
        // console.log('Todaydate', this.date, 'event', e, 'Result', e > this.date);
        // if (e > this.date) {
        //     this.setState({
        //         dateOfBirthAlert: true
        //     });
        // } else if (
        //     this.date.getDate() === e.getDate() &&
        //     this.date.getMonth() + 1 === e.getMonth() + 1 &&
        //     this.date.getFullYear() === e.getFullYear()
        // ) {
        //     this.setState({
        //         dateOfBirthAlert: true
        //     });
        // } else {
        //     this.setState({
        //         dateOfBirthAlert: false
        //     });
        // }

    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeDivision(e) {
        this.setState({
            division: e.target.value
        });
    }

    onChangeClass(e) {
        this.setState({
            classNum: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.name}`);
        console.log(`Todo Responsible: ${this.state.date_of_birth}`);
        console.log(`Todo Priority: ${this.state.gender}`);
        console.log(`Todo Priority: ${this.state.division}`);
        console.log(`Todo Priority: ${this.state.classNum}`);

        const data = {
            name: this.state.name,
            date_of_birth: this.state.date_of_birth,
            gender: this.state.gender,
            division: this.state.division,
            classNum: this.state.classNum,
        };

        axios.post('http://localhost:8080/api/create/employee', data)
            .then(res =>
                this.props.history.push('/')
            ).catch(function (error) {
                console.log(error);
            });

        this.setState({
            name: '',
            date_of_birth: '',
            gender: '',
            division: '',
            classNum: '',
            todo_completed: false
        })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            pattern="^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)?$"
                            minlength="3"
                            maxlength="20"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth: </label>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.date_of_birth}
                            onChange={this.onChangeDOB}
                            required
                        />
                        {/* <div>
                            <small class="text-danger" ngIf={this.dateOfBirthAlert}>
                                Date of birth shouldn't be todays date and future date
                            </small>
                        </div> */}
                    </div>
                    <div className="form-group">
                        <label>Division:</label>
                        <select id="division" class="form-control" name="division" onChange={this.onChangeDivision} required>
                            <option value="">None</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Class:</label>
                        <select id="classNum" class="form-control" name="classNum" onChange={this.onChangeClass} required>
                            <option value="">None</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="V">VI</option>
                            <option value="VII">VII</option>
                            <option value="VIII">VIII</option>
                            <option value="IX">IX</option>
                            <option value="XI">XII</option>
                            <option value="X12">X12</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="genderMale"
                                value="Male"
                                checked={this.state.gender === 'Male'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="genderFemale"
                                value="Female"
                                checked={this.state.gender === 'Female'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}