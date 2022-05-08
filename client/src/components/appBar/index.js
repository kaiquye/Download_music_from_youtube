import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RadioIcon from '@material-ui/icons/Radio';
import style from './appbar.module.css'


export function NavBar() {


    return (
        <main>
            <div  >
                <AppBar className={style.nav} position="static">
                    <Toolbar className={style.root} >
                        <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
                            <RadioIcon />
                        </IconButton>
                        <Typography variant="h6" className={style.title}>
                            Decoder
                        </Typography>
                        <div className={style.buttonDiv}  >
                            <Button color="inherit" className={style.button} >Meus downloads</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </main>
    )
}