export const Story = (props) => {
  return (
    <div className={props.image + " w-50px h-100px rounded-[10px]"}>
      <div className={props.profilePic}></div>
      <div className={props.text}></div>
    </div>
  );
};
