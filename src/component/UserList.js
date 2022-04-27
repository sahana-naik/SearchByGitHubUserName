import React from "react";
import '../Style/style.css'

const UserList = ({data,error}) => {
console.log("data", data)

return(
    <React.Fragment>
        {error && <h4 className="error-msg">User is not found</h4>}
        {data &&
        <div className="table_wrapper">
            <table className="table_custom">
                <tr>
                    <th>Repo Name</th>
                    <th>Language</th>
                    <th>Description</th>
                </tr>
               
                {data?.map((item) => {
                    return (
                        <>
                         <tr>
                         <td>{item.name}</td>
                        <td>{item.language}</td>
                        <td>{item.description}</td>
                         </tr>
                   
                        </>
              )
                })}
             
            </table>
        </div>
}
    </React.Fragment>
)

}

export default UserList;