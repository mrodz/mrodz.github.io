import { Link } from "react-router-dom";

// todo
export default function NotFound() {
    return (
        <div>
            404: This page doesn't exist!
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}