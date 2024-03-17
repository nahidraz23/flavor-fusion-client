import { useState } from 'react';
import './Items.css'
import { useEffect } from 'react';
import Item from '../Item/Item';
import WantToCooks from '../WantToCooks/WantToCooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Items = () => {

    const [items, setItems] = useState([]);

    const [cookings, setCookings] = useState([]);

    const handleWantToCook = food => {

        const isExist = cookings.find(cook => cook.recipe_id === food.recipe_id);

        if (!isExist) {
            const newFood = [...cookings, food];
            setCookings(newFood);
        }
        else {
            toast('item already added', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

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
            <div className='lg:w-1/3 p-4 lg:p-0'>
                <div className='border-2 lg:p-5 rounded-2xl'>
                    <div>
                        <WantToCooks
                            cookings={cookings}
                        ></WantToCooks>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Items;