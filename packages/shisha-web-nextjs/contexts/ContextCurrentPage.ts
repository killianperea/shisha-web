import React from 'react';

const ContextCurrentPage = React.createContext({
    currentUrl: '/',
    locale: 'es'
})

export default ContextCurrentPage;