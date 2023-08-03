import { authState } from "@/redux/authSlice";
import { resetProfilState } from "@/redux/profilSlice";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {

  const router = useRouter()

  const dispatch = useDispatch();

  const handleclick = () => {
    confirm("Are you sure to diconnect ?")
    router.replace("/")
    dispatch(authState(false));
    dispatch(resetProfilState())
    sessionStorage.clear()
  };

  const auth: boolean = useSelector((state: any) => state.authState.isLogged);
  const userName = useSelector((state : any ) => state.profilState.userName)

  return (
    <nav className={`font-bold px-2 flex items-center gap-4 ${className} `}>
      {auth ? (
        <>
          <Link href={`/user/${userName}`} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleUser} className="h-4" />
            <div>{userName}</div>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleclick()}>
            <FontAwesomeIcon icon={faRightFromBracket} className="h-4" />
            <div >Sign Out</div>
          </div>
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
