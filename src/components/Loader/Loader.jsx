import { Oval } from 'react-loader-spinner'
import css from './Loader.module.css';

export const Loader = () => {
    return (<div>
        <Oval
    height="96"
    ariaLabel="rotating-lines-loading"
    color="#d5d4cd"
    secondaryColor="#f7f7cd"
    strokeWidth="5"
    wrapperClass={css.loaderSpinner}
    visible={true}
    />
    </div>
    )
}