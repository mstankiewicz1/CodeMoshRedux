import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import configureStore from './store/configureStore';
import { bugAdded, bugResolved, bugAssignedToUser, getUnresolvedBugs, getBugsByUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';
import reducer from './store/reducer';
import logger from './store/middleware/logger';
import * as actions from './store/api';
import { loadBug } from './store/bugs';
import { addBug } from './store/bugs';
import { loadBugs, resolveBug } from './store/bugs';
import { assignBugToUser } from './store/bugs';

// const store = createStore(reducer, applyMiddleware(logger));

const store = configureStore();

// store.dispatch((dispatch, getState) => {
//   // calling API
//   dispatch({ type: 'bugsReceived', bugs: [1,2,3] })
//   console.log(getState());
// });

// store.dispatch({
//   type: 'error',
//   payload: { message: "An error occured." } 
// });

// store.subscribe(() => {
//   console.log("store changed!!!");
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({description: "Bug 1"}));
// store.dispatch(bugAdded({description: "Bug 2"}));
// store.dispatch(bugAdded({description: "Bug 3"}));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// const bugs = getBugsByUser(2)(store.getState());
// console.log(bugs);

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// export const getUnresolvedBugs = createSelector(
//   state => state.entities.bugs,
//   state => state.entities.projects,
//   (bugs, projects) => bugs.filter(bug => !bug.resolved)
// );

// export const getBugsByUser = createSelector(
//   state => state.entities.bugs,
//   state => state.entities.projects,
//   (bugs, projects) => bugs.filter(bug => !bug.resolved)
// );


// console.log(unresolvedBugs);

// console.log(store.getState());
// store.dispatch(loadBugs());

// setTimeout(() => store.dispatch(loadBugs()), 2000);

// store.dispatch(addBug({ description: "a" }));


store.dispatch(loadBugs());

// setTimeout(() => store.dispatch(resolveBug(1)), 2000);
setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);

// store.dispatch(
//     actions.apiCallBegan()
//     // url: "/bugs",
//     // onSuccess: "bugs/bugsReceived",
//     // onError: actions.apiCallFailed.type
//   );

// store.dispatch({
//   type: "apiCallBegan", //api call request
//   payload: {
//       url: "/bugs",
//       onSuccess: "bugsReceived",
//       onError: "bugsRequestFailed"
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
