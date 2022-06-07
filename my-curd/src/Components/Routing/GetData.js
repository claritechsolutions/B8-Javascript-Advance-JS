import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetData = () => {
   
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(' http://localhost:3000/emp')
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
				<td style={{ border: '1px solid black' }}>{data.Name}</td>
				<td style={{ border: '1px solid black' }}>{data.City}</td>

			</tr>
		)
	})
	return (
		<div className="container">
			<div>
				
				<table className="table table-striped">
					<thead style={{ border: '1px solid black' }}>
						<tr>
							<th scope="col" style={{ border: '1px solid black' }}>ID</th>
							<th scope="col" style={{ border: '1px solid black' }}>Name</th>
							<th scope="col" style={{ border: '1px solid black' }}>City</th>
						</tr>
					</thead>
					{arr}
				</table>
			</div>
		</div>
	)
 }

export default GetData