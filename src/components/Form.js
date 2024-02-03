
import { useState } from "react";

function Form(props) {
    const [giphy] = useState({
    // const [formData, setFormData] = useState({
        // searchterm: "",
    })

    // const handleChange = (event) => {
    //     setFormData({ ...formData, [event.target.name]: event.target.value })
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        // props.gifSearch(formData.searchterm)
        props.gifSearch(giphy)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                {/* <input type="text"
                        name="searchterm"
                        onChange={ handleChange }
                        value={ formData.searchterm }/> */}
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
};

export default Form;