import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
<form className = "contact__form" action="/action_page.php">
    <label htmlFor="fullname"/>
        Full Name:
    <input type="text" id="fullname" maxlength="15" required />

    <label htmlFor="email">
        Email:</label>
    <input type="text" id="email" required maxlength="20"/>

    <label htmlFor="phonenumber">
        Phone Number:</label>
    <input type="tel" id="phonenumber" pattern="[0-9]" maxlength="13" required/>

    <label htmlFor ="comment">
        Comment:</label>
    <textarea id="comment" name="comment" placeholder="Leave Comment in less than 250 characters." maxlength = "250" required></textarea>

    <button className="form-button" id="submitButton" type= "submit">Submit</button>
</form>
            </div>
        )
    }
}

export default Form;