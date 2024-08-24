import './FullName.css';

function FullName({firstName, middleInitial, lastName}) {
    return (
        <h1 className='name'><span className='firstName'>{firstName}</span> {middleInitial} <span className='lastName'>{lastName}</span></h1>
    )
}

export default FullName;