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
      name: "Banglore",
    },
  ];
  return (
    <div>
      <div className=" flex px-5 py-3 bg-gray-100 justify-between ">
        {List.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Header2;
