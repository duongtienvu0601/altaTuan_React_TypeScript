
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setUsers } from "../redux/users";
import firebase from "firebase/compat/app";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    // Fetch users from Firebase and update Redux store
    const db = firebase.firestore();
    const sinhVienRef = db.collection("SinhVien");
    sinhVienRef.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      dispatch(setUsers(data));
    }).catch((error) => console.log(error)); // add error handling
  }, []);

  return (
    <ul>
      {users.map((user: { id: React.Key | null | undefined; Name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Age: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Major:string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Class: String }) => (
        <li key={user.id}>
          <div>Name: {user.Name}</div>
          <div>Age: {user.Age}</div>
          <div>Major: {user.Major}</div>
          <div>Class: {user.Class}</div>
        </li>
      ))}


    </ul>
  );
};

export default UserList;
