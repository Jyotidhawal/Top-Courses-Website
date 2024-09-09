import react from 'react';
const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title) {
        setCategory(title);
    }
    return (<div className="w-11/12 flex flex-wrap max-w-max gap-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
            filterData.map((data) => {
                return (<button key={data.id} onClick={() => filterHandler(data.title)} className={`bg-black text-white rounded-md font-medium px-2 py-1 text-lg hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}>
                    {data.title}
                </button>
                )
            })}
    </div>)
}
export default Filter;