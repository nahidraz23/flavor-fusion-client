import { useState } from 'react';
import './Items.css'
import { useEffect } from 'react';
import Item from '../Item/Item';

const Items = () => {

    const [items, setItems] = useState([]);

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
                    ></Item>)
                }
            </div>
            <div className='lg:w-1/3'>
                <h2>Cooking details</h2>
            </div>

        </div>
    );
};

export default Items;