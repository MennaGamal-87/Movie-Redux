const Footer=()=>{
    return(
        <>
        <div className="w-[50%] h-auto p-4 m-auto">
            <p className="text-center text-gray-700">©2023 <span className="font-semibold text-blue-700 text-[25px]">React Movies</span> , All Rights Reserved</p>
            <ul className="text-red-700 m-auto w-[40%] flex justify-evenly">
                <li>About Us</li>
                <li>Terms of use</li>
                <li>Privacy</li>
            </ul>
        </div>
        </>
    )
}
export default Footer