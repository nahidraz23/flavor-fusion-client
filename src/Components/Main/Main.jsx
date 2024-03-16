import './Main.css';
import Items from '../Items/Items';

const Main = () => {
    return (
        <div className='mt-24'>
            <div className='flex flex-col items-center text-center space-y-6 mb-12'>
                <h1 className='text-4xl font-semibold font-lexend'>Our Recipes</h1>
                <p className='font-lexend text-gray-500'>Dive into a world of culinary inspiration with our diverse selection of mouthwatering recipes.</p>
            </div>
            
            <Items></Items>
        </div>
    );
};

export default Main;