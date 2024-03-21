/* eslint-disable jsx-a11y/anchor-is-valid */

const Dropdown = (props) => {
    return (
        <div className="">
            <a href="#" className="border border-y-neutral-100 px-2 py-1 rounded active:bg-slate-500 active:text-white w-fit hover:bg-slate-500 hover:text-white transition-all">{props.name}</a>
        </div>
    )
}

export default Dropdown;