const CurrentCooks = () => {
    return (
        <div>
            <div className="border-b-2 mb-4">
                <h2 className='font-lexend text-2xl font-semibold text-center mb-4'>Currently cooking: { }</h2>

            </div>
            <div className="flex justify-around p-1 font-fira-sans font-medium text-[#878787]">
                <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
            </div>
        </div>
    );
};

export default CurrentCooks;