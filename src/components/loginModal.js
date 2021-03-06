import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 300,
        height:300,
        backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonColor:{
        background:"#00C8AA",
        color:"#fff",
        width:300,     
  },
  inputWith:{
      width:300
  },
  Text:{
      textAlign:'center'
  }
}));

export default function Login() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained"  onClick={handleOpen}>
            Login
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h1 className={classes.Text}>Sign In</h1>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" className={classes.inputWith} aria-describedby="my-helper-text" />
                    </FormControl> <br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" className={classes.inputWith} type="password" aria-describedby="my-helper-text" />
                    </FormControl><br/><br/>

                    <FormControl>
                    <Button variant="contained" className={classes.buttonColor} disableElevation>
                        Sign In
                     </Button>
                    </FormControl>
                </div>
            </Modal>
        </div>
    );
}