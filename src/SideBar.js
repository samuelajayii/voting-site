/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { faArrowDown, faGears, faHomeAlt, faIdCard, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Dropdown from "./Dropdown"
import { Link } from "react-router-dom"

const SideBar = () => {

    var [dropDown, setDropdown] = useState(false)
    function dropDownToggle() {
        setDropdown(!dropDown)
    }


    return (
        <div className=" bg-slate-100 h-full px-5 py-2 w-fit text-2xl rounded-md">
            <div className="mt-5 gap-7 flex flex-col text-gray-900">
                <Link to={'/home'} className="gap-2 flex items-center px-4 py-2 rounded-lg bg-white"><FontAwesomeIcon icon={faHomeAlt} />Home</Link>
                <div className="gap-2 flex flex-col items-center px-4 py-2 rounded-lg bg-white">
                    <div className="gap-2 flex items-center cursor-pointer" onClick={dropDownToggle}>
                        <FontAwesomeIcon icon={faIdCard} />
                        Candidates
                        <FontAwesomeIcon icon={faArrowDown} className="text-sm mt-1" />
                    </div>
                    <div className="items-start w-full -mt-1">
                        {
                            dropDown && (
                                <div className="flex flex-col gap-2 text-[1rem] w-full">
                                    <Link to={'/president'}><Dropdown name={`President`} /></Link>
                                    <Link to={'/comingsoon'}><Dropdown name={`Gubernatorial`} /></Link>
                                    <Link to={'/comingsoon'}><Dropdown name={`Senate`} /></Link>
                                    <Link to={'/comingsoon'}><Dropdown name={`House of Reps`} /></Link>
                                </div>

                            )
                        }
                    </div>
                </div>
                <h1 className="gap-2 flex items-center px-4 py-2 rounded-lg bg-white"><FontAwesomeIcon icon={faGears} />Settings</h1>
                <h1 className="gap-2 flex items-center px-4 py-2 rounded-lg bg-white"><FontAwesomeIcon icon={faPerson} />Profile</h1>
            </div>

        </div>

    )
}

export default SideBar