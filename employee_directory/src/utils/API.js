import axios from "axios";

export default {

    getEmployees : function(){

        return axios.get("https://randomuser.me/api/?results=200&nat=us")
        
    }
};

// Export an object containing a method -- will be used to access the employee list API
