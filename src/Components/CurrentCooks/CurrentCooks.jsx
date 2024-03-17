import CurrentCook from "../CurrentCook/CurrentCook";

const CurrentCooks = ({ cooks }) => {

    return (
        <div>
            <div className="border-b-2 mb-4">
                <h2 className='font-lexend text-2xl font-semibold text-center mb-4'>Currently cooking: {cooks.length}</h2>

            </div>
            <div className="flex justify-around p-1 font-fira-sans font-medium text-[#878787]">
                <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
            </div>

            <div>
                {
                    cooks.map((cook, idx) => <CurrentCook 
                        cooks={cook}
                        idx={idx}
                        key={cook.id}
                    ></CurrentCook>)
                }
            </div>
            
            <div className="flex justify-end gap-16 p-4">
                <div>
                    <h1>Total Time =</h1>
                    <h1>45 minutes</h1>
                </div>
                <div>
                    <h1>Total Calories = </h1>
                    <h1>1050 calories</h1>
                </div>
            </div>
        </div>
    );
};

export default CurrentCooks;