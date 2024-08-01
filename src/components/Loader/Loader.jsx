import { RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css';

export const Loader = () => {
    return (<div>
        <RotatingLines
    height="96"
    ariaLabel="rotating-lines-loading"
    color="grey"
    wrapperClass={css.loaderSpinner}
    visible={true}
    />
    </div>
    )
}