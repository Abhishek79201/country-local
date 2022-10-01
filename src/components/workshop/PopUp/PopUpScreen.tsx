/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface PopUpScreenVal {
  children: any;
  activePopUp: any;
}

const PopUpScreen = ({ children, activePopUp }: PopUpScreenVal) => {
  // const { setActivePopUp } = activePopUp;

  const handleClose = () => {
    activePopUp(false);
    document.querySelector('body')?.classList.remove('active');
  };
  return (
    <div className="fixed top-0 left-0 z-[1040] flex h-screen w-full select-none items-center justify-center bg-[#0000009d]">
      <button
        className="absolute top-2 right-2 z-[1050] rounded bg-black p-2  text-white"
        onClick={() => handleClose()}
        type="button"
      >
        x
      </button>
      <div className="item">{children}</div>
    </div>
  );
};

export default PopUpScreen;
