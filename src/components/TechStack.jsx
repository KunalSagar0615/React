import { Link, Outlet } from "react-router-dom"
const TechStack = () => {
  return (
    <div className="mx-20 my-10 flex gap-10">
        <ul className="text-2xl">
            <li className="mb-5">
                <Link to="html">Html</Link>
            </li>
            <li className="mb-5">
                <Link to="css">Css</Link>
            </li>
            <li className="mb-5">
                <Link to="javascript">Javascript</Link>
            </li>
        </ul>

        <Outlet />
    </div>
  )
}

export default TechStack