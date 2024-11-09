import './NameComponent.css'

function NameComponent({name}: any) {
  return (
    <h1 className='level-select-name'>
        {name}
    </h1>
  );
}

export default NameComponent;
