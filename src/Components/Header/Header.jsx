import './Header.css';

const Header = () => {
    return (
        <div className='p-4'>
            {/* Navbar */}
            <div className="navbar bg-base-100 lg:my-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-lg lg:text-4xl font-lexend font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E26B16] to-[#CE2024]">Flavor Fusion</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-lexend">
                        <li className='hover:bg-[#CE2024] hover:text-white rounded-xl'><a>Home</a></li>
                        <li className='hover:bg-[#CE2024] hover:text-white rounded-xl'><a>Recipes</a></li>
                        <li className='hover:bg-[#CE2024] hover:text-white rounded-xl'><a>About</a></li>
                        <li className='hover:bg-[#CE2024] hover:text-white rounded-xl'><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-3">
                        <div className='hidden lg:inline'>
                            <label className="input input-bordered flex items-center gap-2 rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="btn  bg-[#D8451D] rounded-full text-white hover:text-[#CE2024]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* bg-[url('./src/images/banner.jpeg')] */}

            {/* Banner */}
            <div className="lg:w-auto lg:h-[600px]  bg-repeat-round p-4 lg:p-0 banner-bg">
                <div className='flex flex-col items-center justify-center h-full gap-6 text-center'>
                    <div className='space-y-6 flex flex-col items-center'>
                        <h1 className='text-white text-2xl lg:text-5xl font-bold font-lexend'>Indulge Your Senses at <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F5B608] to-[#D8451D]'>Flavor Fusion</span></h1>
                        <p className='text-white lg:text-lg font-lexend lg:w-2/3'>Savor the essence of culinary innovation at Flavor Fusion, where every dish tells a story of global inspiration and local craftsmanship...</p>
                    </div>
                    <div className='flex gap-2 lg:gap-8 lg:mt-6'>
                        <button className='btn rounded-full bg-[#D8451D] text-black font-lexend font-semibold text-xl border-none hover:text-[#D8451D]'>Explore Now</button>
                        <button className='btn rounded-full font-lexend font-semibold text-xl bg-opacity-0 text-white hover:text-black'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;