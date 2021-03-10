import React from 'react';
import { ContextCurrentPageModel } from '../models/ContextCurrentPage.model';

const ContextCurrentPage = React.createContext<ContextCurrentPageModel>({
    currentUrl: '/',
    locale: 'es',
    menuItems: []
})

export default ContextCurrentPage;