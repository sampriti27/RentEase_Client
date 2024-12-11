import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUserData } from "../types";
import { setAuthData } from "../store/slices/userSlice";

export const useLoadingWithRefresh = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        // alert("Currently Backend server is down!");
        // Getting refresh-token
        const token: string = JSON.parse(
          localStorage.getItem("refresh_token") as string
        );
        const { data }: AxiosResponse<LoginUserData> = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/auth/refresh`,
          { token }
        );

        // Correctly dispatch the user data to the Redux store
        if (data) {
          const userData = data.user;
          dispatch(
            setAuthData({
              isAuth: true,
              isUserActivated: userData.userActivated as boolean,
              userData: userData,
              role: userData.role as string,
            })
          );

          localStorage.setItem(
            "access_token",
            JSON.stringify(data.accessToken)
          );
          localStorage.setItem(
            "refresh_token",
            JSON.stringify(data.refreshToken)
          );
        }
      } catch (error: any) {
        // enqueueSnackbar(error?.response?.data.message, {
        //     variant : "error"
        // });
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
};
