import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/authSaga";

/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
