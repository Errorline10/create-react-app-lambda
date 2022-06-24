import React, {useState, useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './bootstrapCard.css'
import AccountSelector from '../parts/accountSelector'
import myContext from '../context/myContext';


export function BootstrapCard(props) {
  const ctx = useContext(myContext);
  const [currentUser, setCurrentUser] = useState(ctx.currentActive);

  function setCurrentUserWrapper(user){
    setCurrentUser(user);
    if (props.callBack){props.callBack(user)}
  }

  return (
    <Card style={{ width: '20rem', margin: "auto auto" }}>
      <Card.Header variant="top">{props.header}</Card.Header>
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>

        <AccountSelector callBack={setCurrentUserWrapper} />

        {props.show ? (props.body) : null}

        <div className="statusMsg">{props.status}</div>

        {props.show ?
          (
            props.buttonText && ( // only show button if there is text.
              <>
                <Button
                  disabled={props.buttonDisabled ? 'disabled' : null}
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => props.callback()}>
                  {props.buttonText}
                </Button>
              </>
            )) :
          (
            props.buttonResetText && ( // only show button if there is text.
              <>
                <Button
                  type="submit"
                  className="btn btn-text"
                  onClick={() => props.callbackReset()}>
                  {props.buttonResetText}
                </Button>
              </>
            )
          )}

      </Card.Body>
    </Card>


  );
}



{/* <div className={classes()} style={{ maxWidth: "18rem", margin: "auto auto" }}>
<div className="card-header">{props.header}</div>
<div className="card-body" style={{ textAlign: "left"}}>
  {props.title && (<h5 className="card-title">{props.title}</h5>)}
  {props.text && (<p className="card-text">{props.text}</p>)}
  {props.body}
  {props.status && (<div id='createStatus'>{props.status}</div>)}
</div>
</div> */}


