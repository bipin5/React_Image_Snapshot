import { useParams } from 'react-router-dom';
import Container from 'Components/Container/Container';

function Item({ categoryInput }) {
  let { queryInput } = useParams();
  return (
    <>
      <h2 className='mt-5 ms-5 p-2 d-flex fw-bold justify-content-center text-capitalize'>
        {queryInput || categoryInput} Pictures
      </h2>
      <Container query={queryInput || categoryInput} />
    </>
  );
}

export default Item;
