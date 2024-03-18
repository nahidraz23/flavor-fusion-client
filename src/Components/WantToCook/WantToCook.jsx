
const WantToCook = ({ cooking, idx, handleCurrentlyCooking }) => {

    const {recipe_id, recipe_name, preparing_time, calories } = cooking;

    return (
        <div className="flex p-2">
            <div className="flex justify-between lg:justify-evenly w-full items-center ">
                <p className="font-fira-sans font-semibold">{idx + 1}</p>
                <p className="font-fira-sans text-[#878787] w-32 p-2 lg:p-0">{recipe_name}</p>
                <p className="font-fira-sans text-[#878787] ">{preparing_time}</p>
                <p className="font-fira-sans text-[#878787] w-14 text-center">{calories}</p>
            <p className="btn rounded-full bg-[#D8451D] text-white hover:text-[#D8451D]"><button onClick={() => handleCurrentlyCooking(cooking, recipe_id)}>Preparing</button></p>
            </div>
        </div>
    );
};

export default WantToCook;