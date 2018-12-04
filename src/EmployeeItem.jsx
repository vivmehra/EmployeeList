/* Child Component to show each row for each Employee data and 
pass control to parent component for edit, delete and update functionalities*/
import React, { Component } from 'react';
import './StudentList.css';
import TableRowView from './TableRowView';
import TableRowEdit from './TableRowEdit';

export default class EmployeeItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditClicked: false,
			isInvalid: 0
		};
		// this.name = this.props.studentData.studentName;
		// this.designation = this.props.studentData.score;
	}
	/* Pass the key to delete, to the parent component*/
	onDeleteClick = () => {
		this.props.studentData.onDeleteClick(this.props.studentData.key);
	};
	onEditClick = () => {
		this.setState({
			isEditClicked: true
		});
	};
	/*pass data to parent to edit the state */
	updateClick = (e, name, designation, age, joiningDate) => {
				this.props.studentData.updateClick(this.props.studentData.key, name,designation, age, joiningDate);
				this.setState({
				isEditClicked: false,
				isInvalid: 0
				});
	};
	render() {
		const studentData = this.props.studentData;
		let divElement = '';
		const rowViewProps = {
			studentData: studentData,
			onDeleteClick  : this.onDeleteClick,
			onEditClick: this.onEditClick

		}
		const rowEditProps = {
			studentData: studentData,
			onChangeHandler: this.onChangeHandler,
			updateClick : this.updateClick,
			message: this.ErrorMessage,
			isInvalid: this.state.isInvalid
		}
		if (!this.state.isEditClicked) {
			divElement = ( <TableRowView data={rowViewProps} /> );
		}
		if (this.state.isEditClicked) {
			divElement = ( <TableRowEdit data = {rowEditProps} />
			);
		}
		return <div>{divElement}</div>;
	}
}
