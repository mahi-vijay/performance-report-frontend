import { useLocation } from "react-router-dom"
export default function Header() {
    const location = useLocation()
    function pathMathRoute(route){
        if(route === location.pathname) {
            return true
        }
    }
  return (
    <div className="bg-white-800 border-b shadow-sm">
        <header className="flex justify-between items-center px-2 max-w-8xl mx-auto">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvYynMwEFgLv7FrzJUztUyJRNZdDkUHJu-CELJjuwDg&s" 
                alt="Logo" className="h-12 cursor-pointer"/> 
            </div>
            <div>
                <ul className="flex space-x-7">
                    <li>My Learning</li>
                    <li>Training</li>
                    <li className={`py-r font-semibold text-gray-400 border-b-transparent]
                    ${pathMathRoute("/") && "text-black border-b-red-500"}`}>Report</li>
                    <li>Cloud Request</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
