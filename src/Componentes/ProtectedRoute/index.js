import { Navigate } from "react-router-dom"
import { useParams } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const userId  = useParams();

  const newLocal = (localStorage.getItem('auth-token') || userId.login) ? 
    props.children : 
    <Navigate to="/?msg=Should do the login" />

  return  ( newLocal )

}
export default ProtectedRoute

// export default class ProtectedRoute extends Component {

//   render() {
//     const user = localStorage.getItem('auth-token')

//     if (user || 1===1) {
//       console.log('ProtectedRoute ok')
//       return this.props.children
//     } else {
//       console.log('ProtectedRoute erro')
//       return <Navigate to="/?msg=Should do the login" />;
//     }

//   };
// }