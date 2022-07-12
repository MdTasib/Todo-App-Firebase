import React from "react";
import useCollection from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";

function Todos() {
	const { updateDocument, deleteDocument } = useFirestore("students");

	const { document, isLoading } = useCollection("students");
	const handleComplete = data => {
		const updateDoc = { ...data, complete: true };
		updateDocument(data.id, updateDoc);
	};

	const handleDelete = id => {
		deleteDocument(id);
	};

	return document.map(data => (
		<>
			{isLoading ? <h3 className='text-white'>Loading...</h3> : ""}
			<div className='card mb-3'>
				<div className='row g-0 align-items-center'>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5
								className='card-title text-black fw-bold'
								style={data.complete && { textDecorationLine: "line-through" }}>
								{data.name}
							</h5>
							<p
								className='card-text text-dark'
								style={data.complete && { textDecorationLine: "line-through" }}>
								{data.description}
							</p>
						</div>
					</div>
					<div className='col-md-4 text-end'>
						{!data.complete && (
							<button
								onClick={() => handleComplete(data)}
								className='btn btn-outline-success'>
								COMPLETE
							</button>
						)}
						<button
							onClick={() => handleDelete(data.id)}
							className='btn btn-outline-danger mx-3'>
							DELETE
						</button>
					</div>
				</div>
			</div>
		</>
	));
}

export default Todos;
