import Enzime from 'enzyme';
import EnzimeAdapter from 'enzyme-adapter-react-16';

Enzime.configure({
    adapter: new EnzimeAdapter(),
    disableLifecycleMethods: true
});
