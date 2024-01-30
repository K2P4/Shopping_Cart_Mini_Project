import React from 'react'

const Category = ({item}) => {
	
	
  return (
		<div>
			<button className="sm:text-md   text-sm active:bg-gray-300 rounded-sm me-1 sm:me-3 select-none hover:duration-150 hover:bg-gray-300  border py-1 px-2 sm:px-4   border-gray-400">
				
				{item}
			</button>
		</div>
	);
}

export default Category