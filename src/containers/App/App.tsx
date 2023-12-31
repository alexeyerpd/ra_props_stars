import {Stars} from 'components/Stars/Stars';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    return (
        <div className={block()}>
            <Stars count={5} />
        </div>
    );
}
