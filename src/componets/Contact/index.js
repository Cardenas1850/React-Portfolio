import React from "react";

function Contact() {
return ( 
<section className="login-form">
    <div className="content">
    <form>
        <h1>Reach out to me here:</h1>
        <div>
            <label>Name:</label>
            <input className="input-field"></input>
        </div>
        <div>
            <label>Email:</label>
            <input className="input-field"></input>
        </div>
        <div>
            <label>Message:</label>
            <input className="input-field"></input>
        </div>
        <button className="action-form">Submit</button>
    </form>
    </div>
</section>



)
}




export default Contact;