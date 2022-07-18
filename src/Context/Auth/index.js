import { createContext, useState } from "react";


const AuthContext = createContext({
	isLogin: false,
	setLogin: () => {},
});

export default AuthContext;