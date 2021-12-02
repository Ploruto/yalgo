import {Children} from "react"

export const FixedLeftBar = ({children}) => {
    return(
        <div className="md:col-start-10 md:col-span-4 mt-6 mx-5 gap-4">
                {children}
            </div>


    )
}
