
export const Header = ({ children, total }) => {
  return (
    <div className='shadow-md h-16 bg-gray-700 text-gray-200 flex items-center'>
        <div className="container flex items-center">
            <h2 className="text-xl font-semibold">{ children }</h2>
            <span className="ml-3 bg-red-600 p-4 text-red-200 w-4 h-4 flex justify-center items-center rounded-[500%]">
                <h3 className="text-lg font-semibold">{ total }</h3>
            </span>
        </div>
    </div>
  )
}
