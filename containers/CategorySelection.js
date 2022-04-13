import React from 'react';
import CategoryButton from '../components/CategoryButton';
function CategorySelection() {
	return (
		<>
			<div className='px-6 pt-8'>
				<CategoryButton product='headphones' />
				<CategoryButton product='speakers' />
				<CategoryButton product='earphones' />
			</div>
		</>
	);
}

export default CategorySelection;
