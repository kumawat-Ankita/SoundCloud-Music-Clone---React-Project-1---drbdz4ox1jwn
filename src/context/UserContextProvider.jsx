import React, { useState } from "react";
import MusicId from "./UserContext";

const UserContextProvider = ({ children }) => {
const [songId, setSongId] = useState({prodId:"",image:'',title:''});

return (
<MusicId.Provider value={{ songId, setSongId }}>
{children}
</MusicId.Provider>
);
};
export default UserContextProvider;