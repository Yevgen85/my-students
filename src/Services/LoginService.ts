import axios from "axios";
import appConfig from "../Configuration/Config";
import UserModel from "../Models/UserModel";
import { authorisationStore, loginAction, logOutAction } from "../Redux/AuthorisationState";



class LoginService {
    async login(userModel: UserModel): Promise<void> {
        // const response = await axios.post<boolean>((appConfig.apiAddress + 'login?login=' + myLogin + '&password=' + myPassword));
            const response = await axios.post<UserModel>((appConfig.apiAddress + 'login'), userModel);
            authorisationStore.dispatch(loginAction(response.data));
        }

        logOut(): void {
            authorisationStore.dispatch(logOutAction());
        }
    }


const loginService = new LoginService();
export default loginService;