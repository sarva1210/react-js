const Filters = ({ filter, setFilter }) =>{
    return(
        <div className="filters" >

            <button className={filter === "all" ? "active" : ""} onClick={()=>setFilter("all")} > All </button>

            <button className={filter === "all" ? "active" : ""} onClick={()=>setFilter("active")} > Active </button>

            <button className={filter === "all" ? "active" : ""} onClick={()=>setFilter("completed")} > Completed </button>
            
        </div>
    );
};

export default Filters;