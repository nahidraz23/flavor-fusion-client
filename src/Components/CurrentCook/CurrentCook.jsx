const CurrentCook = ({cooks, idx}) => {

    const { recipe_name, preparing_time, calories } = cooks;

    return (
        <div>
            <div className="flex p-2">
                <div className="flex justify-around w-full items-center ">
                    <p className="font-fira-sans font-semibold">{idx + 1}</p>
                    <p className="font-fira-sans text-[#878787] w-32">{recipe_name}</p>
                    <p className="font-fira-sans text-[#878787] ">{preparing_time}</p>
                    <p className="font-fira-sans text-[#878787] w-14 text-center">{calories}</p>
                    </div>
            </div>
        </div>
    );
};

export default CurrentCook;