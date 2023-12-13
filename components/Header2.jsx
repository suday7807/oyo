const Header2 = () => {
  const List = [
    {
      name: "Mumbai",
    },
    {
      name: "Uttar Pradesh",
    },
    {
      name: "Goa",
    },
    {
      name: "Banglore",
    },
    {
      name: "Himachal",
    },
    {
      name: "Panjab",
    },
  ];
  return (
    <div>
      <div className=" flex px-5 py-3 bg-gray-100 justify-around ">
        {List.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Header2;
