
import logoMd from '../assets/logo-md.svg'
import logoLg from '../assets/logo-lg.svg'
import icon from '../assets/icon32.svg'

export const Header = ({ children, total }) => {
  return (
    <div className='header'>
        <div className="container flex items-center justify-between">
            <div>
              <picture>
                <source srcSet={ logoLg }  media="(min-width: 1024px)" />
                <source srcSet={ logoMd }  media="(min-width: 768px)" />
                <img src={ icon } alt="imagen-logo" />
              </picture>
            </div>
            <div className="flex">
              <h2 className="text-xl font-semibold">{ children }</h2>
              <span className="ml-3 bg-red-600 p-4 text-red-200 w-4 h-4 flex justify-center items-center rounded-[500%]">
                  <h3 className="text-lg font-semibold">{ total }</h3>
              </span>
            </div>
        </div>
    </div>
  )
}
