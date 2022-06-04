import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetLocal = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get('http://localhost:3001/student')
			.then(response => {
				console.log("Getting from Server=>", response.data)
				setData(response.data)
			})

			.catch(err => console.log(err))

	}, [])

	const arr = data.map((data) => {
		return (
			<tr>

				<td style={{ border: '1px solid black' }}>{data.id}</td>
				<td style={{ border: '1px solid black' }}>{data.title}</td>
				<td style={{ border: '1px solid black' }}>{data.body}</td>

			</tr>
		)
	})
	return (
		<div class="container">
			<div>
				<h3 style={{ textAlign: "center" }}>Axios Method-Get Data</h3>
				<table class="table table-striped">
					<thead style={{ border: '1px solid black' }}>
						<tr>
							<th scope="col" style={{ border: '1px solid black' }}>ID</th>
							<th scope="col" style={{ border: '1px solid black' }}>Name</th>
							<th scope="col">Course</th>
						</tr>
					</thead>
					{arr}
				</table>
			</div>
		</div>
	)
}

export default GetLocal


