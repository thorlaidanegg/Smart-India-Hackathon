
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhpEryE_jhLCat32_TZOFEmiG0JvYU2EkaygmnCqfA&s' alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
        field: "salary",
        headerName: "Salary",
        width: 160
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Manohar Lal",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "present",
      email: "1snow@gmail.com",
      age: 35,
      salary:11000
    },
    {
      id: 2,
      username: "TP. Padmanabhan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "absent",
      age: 42,
      salary:13000
    },
    {
      id: 3,
      username: "Prabhu Prakash valmiki",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
      salary:16000
    },
    {
      id: 4,
      username: "Sonu vaid rajput",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "present",
      age: 16,
      salary:11000
    },
    {
      id: 5,
      username: "Noyon ali khan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "absent",
      age: 22,
      salary:11000
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "present",
      age: 15,
      salary:18000
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "absent",
      age: 44,
      salary:15000
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "present",
      age: 36,
      salary:12008
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
      salary:13002
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "present",
      age: 65,
      salary:17000
    },
    {
      id: 11,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "present",
      age: 65,
      salary:17000
    },
    {
      id: 12,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "present",
      age: 65,
      salary:17000
    },
    {
      id: 13,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "present",
      age: 65,
      salary:17000
    },
    {
      id: 14,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "present",
      age: 65,
      salary:17000
    }
  ];

  export const userColumns2 = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Equipment",
      headerName: "Equipment",
      width: 230,
    },
    {
      field: "email",
      headerName: "Incharge",
      width: 230,
    },
  
    {
      field: "Kilometers",
      headerName: "Kilometers",
      width: 100,
    },
    {
        field: "servicing",
        headerName: "servicing",
        width: 160
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows2 = [
    {
      id: 1,
      Equipment: "Excavator",
      img: "https://images.pexels/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500.com",
      status: "present",
      email: "Sonu Kumar",
      Kilometers: 35,
      servicing:"Service 1"
    },
    {
      id: 2,
      Equipment: "Bulldozer",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Ram Kumar",
      status: "absent",
      Kilometers: 42,
      servicing:"Service 1"
    },
    {
      id: 3,
      Equipment: "Cranes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Manohar Lal",
      status: "pending",
      Kilometers: 45,
      servicing:"Service 2"
    },
    {
      id: 4,
      Equipment: "Concrete Mixers",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Manohar Lal",
      status: "present",
      Kilometers: 16,
      servicing:"Service 2"
    },
    {
      id: 5,
      Equipment: "Loaders",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Ram Kumar",
      status: "absent",
      Kilometers: 22,
      servicing:"Service 2"
    },
    {
      id: 6,
      Equipment: "Road Rollers",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Ram Kumar",
      status: "present",
      Kilometers: 15,
      servicing:"Service 1"
    },
    {
      id: 7,
      Equipment: "Tower Cranes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Tanmay Kumar",
      status: "absent",
      Kilometers: 44,
      servicing:"Service 1"
    },
    {
      id: 8,
      Equipment: "Dump Trucks",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Nishit Mittal",
      status: "present",
      Kilometers: 36,
      servicing:"Service 1"
    },
  ];

  
  export const userColumns3 = [
    { field: "id", headerName: "ID", width: 70 },{"field": "registration date", "headerName": "registration date", "width": 170}, {"field": "vehicle age", "headerName": "vehicle age", "width": 140}, {"field": "expiry", "headerName": "expiry", "width": 120}, {"field": "puc expiry", "headerName": "puc expiry", "width": 130}, {"field": "registration number", "headerName": "registration number", "width": 190}, {"field": "rc status", "headerName": "rc status", "width": 130}, {"field": "milage", "headerName": "milage", "width": 130}, {"field": "insurance expiry", "headerName": "insurance expiry","width":230}]

  export const userRows3 = [
    {"id":1,"registration date": "26/10/2021", "vehicle age": 785, "expiry": 2867, "puc expiry": 283, "registration number": 2186, "rc status": 0, "milage": 23, "insurance expiry": 300}, {"id":2,"registration date": "21/09/2018", "vehicle age": 1916, "expiry": 1736, "puc expiry": 96, "registration number": 4794, "rc status": 1, "milage": 10, "insurance expiry": 345}, {"id":3,"registration date": "18/03/2019", "vehicle age": 1738, "expiry": 1914, "puc expiry": 35, "registration number": 1618, "rc status": 2, "milage": 8, "insurance expiry": 138}, {"id":4,"registration date": "01/03/2022", "vehicle age": 659, "expiry": 2993, "puc expiry": 80, "registration number": 2791, "rc status": 1, "milage": 15, "insurance expiry": 193}, {"id":5,"registration date": "12/02/2020", "vehicle age": 1407, "expiry": 2245, "puc expiry": 278, "registration number": 5860, "rc status": 2, "milage": 21, "insurance expiry": 242}, {"id":6,"registration date": "23/09/2022", "vehicle age": 453, "expiry": 3199, "puc expiry": 134, "registration number": 7630, "rc status": 2, "milage": 11, "insurance expiry": 150}, {"id":7,"registration date": "25/05/2022", "vehicle age": 574, "expiry": 3078, "puc expiry": 34, "registration number": 4827, "rc status": 0, "milage": 16, "insurance expiry": 224}, {"id":8,"registration date": "25/09/2018", "vehicle age": 1912, "expiry": 1740, "puc expiry": 137, "registration number": 3598, "rc status": 2, "milage": 14, "insurance expiry": 170}, {"id":9,"registration date": "12/04/2019", "vehicle age": 1713, "expiry": 1939, "puc expiry": 287, "registration number": 1138, "rc status": 1, "milage": 14, "insurance expiry": 123}, {"id":9,"registration date": "20/05/2018", "vehicle age": 2040, "expiry": 1612, "puc expiry": 336, "registration number": 1155, "rc status": 2, "milage": 24, "insurance expiry": 198}, {"id":10,"registration date": "06/04/2020", "vehicle age": 1353, "expiry": 2299, "puc expiry": 22, "registration number": 2722, "rc status": 1, "milage": 24, "insurance expiry": 92}, {"id":11,"registration date": "02/01/2021", "vehicle age": 1082, "expiry": 2570, "puc expiry": 23, "registration number": 1689, "rc status": 1, "milage": 21, "insurance expiry": 345}, {"id":12,"registration date": "11/10/2021", "vehicle age": 800, "expiry": 2852, "puc expiry": 199, "registration number": 7772, "rc status": 1, "milage": 12, "insurance expiry": 98}, {"id":13,"registration date": "24/02/2018", "vehicle age": 2125, "expiry": 1527, "puc expiry": 33, "registration number": 8633, "rc status": 0, "milage": 15, "insurance expiry": 2}, {"id":13,"registration date": "18/04/2022", "vehicle age": 611, "expiry": 3041, "puc expiry": 319, "registration number": 3649, "rc status": 1, "milage": 23, "insurance expiry":159}
  ]