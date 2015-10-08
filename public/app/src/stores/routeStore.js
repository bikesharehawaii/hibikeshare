import {fromJS} from 'immutable';
import {createCursorStore} from 'fynx';

export default createCursorStore(fromJS({
  routes: []
}));
