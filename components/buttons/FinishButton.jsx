import { useState } from 'react';

import { Button } from '@mantine/core';

import { MdCheckCircle } from 'react-icons/md';

const FinishButton = ({onClick}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
    }

    return <Button color="yellow" leftIcon={<MdCheckCircle/>} onClick={handleClick} loading={loading}>Finalizar</Button>
}

export default FinishButton;