import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';

export default function Header() {
    const { t, i18n } = useTranslation();
    const mainClass = 'header';
    return (
      <AppBar position="fixed">
        <Toolbar className={mainClass} variant="dense">
          <Link className="link txt-white" to="/app">{t('Dashboard')}</Link>
          <div>
            <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        </Toolbar>
      </AppBar>
    );
}
