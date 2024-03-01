import './error.scss'

const Error = ({ error } : { error:boolean }) => {
    return (
        <div className= "error__container">
            <div>{error}</div>
            <div className= "error__animation"></div>
        </div>
    )
}

export default Error