import { useState } from 'react';

import { Button } from '@mantine/core';

import { MdSave } from 'react-icons/md';

const SaveButton = ({onClick, type}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
    }

    return <Button fullWidth type={type} color="yellow" leftIcon={<MdSave/>} onClick={handleClick} loading={loading}>Save</Button>
}

export default SaveButton;