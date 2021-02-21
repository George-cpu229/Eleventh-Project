import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
if (props.users.length === 0){
props.setUsers(
    [
    {
        id: 1,
        photoURL:'http://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        followed: false,
        fullName: 'Dmitry K.',
        status: 'I am a boss',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: 2,
        photoURL:'http://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        followed: false,
        fullName: "Svetlana D.",
        status: 'I am so pretty',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: 3,
        photoURL:'http://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        followed: true,
        fullName: "Angela Y.",
        status: 'Web Brewery',
        location: {
            city: 'Washington',
            country: 'USA'
        }
    }
])
}
    return <div>
      {
          props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={ () => {props.unfollow(u.id)  }  }>Unfollow</button> : <button onClick={ () => {props.follow(u.id)}  }>Follow</button>}
                    
                </div>
            </span>
            <span>
                <span>
                   <div>{u.fullName}</div>  
                   <div>{u.status}</div>  
                </span>
                <span>
                   <div>{u.location.country}</div> 
                   <div>{u.location.city}</div>  
                </span>
            </span>
          </div>)
      }
    </div>
}

export default Users;