import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>Opps Tu ye kaha aa gaya bro error page</h1>
            {err.status} : {err.statusText}
        </div>
    )
}


