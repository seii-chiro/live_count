import { useLocation } from 'react-router';

const Province = () => {
    const location = useLocation();
    const { rowData } = location.state || {};

    console.log(rowData)
    return (
        <div>Province</div>
    )
}

export default Province