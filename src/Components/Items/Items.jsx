import { useState } from 'react';
import './Items.css'
import { useEffect } from 'react';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Items;