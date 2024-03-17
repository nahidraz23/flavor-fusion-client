import { useState } from 'react';
import './Items.css'
import { useEffect } from 'react';
import Item from '../Item/Item';
import WantToCooks from '../WantToCooks/WantToCooks';

const Items = () => {

    const [items, setItems] = useState([]);

    const [cookings, setCookings] = useState([]);

    const handleWantToCook = food => {
        const newFood = [...cookings, food];
        setCookings(newFood);
    }

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='flex flex-col lg:flex-row gap-6'>
            <div className='lg:w-2/3 grid lg:grid-cols-2 gap-4 justify-items-center p-4 lg:p-0' >
                {
                    items.map(item => <Item
                        key={item.recipe_id}
                        item={item}
                        handleWantToCook={handleWantToCook}
                    ></Item>)
                }
            </div>
            <div className='lg:w-1/3'>
                <div className='border-2 p-5 rounded-2xl'>
                    <div>
                        <WantToCooks
                            cookings={cookings}
                        ></WantToCooks>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;