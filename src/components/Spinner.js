import "./Spinner.css";
const Spinner = () => {
    return (
        <div className="f-11/12 flex flex-wrap max-w-max gap-x-4 gap-y-4 mx-auto py-4 justify-center">
            <div className="spinner">
            </div>
            <p className="text-bgDark text-semibold text-lg">Loading...</p>
        </div>)
}
export default Spinner;