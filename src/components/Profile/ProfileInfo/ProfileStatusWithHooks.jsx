import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {   
 
const [editMode, setEditMode] = useState(false);
const [status, setStatus] = useState(props.status);

useEffect( () => {
 setStatus(props.status);
}, [props.status]);

const activateEditMode = () => { 
 setEditMode(true);
}
const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}

const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
}



    return (
        <div>
{ !editMode &&
<div>
<span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
</div>
}
{ editMode &&
<div>
<input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}  />
</div>
}
</div>
)
}

export default ProfileStatusWithHooks;