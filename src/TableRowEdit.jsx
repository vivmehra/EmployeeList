import React from 'react';

const TableRowEdit = ((props)=>{
    return(
    <form className="form-group">
					<table className="table">
					<tbody>
						<tr className="dividetds">
							<td>
							<input
							type="text"
							id="sname_edit"
							className="form-control"
							defaultValue={props.data.studentData.name}
							maxLength = '255'
						/>
							</td>
							<td>
							<input
							type="text"
							id="designation"
							className="form-control"
							defaultValue={props.data.studentData.designation}
							maxLength = '5'
						/>
							</td>
							<td>
							<input
							type="text"
							id="age"
							className="form-control"
							defaultValue={props.data.studentData.age}
							maxLength = '5'
						/>
							</td>
							<td>
							<input
							type="text"
							id="joiningDate"
							className="form-control"
							defaultValue={props.data.studentData.joiningDate}
							maxLength = '5'
						/>
							</td>
							<td>
								<button type="button" className="btn btn-primary" onClick={(e) => props.data.updateClick(e,document.getElementById('sname_edit').value,document.getElementById('designation').value, document.getElementById('age').value,document.getElementById('joiningDate').value)}>Update</button>	
							</td>
						</tr>
					</tbody>
					</table>
				</form>
    );
});

export default TableRowEdit;
