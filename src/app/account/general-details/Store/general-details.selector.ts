import {AccountState} from "./general-details.reducer";

export const selectUser = (state : { user: AccountState }) => state.user.user
