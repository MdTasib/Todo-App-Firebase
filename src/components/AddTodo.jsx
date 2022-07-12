import React from 'react';
import { useFirestore } from '../hooks/useFirestore';

function AddTodo(props) {
	const {addDocument, response} = useFirestore("students")

// handle Add New Todo item and post on database
const handleSubmit = event => {
  event.preventDefault();
  const name = event.target.name.value;
  const description = event.target.description.value;
	const student = {name, description}

  addDocument(student);

  event.target.reset();
};

  return (
		<>
		{
			response.isLoading ? <p>Loading.....</p> : ""
		}
		{
			response.error ? <p>{response.error}</p> : ""
		}
		{
				response.success ? <p className='text-success'>Your have done your submission</p> : ""	
		}

    <form
			onSubmit={handleSubmit}
			className='row g-3 align-items-center bg-white text-black pb-4 px-3 my-5 rounded'>
			<div className='col-md-4'>
				<label htmlFor='todo-name' className='form-label'>
					Name
				</label>
				<input
					type='text'
					name='name'
					className='form-control'
					id='todo-name'
				/>
			</div>
			<div className='col-md-4'>
				<label htmlFor='todo-description' className='form-label'>
					Description
				</label>
				<input
					type='text'
					name='description'
					className='form-control'
					id='todo-description'
					/>
			</div>
			<div className='col-md-4 pt-4 text-end'>
				<button type='submit' className='btn btn-dark w-50'>
					ADD
				</button>
			</div>
		</form>
	</>
  );
}

export default AddTodo;