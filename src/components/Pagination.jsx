import { useState, useEffect, useRef } from "react";
import "./Pagination.css";

function Pagination({ page, pageCount, onPageChange }) {

    const [pagesArray, setPagesArray] = useState([]);
    const [inputValue, setInputValue] = useState(page);
    const debounceTimer = useRef(null);

    useEffect(() => {
        const newPagesArray = Array.from({ length: pageCount }, (_, i) => i + 1);
        setPagesArray(newPagesArray);
    }, [pageCount]);

    useEffect(() => {
        setInputValue(page);
    }, [page]);

    function handleInputChange(e) {
        const val = Number(e.target.value);
        setInputValue(val);
        clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => {
            if (val >= 1 && val <= pageCount) {
                onPageChange(val);
            }
        }, 500);
    }


    return (
        <div className="pagination">
            <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</button>
            {pagesArray.slice(Math.max(0, Math.min(page - 5, pageCount - 10)), Math.max(10, Math.min(pageCount, page + 5))).map((pageNumber) => ( 
                <button key={pageNumber} onClick={() => onPageChange(pageNumber)} disabled={pageNumber === page}>
                    {pageNumber}
                </button>
            ))}
            <button onClick={() => onPageChange(page + 1)} disabled={page >= pageCount}>Next</button>
            <br />
            <input type="number" min={1} max={pageCount} value={inputValue} onChange={handleInputChange} />
        </div>
    )
};

export default Pagination;