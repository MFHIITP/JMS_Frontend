import React, { useEffect, useState, useContext } from "react";
import { Box, Heading, Spinner, Center } from "@chakra-ui/react";
import axios from "axios";
import { MyContext } from "../main";

const UsersTable = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {adminemails} = useContext(MyContext);
  const {executives} = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://nvdqwpdb-8000.inc1.devtunnels.ms/users/admins")
      .then(
        (response) => {
          console.log(response.data.data);
          setUsers(response.data.data);
          setLoading(false);
        },
        { withCredentials: true }
      )
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const deleteaccount = async (id) => {
    alert("Do you want to remove this person ?");
    const response = await fetch(
      "https://nvdqwpdb-8000.inc1.devtunnels.ms/users/deleteuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    console.log(response.status)
  };
  if(adminemails.includes(props.details.email)){
    return (
      <Box maxW="80vw" mx="auto" mt={8} p={4}>
        <Heading mb={6} textAlign="center">
          User Data
        </Heading>
        {loading ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <div>
            <div className="flex justify-center items-center text-white text-4xl">
              UserList ({users.length})
            </div>
            <div>
              {users.map((user) => (
                <div
                  key={user.id}
                  className="text-white m-4 p-4 bg-gray-700 rounded-lg relative font-mono"
                >
                  <div>Name: <span className="ml-4 text-xl">{user.name}</span></div>
                  <div>Email: <span className="ml-4 text-xl">{user.email}</span></div>
                  <div>Department: <span className="ml-4 text-xl">{user.department}</span></div>
                  <div>College: <span className="ml-4 text-xl">{user.college}</span></div>
                  <div>Phone: <span className="ml-4 text-xl">{user.phone}</span></div>
                  <div>Year: <span className="ml-4 text-xl">{user.year}</span></div>
                  <div
                    onClick={() => {
                      deleteaccount(user.email);
                    }}
                    className={`absolute top-1 right-1 cursor-pointer bg-red-500 m-2 p-2 rounded-lg hover:bg-red-700 ${(executives.includes(user.email) && !executives.includes(props.details.email)) ? 'hidden' : 'none'}`}
                  >
                    RemoveUser
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Box>
    );
  }
  else{
    return(
      <>
        <div className="flex justify-center items-center text-red-700 text-4xl font-semibold h-80">
          You are not an admin. Please leave this page immediately.
        </div>
      </>
    )
  }
};

export default UsersTable;
