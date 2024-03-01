import {Link} from 'react-router-dom'
export default function Nav(){
    return(
        <div className='Nav'>
            <Link to="/" className='home'>Home</Link>
            <Link to="/GroupedTeamMembers" className='teams'>Teams</Link>
        </div>
    )
}