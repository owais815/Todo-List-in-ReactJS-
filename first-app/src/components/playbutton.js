function PlayButton({ children, onPlay, onPause }) {
  function handleClick() {
    let Playing = false;
    if (Playing) {
      onPlay();
    } else {
      onPause();
    }
    Playing = !Playing;
  }
  return (
    <>
    
        <button className="button1" onClick={() => handleClick}>{children}</button>
     
    </>
  );
}
export default PlayButton;
