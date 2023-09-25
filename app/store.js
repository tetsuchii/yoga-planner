import { hookstate, useHookstate } from "@hookstate/core";
import { useRouter } from "expo-router";
import _, { get, set } from "lodash";

const initialState = hookstate({
  user: null,
});

export const useGlobalState = () => {
  const state = useHookstate(initialState);
  const router = useRouter();

  return {
    getUser: () => state.user.get({ noproxy: true }),
    setUser: (user) => state.user.set(user),
    init() {
      console.log(this.getUser());
      if (this.getUser() == null) {
        console.log("you should log in");
      }
    },
  };
};
