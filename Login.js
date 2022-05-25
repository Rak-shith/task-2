import React, {useState} from "react";
import axios from 'axios'
import { useHistory, Link} from "react-router-dom";


function Login({loggedInUser}){

    //const { id } = useParams();
    let history = useHistory();
let userDetails;
let presentUser;
let isUserPresent=false;
//let loggedInUser;
    const [details, setDetails] = useState({
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        email: "",
        age: "",
        web: ""
    });

    const { first_name, email} = details;

    const onInputChange = e => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    //const [error, setError] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        console.log("details",details)
        // Fetching all the user details 
        await axios.get("http://localhost:3003/users")
        .then((response) => {
            userDetails=response;
        });

        userDetails['data'].forEach(element => {
            if(element.first_name!==undefined && (element.first_name.toLowerCase() === details.first_name.toLowerCase()) && element.email !==undefined && (element.email.toLowerCase() === details.email.toLowerCase())){
                presentUser=element;
                isUserPresent=true;
                return presentUser;
            }
        });
        if(isUserPresent){
        await axios.get(`http://localhost:3003/users/${presentUser.id}`).then((response) => {
            console.log("response",response)
            if(response.data!=null){
                 loggedInUser=response.data;
            }
            console.log("loggedInUser",loggedInUser)
        });
        setDetails("");
        history.push("/LoginDetails")
    }else{
        alert("Ooops.. No user found");
    }
    };

    return(
        <div className="container">
            <div className=" w-75 mx-auto shadow p-4">
                <h2 className="text-center mb-4">Login form</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your User Name"
                        name="first_name"
                        value={first_name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Password"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block"> Log In </button>
                </form>
                <div className="pt-3">
                    <h6>Don't have an account please <Link className="h6" to="/Register">
                    Register here
                    </Link> </h6>
                </div>
                {/* <div >
                if(!isUserPresent){
                    <h2>
                       Ooops!!! No User found
                    </h2>
                }
                    
                </div> */}
            </div>
        </div>
    );

}

export default Login;