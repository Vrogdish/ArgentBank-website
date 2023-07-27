import { authState } from "@/redux/authSlice";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {
  const userName = "Tony";

  const dispatch = useDispatch();
  const handleclick = () => {
    confirm("Are you sure to diconnect ?")
    dispatch(authState(false));
    sessionStorage.clear()
  };

  const auth: boolean = useSelector((state: any) => state.authState.isLogged);

  return (
    <nav className={`font-bold px-2 flex items-center gap-4 ${className} `}>
      {auth ? (
        <>
          <Link href={"#"} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleUser} className="h-4" />
            <div>{userName}</div>
          </Link>
          <Link href={"#"} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faRightFromBracket} className="h-4" />
            <div onClick={() => handleclick()}>Sign Out</div>
          </Link>
        </>
      ) : (
        <Link href={"/signIn"} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleUser} className="h-4" />
          <div>Sign In</div>
        </Link>
      )}
    </nav>
  );
}
