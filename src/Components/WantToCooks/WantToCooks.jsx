import { useState } from "react";
import CurrentCooks from "../CurrentCooks/CurrentCooks";
import WantToCook from "../WantToCook/WantToCook";


const WantToCooks = ({ cookings, handleCurrentlyCooking, cooks }) => {

    // const [cooks, setCooks] = useState([]);


    // const handleCurrentlyCooking = (items, id) => {
    //     const newCooks = [...cooks, items];
    //     setCooks(newCooks);

    //     console.log(id)
    //     // console.log(newCooks)
    // }

    return (
        <div>
            <div className="border-b-2 mb-4">
                <h2 className='font-lexend text-2xl font-semibold text-center mb-4'>Want to cook: {cookings.length}</h2>
            </div>

            <div className="mb-8">
                <div className="flex justify-evenly p-1 font-fira-sans font-medium text-[#878787]">
                    <h1>Name</h1>
                    <h1>Time</h1>
                    <h1>Calories</h1>
                    <h1></h1>
                </div>
                {
                    cookings.map((cooking, idx) => <WantToCook
                        idx={idx}
                        key={cooking.recipe_id}
                        cooking={cooking}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                    ></WantToCook>)
                }
            </div>

            {/* Currently Cooking section */}
            <div>
                <CurrentCooks
                    cooks={cooks}
                ></CurrentCooks>
            </div>

        </div>
    );
};

export default WantToCooks;