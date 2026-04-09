import "./CharacterSearch.css";
import { useState } from "react";

function CharacterSearch({handleSubmit}) {
    const [filters, setFilters] = useState({});

    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const handleClearFilters = (e) => {
        e.preventDefault();
        setFilters({});
        handleSubmit({});
    }

    const fields = [{
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Search for a character..."
    }, {
        name: "status",
        label: "Status",
        type: "select",
        options: [
            { value: "", label: "All Statuses" },
            { value: "alive", label: "Alive" },
            { value: "dead", label: "Dead" },
            { value: "unknown", label: "Unknown" }
        ]
    }, {
        name: "gender",
        label: "Gender",
        type: "select",
        options: [
            { value: "", label: "All Genders" },
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
            { value: "genderless", label: "Genderless" },
            { value: "unknown", label: "Unknown" }
        ]
    }]

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(filters); }}>
                <div className="blocSearch">
                    {fields.map((field) => (
                        <div className="formField" key={field.name}>
                            <label htmlFor={field.name}>{field.label}</label>
                            {field.type === "text" ? (
                                <input
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    value={filters?.[field.name] || ""}
                                    onChange={handleFilterChange}
                                />
                            ) : (
                                <select
                                    name={field.name}
                                    value={filters?.[field.name] || ""}
                                    onChange={handleFilterChange}
                                >
                                    {field.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                    <button type="submit">Search</button>
                    <button type="button" onClick={handleClearFilters}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default CharacterSearch;