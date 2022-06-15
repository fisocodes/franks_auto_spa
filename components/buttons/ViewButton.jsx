import { useState } from 'react';

import { Button } from '@mantine/core';

import { MdVisibility } from 'react-icons/md';

const ViewButton = ({onClick}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
    }

    return <Button fullWidth leftIcon={<MdVisibility/>} onClick={handleClick} loading={loading}>Ver</Button>
}

export default ViewButton;