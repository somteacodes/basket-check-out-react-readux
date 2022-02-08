export const Header = ()=>{

    return (
        <div className="h-20 bg-yellow-200 w-full px-8 f">
            <ul className="font-bold flex justify-end space-x-6 items-center h-full">
                <li className="cursor-pointer rounded-full py px-4 bg-yellow-500">
                    Basket Items: 4
                </li>
                <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
                    Total Cost: $ 200
                </li>
            </ul>
        
        </div>
    )
}