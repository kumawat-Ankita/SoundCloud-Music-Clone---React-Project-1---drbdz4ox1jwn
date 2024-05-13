import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <div className='m-3 ml-10'>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px' }} />
                </Link>

            </div>
            <div className="flex flex-col items-center pt-44 font-semibold lg:text-4xl xlsm:text-xl">

                <p>Oops!</p>
                <p>Something went wrong</p>
            </div>
        </div>
    )
}