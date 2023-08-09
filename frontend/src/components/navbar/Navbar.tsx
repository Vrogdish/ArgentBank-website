import { getProfil } from "@/api/getProfil";
import { authState, tokenState } from "@/redux/authSlice";
import {
  loadProfilState,
  
  resetProfilState,
} from "@/redux/profilSlice";
import { AuthState, ProfilState } from "@/types/types";
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
  const router = useRouter();
  const dispatch = useDispatch();

  // logout
  const handleclick = () => {
    confirm("Are you sure to diconnect ?");
    router.replace("/");
    dispatch(authState(false));
    dispatch(tokenState(""));
    dispatch(resetProfilState());
    localStorage.clear();
  };

  // autoConnect if remember
  const autoConnect = async (token: string) => {
    dispatch(tokenState(token));

    const profil = await getProfil(token);
    if (profil?.status === 200) {
      dispatch(loadProfilState(profil?.body));
      dispatch(authState(true));
    }
  };

  const localStorageToken = localStorage.getItem("token");
  localStorageToken ? autoConnect(localStorageToken) : null;

  const auth = useSelector((state: AuthState) => state.authState.isLogged);
  const userName = useSelector(
    (state: ProfilState) => state.profilState.userName
  );

  return (
    <nav className={`font-bold px-2 flex items-center gap-4 ${className} `}>
      {auth ? (
        <>
          <Link href={`/user`} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleUser} className="h-4" />
            <div>{userName}</div>
          </Link>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleclick()}
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="h-4" />
            <div>Sign Out</div>
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
