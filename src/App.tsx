// src/App.js

import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                Link
            </Button>
        </Stack>
    );
}

export default App;
