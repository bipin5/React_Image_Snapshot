const Images = ({ onSelectImage, title }) => {
  return (
    <div className='row bg-white w-100 p-4 h-10 align-items-end'>
      <img className='mw-100 ms-0 mt-4 ps-5' src={onSelectImage} alt={title} />
    </div>
  );
};
export default Images;
