

function Sidebar(){
    return(
        <aside className="w-48 bg-gray-100 p-5 rounded-lg">
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <ul className="list-none p-0 m-0">
                <li className="mb-3.5">
                    <a className="text-gray-700 no-underline hover:text-blue-600 transition-colors" href="#">Technology</a>
                </li>
                <li>
                    <a className="text-purple-600 no-underline hover:text-white transition-colors" href="#">Science</a>
                </li>
                <li>
                    <a className="text-green-500 no-underline hover:bg-green-600 transition-colors" href="#">Sports</a>
                </li>                
                <li>
                    <a className="text-yellow-600 underline hover:text-purple-300 transition-colors" href="#">Entertainment</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;



