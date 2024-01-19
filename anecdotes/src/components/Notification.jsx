import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    paddingLeft: 15,  
    borderWidth: 1
  }
  return (
    <>
      {notification && 
        <div style={style}>
           {notification.map((line,i) => <p key={i}>{line}</p> )} 
        </div>
      }
    </>
  )
}

export default Notification