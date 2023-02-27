import { useParams } from 'react-router-dom';
import Container from '../Container/Container';

function Item({ categoryInput }) {
  let { query } = useParams();

  return (
    <>
      <h2 className='mt-5 ms-5 p-2 d-flex fw-bold justify-content-center text-capitalize'>
        {categoryInput || query} Pictures
      </h2>
      <Container query={categoryInput || query} />
    </>
  );
}

export default Item;
