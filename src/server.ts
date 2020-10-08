import {App} from './app'
import {userServices} from './services/userServices'
const app =new App([
    new userServices
])
app.listen()