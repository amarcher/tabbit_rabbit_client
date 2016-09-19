import { Actions } from 'react-native-router-flux';
import dispatcher from './dispatcher';
import actionConstants from './action_constants';

const actions = {
  login() {
    Actions.tabList();
  },

  fetchTabs() {
    console.log('fetchTabs called');

    const tabs = [
      {
        id: 358,
        name: "Untitled Tab",
        dine_date: "2016-09-14",
        raw_text: null,
        url: null,
        img_url: null,
        user_id: 749,
        created_at: "2016-09-14T15:27:51.583Z",
        updated_at: "2016-09-14T15:27:51.583Z"
      }
    ];

    dispatcher.dispatch({
      type: actionConstants.receivedTabs,
      payload: tabs
    });
  }
};

export { actions as default }