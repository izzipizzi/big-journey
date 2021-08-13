import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div className="page-container">
            <Link to={'/my-info'}>
                <span> Let's start journey</span>
            </Link>
        </div>
    )
}