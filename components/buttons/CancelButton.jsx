import { useState } from 'react';

import { Button } from '@mantine/core';

import { MdCancel } from 'react-icons/md';

const CancelButton = ({onClick}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
    }

    return <Button color="blue" leftIcon={<MdCancel/>} onClick={handleClick} loading={loading}>Cancelar</Button>
}

export default CancelButton;