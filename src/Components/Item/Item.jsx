import './Item.css'

const Item = ({ item, handleWantToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = item;

    return (
        <div className='border-2 flex flex-col justify-center p-5 rounded-2xl'>

            <div className='space-y-4'>
                <div className=''>
                    <img src={recipe_image} alt="" className='w-[460px] h-[200px] rounded-xl' />
                </div>
                <div className='space-y-4'>
                    <h1 className='font-lexend text-xl font-semibold'>{recipe_name}</h1>
                    <p className='font-fira-sans text-[#878787]'>{short_description}</p>
                </div>

            </div>

            <hr className=' my-4 border-gray-300' />

            <div className='text-left'>
                <h1 className='text-lg font-lexend font-medium'>ingredients: {ingredients.length}</h1>
                <div className='ml-8 mt-4'>
                    <ul className='list-disc font-fira-sans text-lg text-[#878787]'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                </div>

            </div>

            <hr className=' my-4 border-gray-300' />

            <div className='flex gap-8 text-gray-600'>
                <div className='flex gap-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex gap-2'>
                    <svg width="13.000000" height="18.000000" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M5 0C5 3.03 3.22 4.74 2 6C0.77 7.25 0 9.24 0 11C0 12.59 0.63 14.11 1.75 15.24C2.88 16.36 4.4 17 6 17C7.59 17 9.11 16.36 10.24 15.24C11.36 14.11 12 12.59 12 11C12 9.46 10.94 7.06 10 6C8.21 9 7.2 9 6 8C8 5.04 6 1 5 0Z" stroke="#282828" stroke-opacity="0.800000" stroke-width="1.500000" stroke-linejoin="round" />
                    </svg>

                    <p className='font-fira-sans '>{calories}</p>
                </div>
            </div>

            <div>
                <button onClick={() => handleWantToCook(item)} className='btn rounded-full mt-6 bg-[#D8451D] text-white hover:text-[#D8451D]'>Want to Cook</button>
            </div>
        </div>
    );
};
 
export default Item;