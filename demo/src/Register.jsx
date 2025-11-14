import { useState } from "react"

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)
        
        setFormData({
            name: "",
            email: "",
            phone: "",
            city: ""
        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={formData.name} />
                </div>
                <br />
                <div>
                    <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={formData.email} />
                </div>
                <br />
                <div>
                    <input type="text" name="phone" placeholder="Enter Phone" onChange={handleChange} value={formData.phone} />
                </div>
                <br />
                <div>
                    <input type="text" name="city" placeholder="Enter City" onChange={handleChange} value={formData.city} />
                </div>
                <br />
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>
    )
}

export default Register