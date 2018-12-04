/* Component to add Student Info and
   Call StudentItem iteratively on the basis of number of students added. */

import React, { Component } from 'react';
import './StudentList.css';
import EmployeeItem from './EmployeeItem';
import TableHeader from './TableHeader';

export default class EmployeeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			studentsList: [
				{

					name: 'Sample Name 1',

					designation: 'SE',

					age: '21',

					joiningDate: '21-08-2008'

					},{

					name: 'Sample Name 2',

					designation: 'LSE',

					age: '25',

					joiningDate:'21-08-2004'

				}
			],
			isInvalid: 0
		};
		this.name = '';
		this.score = '';
	}
	/*  Function to delete corresponding student data, data passed by child component*/
	onDeleteClick = (index) => {
		let studentsList = [...this.state.studentsList];
		studentsList.splice(index, 1);
		this.setState({
			studentsList: studentsList
		});
	};

	/*Function to handle update event triggered from child component(StudentLit)
	 and update the correspodnig student data in state */
	updateClick = (key, name, designation, age, joiningDate) => {
			const studentsList = [...this.state.studentsList];
			studentsList[key] = {
				name: name,
				designation: designation,
				age: age,
				joiningDate: joiningDate
			};
			this.setState({
				studentsList: studentsList,
				isInvalid: 0
			});			
	};
	render() {
		const studentsList = [...this.state.studentsList];
		let studentData = '';
		return (
			<div className="container-fluid mt-2" id='main-container'>
				
				{/* Table Header*/}
				{studentsList.length > 0 && <TableHeader />}

				{/* Iteratively Calling StudentItem component to add each row for the students array */}
				{studentsList.map((student, index) => {
					studentData = {
						...student,
						key: index,
						onDeleteClick: this.onDeleteClick,
						updateClick: this.updateClick,
					};
					return (
						<div className="container-fluid" key="index">
							<EmployeeItem studentData={studentData} />
						</div>
					);
				})}
			</div>
		);
	}
}
